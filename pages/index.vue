<script setup lang="ts">
import {ArrowRight} from "lucide-vue-next";

useHead({
    title: 'Emile DJIDA G. — Full-Stack Software Engineer',
    meta: [
        {
            name: 'description',
            content:
                'Full-stack software engineer building production-grade SaaS platforms, dashboards, APIs, and business systems across frontend, backend, deployment, security, and maintenance.',
        },
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
        link: 'xenty.io (closed)',
        href: '#',
    },
]

const stacks = [
    {
        category: 'Backend',
        items: [
            {name: 'Javascript\nTypescript', icon: '/images/js.svg'},
            {name: 'Python', icon: '/images/python.svg'},
            {name: 'NodeJs', icon: '/images/node.svg'},
        ],
    },
    {
        category: 'Frontend',
        items: [
            {name: 'VueJs', icon: '/images/vue.svg'},
            {name: 'Nuxt', icon: '/images/nuxt.svg'},
            {name: 'ReactJs', icon: '/images/react.svg'},
        ],
    },
    {
        category: 'Database',
        items: [
            {name: 'MySQL', icon: '/images/mysql.svg'},
            {name: 'MongoDB', icon: '/images/mongodb.svg'},
        ],
    },
    {
        category: 'Others',
        items: [
            {name: 'Git', icon: '/images/git.svg'},
            {name: 'AWS', icon: '/images/aws.svg'},
            {name: 'Linux', icon: '/images/linux.svg'},
            {name: 'Figma', icon: '/images/figma.svg'},
        ],
    },
]
</script>

<template>
    <header class="border-b sticky top-0 bg-off-white z-100">
        <div class="container mx-auto grid grid-cols-12 py-8 text-xl font-bold ">
            <nuxt-link to="/" class="col-span-4">EMILE DJIDA G.</nuxt-link>
            <nav class="col-span-4 flex justify-center gap-8">
                <nuxt-link class="" active-class="font-bold" to="/">Home</nuxt-link>
                <nuxt-link class="" active-class="font-bold" to="#experience">Experience</nuxt-link>
                <nuxt-link class="" active-class="font-bold" to="#contact">Contact me</nuxt-link>
            </nav>
            <div class="col-span-4 text-right">English⌄</div>
        </div>
    </header>

    <div class="min-h-screen text-black z-0">
        <main>
            <!-- Hero -->
            <section class="container mx-auto grid grid-cols-12 pt-16 pb-28">
                <div class="col-span-12">
                    <div class="font-alfa space-y-4 font-bold uppercase leading-[0.85] text-[150px]">
                        <div class="block">Full-Stack</div>
                        <div class="flex items-center justify-between gap-8">
                            <div class="flex items-center w-full">
                                <div class="w-[24px] aspect-square bg-black"/>
                                <div class="h-2 w-11/12 bg-black"/>
                            </div>
                            <div class="text-transparent" style="-webkit-text-stroke: 2px black">
                                Software
                            </div>
                        </div>
                        <div class="block">Engineer</div>
                    </div>
                </div>

                <div class="col-span-12 mt-14 grid grid-cols-12 gap-8">
                    <div class="col-span-7">
                        <p class="text-xl">
                            I build production-grade SaaS platforms, dashboards, APIs, and
                            business systems across frontend, backend, deployment, security,
                            and maintenance.
                        </p>

                        <p class="mt-6 max-w-xl text-xl ">
                            Open to full-time Full-Stack, Backend, and Product Engineering
                            roles.
                        </p>
                    </div>

                    <div class="col-span-5 flex flex-col gap-6">
                        <div class="flex flex-wrap gap-4">
                            <div class="bg-zinc-100 px-2 py-0.5 text-sm outline">
                                5+ years of experience
                            </div>
                            <div class="bg-zinc-100 px-2 py-0.5 text-sm outline">
                                End-to-end delivery
                            </div>
                            <div class="bg-zinc-100 px-2 py-0.5 text-sm outline">
                                Open to full-time roles
                            </div>
                        </div>

                        <div class="flex gap-2">
                            <nuxt-link
                                to="/resume.pdf"
                                class="border border-black bg-black px-8 py-4 text-sm font-bold text-white"
                            >
                                Download Resume
                            </nuxt-link>

                            <nuxt-link
                                to="#experience"
                                class="border border-black px-8 py-4 text-sm font-bold"
                            >
                                View Case Studies
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Experience -->
            <section id="experience" class="container mx-auto grid grid-cols-12 py-16">
                <h2 class="col-span-12 text-3xl font-bold">Relevant Experience</h2>

                <div class="col-span-12 mt-8 grid grid-cols-12">
                    <div class="col-span-1 hidden md:block">
                        <div class="relative h-full w-px bg-black">
                            <div class="absolute -left-2 top-0 h-4 w-4 bg-black"/>
                            <!--<div class="absolute -left-2 top-1/3 h-4 w-4 bg-black"/>-->
                            <!--<div class="absolute -left-2 top-2/3 h-4 w-4 bg-black"/>-->
                            <div class="absolute -left-2 bottom-0 h-4 w-4 bg-black"/>
                        </div>
                    </div>

                    <div class="col-span-12 space-y-4 md:col-span-11">
                        <article
                            v-for="item in experiences"
                            :key="item.role + item.company"
                            class="grid grid-cols-12 bg-zinc-100 p-8 outline-1"
                        >
                            <div class="col-span-12 md:col-span-7 space-y-4">
                                <h3 class="text-xl font-bold">{{ item.role }}</h3>
                                <p class="max-w-xl">{{ item.summary }}</p>
                                <p class="font-bold">- {{ item.period }}</p>
                                <nuxt-link to="#" class="inline-flex gap-2 border text-black text-sm py-1 px-2 hover:bg-black hover:text-white">
                                    View role details
                                    <ArrowRight :size="12"/>
                                </nuxt-link>
                            </div>

                            <div class="col-span-12 mt-8 text-left text-xl uppercase md:col-span-5 md:mt-0 md:text-right">
                                <p>{{ item.company }}</p>
                                <p class="mt-4 text-xs">{{ item.location }}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <!-- Projects -->
            <section class="container mx-auto grid grid-cols-12 py-12">
                <h2 class="col-span-12 text-2xl font-bold">Independent Product Work</h2>
                <div class="col-span-12 mt-6 space-y-4">
                    <article
                        v-for="project in projects"
                        :key="project.name"
                        class="grid grid-cols-12 items-center bg-zinc-100 p-8 outline"
                    >
                        <div class="col-span-12 md:col-span-7">
                            <h3 class="text-xl font-bold">{{ project.name }}</h3>
                            <p class="mt-3 max-w-md ">
                                {{ project.description }}
                            </p>
                        </div>

                        <div class="col-span-12 mt-6 md:col-span-5 md:mt-0 md:text-right">
                            <a :href="project.href" class="text-lg underline" target="_blank">
                                {{ project.link }}
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            <!-- Stack -->
            <section class="container mx-auto grid grid-cols-12 gap-y-10 py-20">
                <div
                    v-for="group in stacks"
                    :key="group.category"
                    class="col-span-12 grid grid-cols-12 items-start gap-6"
                >
                    <h2 class="col-span-12 text-2xl font-bold md:col-span-3">
                        {{ group.category }}
                    </h2>

                    <div class="col-span-12 grid grid-cols-2 gap-4 md:col-span-9 md:grid-cols-3">
                        <article
                            v-for="item in group.items"
                            :key="item.name"
                            class="flex h-36 flex-col items-center justify-center bg-zinc-100 p-6 text-center"
                        >
                            <img
                                :src="item.icon"
                                :alt="item.name"
                                class="h-16 w-16 object-cover"
                                loading="lazy"
                            />
                            <p class="mt-4 whitespace-pre-line text-sm">{{ item.name }}</p>
                        </article>
                    </div>
                </div>
            </section>

            <!-- Contact -->
            <section id="contact" class="container mx-auto grid grid-cols-12 py-24">
                <h2
                    class="col-span-12 text-[clamp(4rem,9vw,9rem)] font-bold leading-none"
                >
                    Contact Me
                </h2>

                <address
                    class="col-span-12 mt-10 grid grid-cols-12 gap-8 bg-zinc-100 p-10 not-italic"
                >
                    <div class="col-span-12 md:col-span-3">
                        <h3 class="font-bold">Send me an Email</h3>
                        <a href="mailto:emiledjida404@gmail.com" class="mt-3 block underline">
                            emiledjida404@gmail.com
                        </a>
                        <a href="mailto:emile.djida@icloud.com" class="mt-2 block underline">
                            emile.djida@icloud.com
                        </a>
                    </div>

                    <div class="col-span-12 md:col-span-3">
                        <h3 class="font-bold">Call me</h3>
                        <a href="tel:+237694764773" class="mt-3 block">
                            +237 694-764-773
                        </a>
                    </div>

                    <div class="col-span-12 md:col-span-3">
                        <h3 class="font-bold">Whatsapp</h3>
                        <a
                            href="https://wa.me/237694764773"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-3 block underline"
                        >
                            Send a text message
                        </a>
                    </div>

                    <div class="col-span-12 flex gap-5 md:col-span-3 md:justify-end">
                        <nuxt-link to="https://github.com/emiledjida404" aria-label="GitHub">
                            GitHub
                        </nuxt-link>
                        <nuxt-link to="#" aria-label="LinkedIn">LinkedIn</nuxt-link>
                    </div>
                </address>
            </section>
        </main>

        <footer class="container mx-auto py-10 text-center">
            Emile DJIDA GONGDEBIYA © All rights reserved, 2026
        </footer>

    </div>
</template>