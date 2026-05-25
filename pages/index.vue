<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import StackSection from '~/components/StackSection.vue'
import ContactSection from '~/components/ContactSection.vue'

const { t, locale, setLocale } = useI18n()

useHead({
    title: () => t('meta.title'),
    meta: [
        { name: 'description', content: () => t('meta.description') },
    ],
})

const locales = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
]

function switchLocale(event: Event) {
    const code = (event.target as HTMLSelectElement).value as 'en' | 'fr'
    setLocale(code)
}

const experiences = [
    {
        role: 'Lead Software Engineer',
        company: 'CRYPTOACCOUNTING',
        location: 'Paris, France.',
        period: 'Since March 2023',
        summary:
            'Led development across frontend, backend, deployment, security, and accounting workflows for a production SaaS platform.',
    },
    {
        role: 'Lead Software Engineer, Cofounder & CTO',
        company: 'CEALIS TECH STUDIO',
        location: 'Yaounde, Cameroon.',
        period: 'From June 2024 - March 2026',
        summary:
            'Co-founded the company and led software architecture, product delivery, and client-facing technical decisions.',
    },
    {
        role: 'Lead Backend Developer',
        company: 'KAMIX',
        location: 'Yaounde, Cameroon.',
        period: 'From March 2022 - March 2023',
        summary:
            'Built backend services, APIs, and business logic for internal and client-facing applications.',
    },
    {
        role: 'Fullstack Software Engineer',
        company: 'Clinkast',
        location: 'Douala, Cameroon.',
        period: 'From October 2021 - February 2022',
        summary:
            'Worked on full-stack web application development across frontend interfaces and backend features.',
    },
]

const projects = [
    {
        name: 'Parametric Estimation Software',
        description:
            'Construction cost estimation tool for preliminary project evaluation.',
        link: 'seleri.app (dev)',
        href: 'https://seleri.app',
    },
    {
        name: 'ERP Engine',
        description:
            'Experimental multi-app ERP backend engine for authentication, authorization, accounting, and business modules.',
        link: 'xenty.io (closed)',
        href: '#',
    },
]

const stacks = [
    {
        category: 'Backend',
        items: [
            { name: 'Javascript\nTypescript', icon: '/images/js.svg' },
            { name: 'Python', icon: '/images/python.svg' },
            { name: 'NodeJs', icon: '/images/node.svg' },
        ],
    },
    {
        category: 'Frontend',
        items: [
            { name: 'VueJs', icon: '/images/vue.svg' },
            { name: 'Nuxt', icon: '/images/nuxt.svg' },
            { name: 'ReactJs', icon: '/images/react.svg' },
        ],
    },
    {
        category: 'Database',
        items: [
            { name: 'MySQL', icon: '/images/mysql.svg' },
            { name: 'MongoDB', icon: '/images/mongodb.svg' },
        ],
    },
    {
        category: 'Others',
        items: [
            { name: 'Git', icon: '/images/git.svg' },
            { name: 'AWS', icon: '/images/aws.svg' },
            { name: 'Linux', icon: '/images/linux.svg' },
            { name: 'Figma', icon: '/images/figma.svg' },
        ],
    },
]
</script>

<template>
    <header class="border-b sticky top-0 bg-off-white z-100">
        <div class="container mx-auto grid grid-cols-12 py-8 text-xl font-bold">
            <nuxt-link to="/" class="col-span-4">{{ $t('header.name') }}</nuxt-link>

            <nav class="col-span-4 flex justify-center gap-8">
                <nuxt-link active-class="font-bold" to="/">{{ $t('header.nav.home') }}</nuxt-link>
                <nuxt-link active-class="font-bold" to="#experience">{{ $t('header.nav.experience') }}</nuxt-link>
                <nuxt-link active-class="font-bold" to="#contact">{{ $t('header.nav.contact') }}</nuxt-link>
            </nav>

            <!-- Language picker -->
            <div class="col-span-4 flex justify-end items-center">
                <div class="relative inline-flex items-center border border-black">
                    <select
                        :value="locale"
                        @change="switchLocale"
                        class="appearance-none bg-transparent pl-3 pr-8 py-1 text-sm font-bold cursor-pointer focus:outline-none"
                        :aria-label="$t('header.language.label')"
                    >
                        <option
                            v-for="loc in locales"
                            :key="loc.code"
                            :value="loc.code"
                        >
                            {{ loc.label }}
                        </option>
                    </select>
                    <!-- Chevron icon -->
                    <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs">▾</span>
                </div>
            </div>
        </div>
    </header>

    <div class="min-h-screen text-black z-0">
        <main>
            <HeroSection/>
            <ExperienceSection :experiences="experiences"/>
            <ProjectsSection :projects="projects"/>
            <StackSection :stacks="stacks"/>
            <ContactSection/>
        </main>

        <footer class="container mx-auto py-10 text-center">
            {{ $t('footer.rights') }}
        </footer>
    </div>
</template>
