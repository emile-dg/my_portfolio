<script setup lang="ts">
defineProps<{
    name: string
    description: string
    link: string
    href: string
}>()
</script>

<template>
    <article class="grid grid-cols-12 items-center bg-zinc-100 p-8 outline">
        <div class="col-span-12 md:col-span-7">
            <h3 class="text-xl font-bold">{{ name }}</h3>
            <p class="mt-3 max-w-md">{{ description }}</p>
        </div>

        <div class="col-span-12 mt-6 md:col-span-5 md:mt-0 md:text-right">
            <a :href="href" class="text-lg underline" target="_blank">
                {{ link }}
            </a>
        </div>
    </article>
</template>
