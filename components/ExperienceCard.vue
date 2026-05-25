<script setup lang="ts">
import {ArrowRight} from 'lucide-vue-next'

const { t } = useI18n()

defineProps<{
    role: string
    company: string
    location: string
    period: string
    summary: string
    detailsLink?: string
}>()
</script>

<template>
    <article class="grid grid-cols-12 bg-zinc-100 p-8 outline-1">
        <div class="col-span-12 space-y-4 md:col-span-7">
            <h3 class="text-xl font-bold">{{ role }}</h3>
            <p class="max-w-xl">{{ summary }}</p>
            <p class="font-bold">- {{ period }}</p>
            <nuxt-link
                :to="detailsLink ?? '#'"
                class="inline-flex gap-2 border text-black text-sm py-1 px-2 hover:bg-black hover:text-white"
            >
                {{ t('experience.viewRoleDetails') }}
                <ArrowRight :size="12"/>
            </nuxt-link>
        </div>

        <div class="col-span-12 mt-8 text-left text-xl uppercase md:col-span-5 md:mt-0 md:text-right">
            <p>{{ company }}</p>
            <p class="mt-4 text-xs">{{ location }}</p>
        </div>
    </article>
</template>
