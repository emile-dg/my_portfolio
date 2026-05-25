<script setup lang="ts">
import SectionWrapper from '~/components/SectionWrapper.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import ExperienceCard from "~/components/ExperienceCard.vue";

const { t } = useI18n()

defineProps<{
    projects: Array<{
        name: string
        description: string
        link: string
        href: string
    }>
}>()
</script>

<template>
    <SectionWrapper :heading="t('projects.heading')" padding-y="py-12">
        <div class="mt-6 space-y-4">
            <ProjectCard
                class="smooth-up-section-item"
                v-for="project in projects"
                :key="project.name"
                :name="project.name"
                :description="project.description"
                :link="project.link"
                :href="project.href"
            />
        </div>
    </SectionWrapper>
</template>
