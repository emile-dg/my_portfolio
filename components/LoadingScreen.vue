<script setup lang="ts">
import gsap from 'gsap'

const {setPageReady} = usePageReady()

const overlayRef = ref<HTMLElement | null>(null)
const isVisible = ref(true)

onMounted(() => {
    // Reveal document now that LoadingScreen is covering everything
    document.documentElement.style.visibility = ''
    // Lock scroll
    document.body.style.overflow = 'hidden'

    const runExit = () => {
        if (!overlayRef.value) return
        gsap.to(overlayRef.value, {
            x: '100%',
            duration: 0.9,
            ease: 'power3.inOut',
            onComplete: () => {
                isVisible.value = false
                document.body.style.overflow = ''
                setPageReady()
            },
        })
    }

    if (document.readyState === 'complete') {
        // Already loaded — small delay for visual polish
        setTimeout(runExit, 400)
    } else {
        window.addEventListener('load', () => setTimeout(runExit, 1000), {once: true})
    }
})
</script>

<template>
    <Teleport to="body">
        <div
            v-if="isVisible"
            ref="overlayRef"
            class="loading-overlay"
        >
            <div class="loading-content">
                <span class="loading-dot"/>
                <span class="loading-dot"/>
                <span class="loading-dot"/>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.loading-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    will-change: transform;
}

.loading-content {
    display: flex;
    gap: 10px;
    align-items: center;
}

.loading-dot {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    animation: pulse 0.9s ease-in-out infinite alternate;
}

.loading-dot:nth-child(2) {
    animation-delay: 0.25s;
}

.loading-dot:nth-child(3) {
    animation-delay: 0.5s;
}

@keyframes pulse {
    from {
        opacity: 0.2;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1.2);
    }
}
</style>
