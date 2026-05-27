<script setup lang="ts">
import gsap from 'gsap'

const props = withDefaults(
    defineProps<{
        pixelsPerSecond?: number
        maxTimeScale?: number
        gap?: number
        imageWidth?: number
        imageHeight?: number
        borderRadius?: number
        fullBleed?: boolean
        fit?: 'cover' | 'contain'
    }>(),
    {
        pixelsPerSecond: 28,
        maxTimeScale: 2.5,
        gap: 24,
        imageWidth: 360,
        imageHeight: 460,
        borderRadius: 20,
        fullBleed: true,
        fit: 'cover',
    }
)

const root = ref<HTMLElement | null>(null)
const slotSource = ref<HTMLElement | null>(null)
const track = ref<HTMLElement | null>(null)

const modalSrc = ref<string | null>(null)
const modalAlt = ref('')

let tween: gsap.core.Tween | null = null
let resizeObserver: ResizeObserver | null = null
let resizeTimer: number | null = null

const speedProxy = { scale: 1 }
let smoothTimeScale: ((value: number) => void) | null = null

let pointerDownX = 0
let pointerDownY = 0
let pointerMoved = false

type CarouselImage = {
    src: string
    alt: string
    srcset?: string
    sizes?: string
}

function readImagesFromSlot(): CarouselImage[] {
    if (!slotSource.value) return []

    const imgs = Array.from(
        slotSource.value.querySelectorAll('img')
    ) as HTMLImageElement[]

    return imgs
        .map((img) => ({
            src: img.currentSrc || img.src,
            alt: img.alt || '',
            srcset: img.getAttribute('srcset') || undefined,
            sizes: img.getAttribute('sizes') || undefined,
        }))
        .filter((img) => img.src)
}

function createItem(image: CarouselImage, clone = false) {
    const item = document.createElement('button')
    item.type = 'button'
    item.className = 'image-carousel__item'

    if (clone) {
        item.dataset.carouselClone = 'true'
        item.setAttribute('aria-hidden', 'true')
        item.tabIndex = -1
    }

    const img = document.createElement('img')
    img.src = image.src
    img.alt = image.alt
    img.draggable = false
    img.decoding = 'async'
    img.loading = 'lazy'

    if (image.srcset) img.srcset = image.srcset
    if (image.sizes) img.sizes = image.sizes

    item.appendChild(img)

    gsap.set(item, {
        width: props.imageWidth,
        height: props.imageHeight,
        flex: '0 0 auto',
        borderRadius: props.borderRadius,
    })

    gsap.set(img, {
        width: '100%',
        height: '100%',
        objectFit: props.fit,
        borderRadius: props.borderRadius,
    })

    return item
}

function getLoopDistance(items: HTMLElement[]) {
    const first = items[0]
    const last = items[items.length - 1]

    if (!first || !last) return 0

    return last.offsetLeft + last.offsetWidth - first.offsetLeft + props.gap
}

async function buildCarousel() {
    if (!root.value || !track.value) return

    tween?.kill()
    tween = null

    const images = readImagesFromSlot()

    track.value.innerHTML = ''
    track.value.style.gap = `${props.gap}px`

    if (!images.length) return

    const baseItems = images.map((image) => createItem(image))

    for (const item of baseItems) {
        track.value.appendChild(item)
    }

    await nextTick()
    await new Promise(requestAnimationFrame)

    const distance = getLoopDistance(baseItems)

    if (!distance) return

    let safety = 0

    while (
        track.value.scrollWidth < distance + root.value.clientWidth * 2 &&
        safety < 12
        ) {
        for (const image of images) {
            track.value.appendChild(createItem(image, true))
        }

        safety++
    }

    gsap.set(track.value, {
        x: 0,
        force3D: true,
    })

    tween = gsap.to(track.value, {
        x: -distance,
        duration: distance / Math.max(1, props.pixelsPerSecond),
        ease: 'none',
        repeat: -1,
        force3D: true,
    })

    tween.timeScale(speedProxy.scale)
}

function scheduleRebuild() {
    if (resizeTimer) {
        window.clearTimeout(resizeTimer)
    }

    resizeTimer = window.setTimeout(() => {
        buildCarousel()
    }, 150)
}

function onPointerDown(event: PointerEvent) {
    pointerDownX = event.clientX
    pointerDownY = event.clientY
    pointerMoved = false
}

function onPointerMove(event: PointerEvent) {
    if (!root.value || !tween) return

    if (
        Math.abs(event.clientX - pointerDownX) > 8 ||
        Math.abs(event.clientY - pointerDownY) > 8
    ) {
        pointerMoved = true
    }

    const rect = root.value.getBoundingClientRect()
    const progress = (event.clientX - rect.left) / rect.width
    const normalized = progress * 2 - 1

    const timeScale = gsap.utils.clamp(
        -props.maxTimeScale,
        props.maxTimeScale,
        normalized * props.maxTimeScale
    )

    smoothTimeScale?.(timeScale)
}

function onPointerLeave() {
    smoothTimeScale?.(1)
}

function onClick(event: MouseEvent) {
    if (pointerMoved) return

    const img = (event.target as HTMLElement).closest('img') as HTMLImageElement | null
    if (!img) return

    modalSrc.value = img.currentSrc || img.src
    modalAlt.value = img.alt || ''
    document.body.style.overflow = 'hidden'
}

function closeModal() {
    modalSrc.value = null
    modalAlt.value = ''
    document.body.style.overflow = ''
}

function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') closeModal()
}

onMounted(async () => {
    smoothTimeScale = gsap.quickTo(speedProxy, 'scale', {
        duration: 0.35,
        ease: 'power3.out',
        onUpdate() {
            tween?.timeScale(speedProxy.scale)
        },
    })

    await nextTick()
    await buildCarousel()

    if (root.value) {
        resizeObserver = new ResizeObserver(scheduleRebuild)
        resizeObserver.observe(root.value)
    }

    window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
    tween?.kill()
    resizeObserver?.disconnect()

    if (resizeTimer) {
        window.clearTimeout(resizeTimer)
    }

    window.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
})
</script>

<template>
    <section
        ref="root"
        class="image-carousel"
        :class="{ 'image-carousel--full-bleed': fullBleed }"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerleave="onPointerLeave"
        @click="onClick"
    >
        <!-- Hidden Nuxt Content slot source -->
        <div ref="slotSource" class="image-carousel__source" aria-hidden="true">
            <slot />
        </div>

        <!-- Real animated carousel -->
        <div ref="track" class="image-carousel__track" />
    </section>

    <Teleport to="body">
        <div
            v-if="modalSrc"
            class="image-carousel-modal"
            @click.self="closeModal"
        >
            <button
                type="button"
                class="image-carousel-modal__close"
                aria-label="Close image"
                @click="closeModal"
            >
                ×
            </button>

            <img
                class="image-carousel-modal__image"
                :src="modalSrc"
                :alt="modalAlt"
            />
        </div>
    </Teleport>
</template>

<style scoped>
.image-carousel {
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    padding: 32px 0;
    cursor: ew-resize;
    touch-action: pan-y;
    contain: layout paint;
}

.image-carousel--full-bleed {
    width: 100vw;
    max-width: 100vw;
    margin-left: calc(50% - 50vw);
}

.image-carousel__source {
    display: none;
}

.image-carousel__track {
    display: flex;
    align-items: center;
    width: max-content;
    max-width: none;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
}

.image-carousel__item {
    appearance: none;
    display: block;
    flex: 0 0 auto;
    padding: 0;
    margin: 0;
    border: 0;
    overflow: hidden;
    background: transparent;
    cursor: pointer;
    line-height: 0;
}

.image-carousel__item img {
    display: block;
    max-width: none;
    margin: 0;
    user-select: none;
    pointer-events: auto;
}

.image-carousel::before,
.image-carousel::after {
    content: '';
    position: absolute;
    top: 0;
    z-index: 2;
    width: 10vw;
    height: 100%;
    pointer-events: none;
}

.image-carousel::before {
    left: 0;
    background: linear-gradient(to right, var(--carousel-bg, #eaeaea), transparent);
}

.image-carousel::after {
    right: 0;
    background: linear-gradient(to left, var(--carousel-bg, #eaeaea), transparent);
}

.image-carousel-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(0, 0, 0, 0.88);
}

.image-carousel-modal__image {
    max-width: min(1200px, 94vw);
    max-height: 88vh;
    object-fit: contain;
    border-radius: 20px;
}

.image-carousel-modal__close {
    position: fixed;
    top: 24px;
    right: 28px;
    z-index: 1;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);
    color: white;
    font-size: 32px;
    line-height: 1;
    cursor: pointer;
}
</style>