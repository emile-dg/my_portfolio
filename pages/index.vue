<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import HeroSection from '~/components/HeroSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import StackSection from '~/components/StackSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const { t } = useI18n()
const smoothUpSectionItem = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null


useHead({
    title: () => t('meta.title'),
    meta: [
        { name: 'description', content: () => t('meta.description') },
    ],
})


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
        link: 'xentry.io (closed)',
        href: '#',
    },
]
const stacks = [
    {
        category: 'Backend',
        items: [
            { name: 'Javascript\nTypescript', icon: '/images/js.png' },
            { name: 'Python', icon: '/images/python.png' },
            { name: 'NodeJs', icon: '/images/nodejs.png' },
        ],
    },
    {
        category: 'Frontend',
        items: [
            { name: 'VueJs', icon: '/images/vuejs.png' },
            { name: 'Nuxt', icon: '/images/nuxtjs.png' },
            { name: 'ReactJs', icon: '/images/react.png' },
        ],
    },
    {
        category: 'Database',
        items: [
            { name: 'MySQL', icon: '/images/mysql.png' },
            { name: 'MongoDB', icon: '/images/mongodb.png' },
        ],
    },
    {
        category: 'Others',
        items: [
            { name: 'Git', icon: '/images/git.png' },
            { name: 'AWS', icon: '/images/aws.png' },
            { name: 'Linux', icon: '/images/linux.png' },
            { name: 'Figma', icon: '/images/figma.png' },
        ],
    },
]

onMounted(async () => {
    gsap.registerPlugin(ScrollTrigger)
    await nextTick()
    if (!smoothUpSectionItem.value) return;
    ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.smooth-up-section-item')

        cards.forEach((card) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: window.innerHeight * 0.15,
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        end: 'top 55%',
                        scrub: true,
                        // markers: true,
                    },
                }
            )
        })
    }, smoothUpSectionItem.value)
})

onBeforeUnmount(() => {
    ctx?.revert()
})
</script>

<template>
    <AppHeader />

    <div class="min-h-screen text-black z-0">
        <main class="space-y-24" ref="smoothUpSectionItem">
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
