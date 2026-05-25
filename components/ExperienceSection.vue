<script setup lang="ts">
import SectionWrapper from '~/components/SectionWrapper.vue'
import ExperienceCard from '~/components/ExperienceCard.vue'

const { t } = useI18n()

defineProps<{
    experiences: Array<{
        role: string
        company: string
        location: string
        period: string
        summary: string
        detailsLink?: string
    }>
}>()
</script>

<template>
    <SectionWrapper id="experience" :heading="t('experience.heading')" padding-y="py-16">
        <div class="mt-8 grid grid-cols-12">
            <!-- Timeline bar (desktop only) -->
            <div class="col-span-1 hidden md:block">
                <div class="relative h-full w-px bg-black">
                    <div class="absolute -left-2 top-0 h-4 w-4 bg-black"/>
                    <div class="absolute -left-2 bottom-0 h-4 w-4 bg-black"/>
                </div>
            </div>

            <div class="col-span-12 space-y-4 md:col-span-11">
                <ExperienceCard
                    v-for="item in experiences"
                    :key="item.role + item.company"
                    :role="item.role"
                    :company="item.company"
                    :location="item.location"
                    :period="item.period"
                    :summary="item.summary"
                    :details-link="item.detailsLink"
                />
            </div>
        </div>
    </SectionWrapper>
</template>
