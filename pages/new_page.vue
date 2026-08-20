<script setup lang="ts">
import {gsap} from 'gsap'
import ProjectCard2 from "~/components/ProjectCard2.vue";


definePageMeta({
    layout: false,
})

const projects = [
    {
        date: 'Since July 2026',
        image: '',
        projectName: 'Fibisoft',
        content: [
            'Fibisoft is a talent acquisition platform designed to help growing organizations structure hiring, evaluate applicants consistently, and retain candidate knowledge beyond individual recruitment campaigns.', 'I designed and built the product from the ground up, covering product strategy, UX, domain modelling, application architecture, frontend, backend, APIs, authentication, infrastructure, and deployment. Particular attention went into designing flexible hiring workflows, candidate and application models, evaluation systems, and a customizable public recruitment experience.'
        ],
        tags: [
            {
                id: 'product_design',
                name: 'Product Design',
                isHighlighted: true
            }, {
                id: 'ui_ux_design',
                name: 'UI/UX Design',
                isHighlighted: true
            }, {
                id: 'software_architecture',
                name: 'Software Architecture',
                isHighlighted: true
            }, {
                id: 'full_stack',
                name: 'Full-stack',
                isHighlighted: true
            }, {
                id: 'devops',
                name: 'Devops',
                isHighlighted: true
            }, {
                id: 'vuejs',
                name: 'VueJS',
                isHighlighted: false
            }, {
                id: 'nuxtjs',
                name: 'NuxtJS',
                isHighlighted: false
            }, {
                id: 'docker',
                name: 'Docker',
                isHighlighted: false
            }, {
                id: 'cloudflare',
                name: 'Cloudflare',
                isHighlighted: false
            },
        ],
        orientation: 'vertical',
    }, {
        date: 'Since July 2026',
        image: '',
        projectName: 'CryptoAccounting',
        content: [
            'A production SaaS platform built to help accounting professionals process and manage complex cryptocurrency financial data. I led development across the frontend, backend, infrastructure, security, and accounting workflows, translating domain-heavy requirements into maintainable software architecture and reliable data-processing pipelines.', 'My work covered the full lifecycle of the product: system design, business logic, APIs, interfaces, deployment, performance, maintenance, and the evolution of a large production codebase.'
        ],
        tags: [
            {
                id: 'product-design',
                name: 'Product Design',
                isHighlighted: true
            }, {
                id: 'architecture',
                name: 'Architecture',
                isHighlighted: true
            }, {
                id: 'full-stack',
                name: 'Full-stack',
                isHighlighted: true
            }, {
                id: 'devops',
                name: 'DevOps',
                isHighlighted: true
            }, {
                id: 'vue-nuxt',
                name: 'VueJS / NuxtJS',
                isHighlighted: false
            }, {
                id: 'postgresql',
                name: 'PostgreSQL',
                isHighlighted: false
            }, {
                id: 'docker',
                name: 'Docker',
                isHighlighted: false
            }, {
                id: 'cloudflare',
                name: 'Cloudflare',
                isHighlighted: false
            }
        ],
        orientation: 'horizontal',
    }, {
        date: 'Since July 2026',
        image: '',
        projectName: 'Weespin',
        content: [
            'Weespin is a deep-linking platform for creating, managing, and measuring dynamic links across web, mobile, and offline channels. I worked across the product end-to-end, designing the application architecture, link-management workflows, routing logic, analytics experience, APIs, and user-facing dashboard.', 'The project required turning what looks like a simple URL-shortening problem into a reliable system for configurable redirects, attribution, tracking, and product-level analytics.'
        ],
        tags: [
            {
                id: 'product-design',
                name: 'Product Design',
                isHighlighted: true
            }, {
                id: 'architecture',
                name: 'Architecture',
                isHighlighted: true
            }, {
                id: 'full-stack',
                name: 'Full-stack',
                isHighlighted: true
            }, {
                id: 'devops',
                name: 'DevOps',
                isHighlighted: true
            }, {
                id: 'vue-nuxt',
                name: 'VueJS / NuxtJS',
                isHighlighted: false
            }, {
                id: 'postgresql',
                name: 'PostgreSQL',
                isHighlighted: false
            }, {
                id: 'docker',
                name: 'Docker',
                isHighlighted: false
            }, {
                id: 'cloudflare',
                name: 'Cloudflare',
                isHighlighted: false
            }
        ],
        orientation: 'horizontal-reverse',
    }, {
        date: 'Since July 2026',
        image: '',
        projectName: 'Xentryo',
        content: [
            'Xentryo is a modular ERP foundation for building vertical business applications around shared operational and financial infrastructure. I designed its architecture around reusable domain modules rather than a single monolithic application, ensuring authentication, authorization, organizations, accounting primitives, inventory, and common business workflows.', 'The project explores how complex ERP functionality can be decomposed into a maintainable core that supports multiple industry-specific products without duplicating foundational engineering.'
        ],
        tags: [
            {
                id: 'system-architecture',
                name: 'System Architecture',
                isHighlighted: true
            }, {
                id: 'backend',
                name: 'Backend',
                isHighlighted: true
            }, {
                id: 'domain-design',
                name: 'Domain Design',
                isHighlighted: true
            }, {
                id: 'erp',
                name: 'ERP',
                isHighlighted: true
            }, {
                id: 'python',
                name: 'Python',
                isHighlighted: false
            }, {
                id: 'postgresql',
                name: 'PostgreSQL',
                isHighlighted: false
            }, {
                id: 'docker',
                name: 'Docker',
                isHighlighted: false
            }
        ],
        orientation: 'horizontal',
    }, {
        date: 'Since July 2026',
        image: '',
        projectName: 'REAP',
        content: [
            'REAP is a basketball analytics platform that helps coaches and sports managers track player performance, analyze game data, and turn statistics into actionable insights. I was responsible for the backend architecture and implementation, including the data ingestion and normalization pipeline, database design and performance optimization, secure API development, authentication and application security, and mobile payment integration for the Apple and Google ecosystems.', 'The work focused heavily on building a reliable data layer capable of transforming heterogeneous sports data into consistent, queryable information for the mobile product.'
        ],
        tags: [
            {
                id: 'backend-architecture',
                name: 'Backend Architecture',
                isHighlighted: true
            }, {
                id: 'data-pipeline',
                name: 'Data Pipeline',
                isHighlighted: true
            }, {
                id: 'database-optimization',
                name: 'Database Optimization',
                isHighlighted: true
            }, {
                id: 'typescript',
                name: 'TypeScript',
                isHighlighted: false
            }, {
                id: 'nodejs',
                name: 'NodeJS',
                isHighlighted: false
            }, {
                id: 'linux',
                name: 'Linux',
                isHighlighted: false
            }, {
                id: 'mongodb',
                name: 'MongoDB',
                isHighlighted: false
            }
        ],
        orientation: 'horizontal',
    },
]

const mousePos = ref({
    x: 0,
    y: 0
})

const handleMouseMove = (e: MouseEvent) => {
    mousePos.value = {
        x: e.clientX,
        y: e.clientY
    }
}

onMounted(() => {
    setTimeout(() => {
        gsap.fromTo('.shape', {
            scale: 0,
        }, {
            scale: 1,
            duration: 1,
            ease: 'elastic.out',
        })
    }, 500)

    window.addEventListener('mousemove', handleMouseMove)

    watch(mousePos, (newPos) => {
        const shapes = document.querySelectorAll('.shape')
        shapes.forEach((shape, index) => {
            const element = shape as HTMLElement
            const rect = element.getBoundingClientRect()
            gsap.to(element, {
                x: newPos.x - window.innerWidth / 2,
                y: newPos.y - window.innerHeight / 2,
                duration: 1.5,
                ease: 'power2.out',
                delay: index * 0.1,
            })
        })
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
    <div class="w-screen min-h-screen bg-dark-bg">
        <div class="relative w-screen h-screen overflow-hidden">
            <div class="overflow-hidden w-screen h-screen absolute">
                <div class="relative">
                    <div class="scale-0 absolute left-1/2 top-1/2 -translate-1/2 w-280 xl:w-480 h-280 xl:h-480  bg-primary/30 rounded-full shape"></div>
                    <div class="scale-0 absolute left-1/2 top-1/2 -translate-1/2 w-120 xl:w-320 h-120 xl:h-320  bg-primary rounded-full shape"></div>
                    <div class="scale-0 absolute left-1/2 top-1/2 -translate-1/2 w-50 xl:w-200 h-50 xl:h-200  bg-[#206FC8] rounded-full shape"></div>
                </div>
            </div>
            <div class="flex fluted overflow-hidden gap-0">
                <svg class="fluted-svg" v-for="i in 25" :key="i" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="-180" y="-181" width="429.12" height="1322.62">
                        <div xmlns="http://www.w3.org/1999/xhtml"
                             style="backdrop-filter:blur(120px);clip-path:url(#bgblur_0_43_227_clip_path);height:100%;width:100%"></div>
                    </foreignObject>
                    <g data-figma-bg-blur-radius="180">
                        <mask id="path-1-inside-1_43_227" fill="white">
                            <path d="M0 -1H69.12V961.618H0V-1Z"/>
                        </mask>
                        <path d="M0 -1H69.12V961.618H0V-1Z" fill="url(#paint0_linear_43_227)" fill-opacity="0.2" style="mix-blend-mode:overlay"/>
                        <path d="M0 -1H69.12V961.618H0V-1Z" fill="url(#paint1_linear_43_227)" fill-opacity="0.2" style="mix-blend-mode:color-dodge"/>
                        <path
                            d="M69.12 961.618V962.618H70.12V961.618H69.12ZM0 961.618H-1V962.618H0V961.618ZM69.12 -1H68.12V961.618H69.12H70.12V-1H69.12ZM69.12 961.618V960.618H0V961.618V962.618H69.12V961.618ZM0 961.618H1V-1H0H-1V961.618H0Z"
                            fill="#0A0807" fill-opacity="0.1" mask="url(#path-1-inside-1_43_227)"/>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_43_227" x1="69.12" y1="480.309" x2="0" y2="480.309" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="0.3" stop-color="#0A0807"/>
                            <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_43_227" x1="48.5176" y1="1084.71" x2="0.237093" y2="1082.99" gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="1" stop-color="#0431E4"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="grad"/>
        </div>

        <main class="absolute top-0 left-0 text-dark-fg">
            <div class="relative">
                <header class="py-4 sm:py-6 md:py-12">
                    <div class="container w-full px-4 sm:px-6 xl:px-0 lg:mx-auto">
                        <div class="w-full flex flex-col md:grid md:grid-cols-12 items-center gap-3 sm:gap-4 md:gap-6">
                            <div class="md:col-span-6 inline-flex ">
                                <div
                                    class="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-display font-bold text-center select-none tracking-tighter capitalize">
                                    <span>Emile</span>
                                    <span>Djida</span>
                                </div>
                            </div>
                            <div class="md:col-span-6 w-full md:w-auto">
                                <nav
                                    class="flex items-end justify-center md:justify-end gap-4 sm:gap-6 md:gap-12 text-sm sm:text-base md:text-xl">
                                    <a href="#">Home</a>
                                    <a href="#">Contact</a>
                                </nav>
                            </div>
<!--                            <div class="md:col-span-4 inline-flex items-center justify-center md:justify-end order-3 w-full md:w-auto">-->
<!--                                <div class="text-xs sm:text-sm md:text-base">-->
<!--                                    <a href="#">Version Française</a>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>
                    </div>
                </header>

                <section class="w-screen">
                    <div class="container w-full px-4 sm:px-6 xl:px-0 lg:mx-auto max-w-6xl">
                        <div class="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 space-y-6 sm:space-y-8">
                            <h1 class="inline-flex flex-col text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[164px] font-display leading-none">
                                <span>Senior Full-Stack</span>
                                <span>& Product Engineer</span>
                            </h1>
                            <div class="flex flex-col xl:flex-row lg:items-between gap-6 lg:gap-8">
                                <div class="w-full space-y-3 sm:space-y-4 max-w-3xl">
                                    <p class="text-sm sm:text-base md:text-lg text-pretty">
                                        I design and build production-grade software from end-to-end — from product UX and system architecture to
                                        frontend,
                                        backend, APIs, databases, deployment, and long-term evolution.
                                    </p>
                                    <p class="text-sm sm:text-base md:text-lg text-pretty">
                                        I work at the intersection of engineering and product design, turning complex requirements into reliable
                                        systems
                                        and
                                        polished user experiences.
                                    </p>
                                </div>
                                <div class="w-full space-y-3 sm:space-y-4">
                                    <div class="flex flex-wrap gap-2 sm:gap-3 md:gap-4 xl:justify-end">
                                        <div class="px-3 py-1.5 sm:px-4 sm:py-2 bg-dark-soft text-xs sm:text-sm md:text-base">
                                            4+ years of experience
                                        </div>
                                        <div class="px-3 py-1.5 sm:px-4 sm:py-2 bg-dark-soft text-xs sm:text-sm md:text-base">
                                            End-to-End Delivery
                                        </div>
                                        <div class="px-3 py-1.5 sm:px-4 sm:py-2 bg-dark-soft text-xs sm:text-sm md:text-base">
                                            Open to senior roles
                                        </div>
                                        <div class="px-3 py-1.5 sm:px-4 sm:py-2 bg-dark-soft text-xs sm:text-sm md:text-base">
                                            AI automation
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap gap-2 sm:gap-3 md:gap-4 xl:justify-end">
                                        <button
                                            class="w-full sm:w-auto sm:min-w-[200px] md:w-74 h-14 sm:h-16 md:h-20 text-sm sm:text-base md:text-lg text-primary-fg bg-primary font-bold transition-all hover:bg-primary-fg hover:scale-105 hover:text-primary cursor-pointer active:scale-95 duration-50">
                                            Download Resume
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class=" py-24">
                    <div class="container mx-auto  px-12">
                        <h1 class="text-4xl lg:text-6xl 2xl:text-9xl font-display text-center">
                            From Ideas to Production
                        </h1>

                        <div class="grid grid-cols-1 gap-18">
                            <div v-for="(project, index) in projects" :key="index">
                                <ProjectCard2 v-bind="project"/>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="relative h-screen overflow-x-hidden">
                    <div class="-z-1 absolute bottom-0 lg:-bottom-1/6 left-1/2 -translate-x-1/2">
                        <svg width="1728" height="1523" viewBox="0 0 1728 1523" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_55_37)">
                                <path
                                    d="M1302.5 1049.54C1302.5 1518.73 1105.05 1899.08 861.486 1899.08C617.92 1899.08 420.472 1518.73 420.472 1049.54C420.472 580.353 757.67 1118.52 861.486 200C1042.95 1125.26 1302.5 580.353 1302.5 1049.54Z"
                                    fill="url(#paint0_radial_55_37)" fill-opacity="0.2"/>
                            </g>
                            <g filter="url(#filter1_f_55_37)">
                                <path
                                    d="M1728 1484.04C1728 1760.52 1342.3 1984.65 866.513 1984.65C390.727 1984.65 5.02637 1760.52 5.02637 1484.04C5.02637 1207.56 645.704 1533.16 866.513 983.434C1240.7 1517.4 1728 1207.56 1728 1484.04Z"
                                    fill="#0033FF"/>
                            </g>
                            <g filter="url(#filter2_f_55_37)">
                                <path
                                    d="M1190 1349.17C1190 1700.14 1045.17 1984.65 866.513 1984.65C687.856 1984.65 543.026 1700.14 543.026 1349.17C543.026 998.209 827.621 912.932 866.513 713.695C981.841 1016.35 1190 998.209 1190 1349.17Z"
                                    fill="#0033FF"/>
                            </g>
                            <g filter="url(#filter3_f_55_37)">
                                <ellipse cx="861.487" cy="1433.32" rx="642.514" ry="397.239" fill="#206FC8"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_55_37" x="220.472" y="0" width="1282.03" height="2099.08" filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_55_37"/>
                                </filter>
                                <filter id="filter1_f_55_37" x="-194.974" y="783.434" width="2122.97" height="1401.22" filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_55_37"/>
                                </filter>
                                <filter id="filter2_f_55_37" x="343.026" y="513.695" width="1046.97" height="1670.96" filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_55_37"/>
                                </filter>
                                <filter id="filter3_f_55_37" x="18.9727" y="836.082" width="1685.03" height="1194.48" filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_55_37"/>
                                </filter>
                                <radialGradient id="paint0_radial_55_37" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                                gradientTransform="translate(861.486 892.6) rotate(-90) scale(517.981 441.014)">
                                    <stop stop-color="#0033FF"/>
                                    <stop offset="1" stop-color="#080B0E"/>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>

                    <div class="absolute left-1/2 -translate-x-1/2 bottom-10 w-full max-w-6xl px-4">
                        <h1 class="text-4xl lg:text-6xl 2xl:text-9xl font-display text-center uppercase">
                            Get in touch
                        </h1>

                        <div class="w-full bg-dark-soft p-12 md:p-18 lg:p-24 lg:mb-24 project-metadata">
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
                                <div class="space-y-4">
                                    <h3 class="font-display text-2xl">Send me an email</h3>
                                    <a href="mailto:emiledjida404@gmail.com"
                                       class="text-dark-fg underline underline-offset-4 hover:text-primary transition-colors"
                                    >
                                        emiledjida404@gmail.com
                                    </a>
                                </div>
                                <div class="space-y-4">
                                    <h3 class="font-display text-2xl">Whatsapp</h3>
                                    <a href="https://wa.me/237694764773"
                                       class="text-dark-fg underline underline-offset-4 hover:text-primary transition-colors"
                                    >
                                        (+237) 694 764 773
                                    </a>
                                </div>
                                <div class="space-y-4">
                                    <h3 class="font-display text-2xl">Social media</h3>
                                    <div class="flex gap-4">
                                        <a
                                            href="https://www.linkedin.com/in/emile-djida-gongdebiya58b361197"
                                            class="text-dark-fg underline underline-offset-4 hover:text-primary transition-colors"
                                        >
                                            LinkedIn
                                        </a>
                                        <a
                                            href="https://github.com/emile-dg"
                                            class="text-dark-fg underline underline-offset-4 hover:text-primary transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center font-display text-lg lg:text-2xl py-8">
                            Emile DJIDA GONGDEBIYA © All rights reserved, 2026
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    </div>
</template>

<style scoped>
.fluted {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.fluted > svg {
    will-change: backdrop-filter;
    width: calc(100% / 25);
    height: 100%;
    opacity: 100%;
    mix-blend-mode: overlay;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

.grad {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 20vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #080B0E 78.57%);
    mix-blend-mode: normal;

}

.shape {
    filter: blur(220px);
}
</style>