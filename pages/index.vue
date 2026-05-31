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


const experiences = computed(() => [
    {
        role: t('experience.items[0].role'),
        company: t('experience.items[0].company'),
        location: t('experience.items[0].location'),
        period: t('experience.items[0].period'),
        summary: t('experience.items[0].summary'),
        detailsLink: '/experience/cryptoaccounting',
    },
    {
        role: t('experience.items[1].role'),
        company: t('experience.items[1].company'),
        location: t('experience.items[1].location'),
        period: t('experience.items[1].period'),
        summary: t('experience.items[1].summary'),
        detailsLink: '/experience/cealis-tech-studio',
    },
    {
        role: t('experience.items[2].role'),
        company: t('experience.items[2].company'),
        location: t('experience.items[2].location'),
        period: t('experience.items[2].period'),
        summary: t('experience.items[2].summary'),
        // detailsLink: '/experience/kamix',
    },
    {
        role: t('experience.items[3].role'),
        company: t('experience.items[3].company'),
        location: t('experience.items[3].location'),
        period: t('experience.items[3].period'),
        summary: t('experience.items[3].summary'),
        // detailsLink: '/experience/clinkast',
    },
])
const projects = computed(() => [
    {
        name: t('projects.items[0].name'),
        description: t('projects.items[0].description'),
        link: 'seleri.app (dev)',
        href: 'https://seleri.app',
    },
    {
        name: t('projects.items[1].name'),
        description: t('projects.items[1].description'),
        link: 'xentry.io (closed)',
        href: '#',
    },
])
const stacks = computed(() => [
    {
        category: t('stack.categories.backend'),
        items: [
            { name: 'Javascript\nTypescript', icon: '/images/js.png' },
            { name: 'Python', icon: '/images/python.png' },
            { name: 'NodeJs', icon: '/images/nodejs.png' },
        ],
    },
    {
        category: t('stack.categories.frontend'),
        items: [
            { name: 'VueJs', icon: '/images/vuejs.png' },
            { name: 'Nuxt', icon: '/images/nuxtjs.png' },
            { name: 'ReactJs', icon: '/images/react.png' },
        ],
    },
    {
        category: t('stack.categories.database'),
        items: [
            { name: 'MySQL', icon: '/images/mysql.png' },
            { name: 'MongoDB', icon: '/images/mongodb.png' },
        ],
    },
    {
        category: t('stack.categories.others'),
        items: [
            { name: 'Git', icon: '/images/git.png' },
            { name: 'AWS', icon: '/images/aws.png' },
            { name: 'Linux', icon: '/images/linux.png' },
            { name: 'Figma', icon: '/images/figma.png' },
        ],
    },
])

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
