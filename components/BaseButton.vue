<script setup lang="ts">
defineProps<{
    href?: string
    to?: string
    variant?: 'primary' | 'secondary'
    target?: string
}>()
</script>

<template>
    <!-- External link -->
    <a
        v-if="href"
        :href="href"
        :target="target"
        :class="[
            'inline-flex items-center justify-center border px-8 py-4 text-sm font-bold transition-colors',
            variant === 'primary'
                ? 'border-black bg-black text-white hover:bg-white hover:text-black'
                : 'border-black bg-transparent text-black hover:bg-black hover:text-white',
        ]"
    >
        <slot/>
    </a>

    <!-- Nuxt router link -->
    <nuxt-link
        v-else-if="to"
        :to="to"
        :class="[
            'inline-flex items-center justify-center border px-8 py-4 text-sm font-bold transition-colors',
            variant === 'primary'
                ? 'border-black bg-black text-white hover:bg-white hover:text-black'
                : 'border-black bg-transparent text-black hover:bg-black hover:text-white',
        ]"
    >
        <slot/>
    </nuxt-link>

    <!-- Plain button -->
    <button
        v-else
        :class="[
            'inline-flex items-center justify-center border px-8 py-4 text-sm font-bold transition-colors',
            variant === 'primary'
                ? 'border-black bg-black text-white hover:bg-white hover:text-black'
                : 'border-black bg-transparent text-black hover:bg-black hover:text-white',
        ]"
    >
        <slot/>
    </button>
</template>
