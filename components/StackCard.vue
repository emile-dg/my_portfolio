<script setup lang="ts">
defineProps<{
    name: string
    icon: string
}>()
</script>

<template>
    <article class="flex h-36 flex-col items-center justify-center bg-zinc-100 p-6 text-center">
        <img
            :src="icon"
            :alt="name"
            class="h-16 w-16 object-cover"
            loading="lazy"
        />
        <p class="mt-4 whitespace-pre-line text-sm">{{ name }}</p>
    </article>
</template>
