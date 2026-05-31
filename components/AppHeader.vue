<script setup lang="ts">
import { gsap } from 'gsap'

const { t, locale, setLocale, locales } = useI18n()

function switchLocale(event: Event) {
    const code = (event.target as HTMLSelectElement).value as 'en' | 'fr'
    setLocale(code)
    closeMenu()
}

// Mobile menu state
const menuOpen = ref(false)
const menuOverlay = ref<HTMLElement | null>(null)

let tl: gsap.core.Timeline | null = null

function openMenu() {
    menuOpen.value = true
    document.body.style.overflow = 'hidden'

    nextTick(() => {
        if (!menuOverlay.value) return

        tl = gsap.timeline()

        // Slide overlay in from right to left
        tl.fromTo(
            menuOverlay.value,
            { x: '100%' },
            { x: '0%', duration: 0.45, ease: 'power3.inOut' }
        )

        // Stagger menu items from right to left
        const items = menuOverlay.value.querySelectorAll('.menu-item')
        tl.fromTo(
            items,
            { x: 80, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.08,
                ease: 'power3.out',
            },
            '-=0.15'
        )
    })
}

function closeMenu() {
    if (!menuOverlay.value) {
        menuOpen.value = false
        document.body.style.overflow = ''
        return
    }

    const items = menuOverlay.value.querySelectorAll('.menu-item')

    const closeTl = gsap.timeline({
        onComplete: () => {
            menuOpen.value = false
            document.body.style.overflow = ''
        },
    })

    closeTl.to(items, {
        x: 80,
        opacity: 0,
        duration: 0.25,
        stagger: 0.05,
        ease: 'power2.in',
    })

    closeTl.to(
        menuOverlay.value,
        { x: '100%', duration: 0.35, ease: 'power3.inOut' },
        '-=0.1'
    )
}

function toggleMenu() {
    if (menuOpen.value) {
        closeMenu()
    } else {
        openMenu()
    }
}

onBeforeUnmount(() => {
    document.body.style.overflow = ''
})
</script>

<template>
    <header class="border-b sticky top-0 bg-off-white z-100">
        <div class="container mx-auto py-5 px-4 flex items-center justify-between text-xl font-bold">

            <!-- Logo / Name -->
            <nuxt-link-locale to="/" class="shrink-0">{{ $t('header.name') }}</nuxt-link-locale>

            <!-- Desktop nav (hidden on mobile) -->
            <nav class="hidden md:flex gap-8 items-center">
                <nuxt-link-locale active-class="underline" to="/">{{ $t('header.nav.home') }}</nuxt-link-locale>
                <nuxt-link-locale active-class="underline" to="#experience">{{ $t('header.nav.experience') }}</nuxt-link-locale>
                <nuxt-link-locale active-class="underline" to="#contact">{{ $t('header.nav.contact') }}</nuxt-link-locale>
            </nav>

            <!-- Right side: language picker + hamburger -->
            <div class="flex items-center gap-3">
                <!-- Language picker -->
                <div class="relative inline-flex items-center border border-black">
                    <select
                        v-if="locales.length > 1"
                        :value="locale"
                        @change="switchLocale"
                        :aria-label="$t('header.language.label')"
                        class="appearance-none bg-transparent pl-3 pr-7 py-1 text-sm font-bold cursor-pointer focus:outline-none"
                    >
                        <option v-for="loc in locales" :key="loc.code" :value="loc.code">
                            {{ loc.name }}
                        </option>
                    </select>
                    <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs leading-none">▾</span>
                </div>

                <!-- Hamburger button (mobile only) -->
                <button
                    class="md:hidden relative flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-200"
                    :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
                    @click="toggleMenu"
                >
                    <!-- Top bar -->
                    <span
                        class="absolute block w-6 h-0.5 bg-black transition-all duration-300 origin-center"
                        :style="menuOpen ? 'transform: translateY(0) rotate(45deg)' : 'transform: translateY(-5px) rotate(0deg)'"
                    ></span>
                    <!-- Middle bar -->
                    <span
                        class="absolute block w-6 h-0.5 bg-black transition-all duration-300 origin-center"
                        :style="menuOpen ? 'opacity: 0; transform: scaleX(0)' : 'opacity: 1; transform: scaleX(1)'"
                    ></span>
                    <!-- Bottom bar -->
                    <span
                        class="absolute block w-6 h-0.5 bg-black transition-all duration-300 origin-center"
                        :style="menuOpen ? 'transform: translateY(0) rotate(-45deg)' : 'transform: translateY(5px) rotate(0deg)'"
                    ></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile full-screen overlay menu -->
    <Teleport to="body">
        <div
            v-if="menuOpen"
            ref="menuOverlay"
            class="fixed inset-0 bg-off-white z-[150] flex flex-col px-6 pt-24 pb-10"
            style="transform: translateX(100%)"
        >
            <!-- Close button inside overlay (top-right) -->
            <button
                class="absolute top-5 right-4 flex justify-center items-center w-8 h-8 focus:outline-none"
                :aria-label="'Close menu'"
                @click="closeMenu"
            >
                <!-- Two bars absolutely positioned at the same center point -->
                <span class="absolute block w-6 h-0.5 bg-black origin-center rotate-45"></span>
                <span class="absolute block w-6 h-0.5 bg-black origin-center -rotate-45"></span>
            </button>

            <nav class="flex flex-col gap-8">
                <nuxt-link-locale
                    class="menu-item text-4xl font-bold tracking-tight opacity-0 text-left"
                    to="/"
                    @click="closeMenu"
                >
                    {{ $t('header.nav.home') }}
                </nuxt-link-locale>
                <nuxt-link-locale
                    class="menu-item text-4xl font-bold tracking-tight opacity-0 text-left"
                    to="#experience"
                    @click="closeMenu"
                >
                    {{ $t('header.nav.experience') }}
                </nuxt-link-locale>
                <nuxt-link-locale
                    class="menu-item text-4xl font-bold tracking-tight opacity-0 text-left"
                    to="#contact"
                    @click="closeMenu"
                >
                    {{ $t('header.nav.contact') }}
                </nuxt-link-locale>

                <!-- Language picker in overlay -->
                <div class="menu-item opacity-0 mt-4">
                    <div class="relative inline-flex items-center border border-black">
                        <select
                            :value="locale"
                            @change="switchLocale"
                            class="appearance-none bg-transparent pl-3 pr-7 py-1 text-sm font-bold cursor-pointer focus:outline-none"
                            :aria-label="$t('header.language.label')"
                        >
                            <option v-for="loc in locales" :key="loc.code" :value="loc.code">
                                {{ loc.label }}
                            </option>
                        </select>
                        <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs leading-none">▾</span>
                    </div>
                </div>
            </nav>
        </div>
    </Teleport>
</template>
