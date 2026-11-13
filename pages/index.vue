<script setup lang="ts">
import {ArrowDown, ArrowRight, ArrowUpRight} from 'lucide-vue-next'

definePageMeta({layout: 'portfolio'})

const {t, locale} = useI18n()
const {projects} = usePortfolioProjects()
const {experiences} = usePortfolioHome()

useHead(() => ({
    htmlAttrs: {lang: locale.value === 'fr' ? 'fr-FR' : 'en-US'},
    title: t('portfolio.meta.title'),
    meta: [{name: 'description', content: t('portfolio.meta.description')}],
}))

useLocaleHead({seo: true})

const projectId = (id: string) => `project-${id}`
</script>

<template>
    <div class="portfolio-page">
        <header class="portfolio-header">
            <div class="portfolio-container header-inner">
                <NuxtLinkLocale to="/" class="wordmark">
                    <div class="aspect-square w-12">
                        <img src="/icon.svg" alt="Emile D.G Icon" class="w-full h-full object-contain"/>
                    </div>
                </NuxtLinkLocale>
                <nav aria-label="Main navigation">
                    <a href="#projects">{{ t('portfolio.nav.work') }}</a>
                    <a href="#experience">{{ t('portfolio.nav.experience') }}</a>
                    <a href="#contact">{{ t('portfolio.nav.contact') }}</a>
                </nav>
                <NuxtLinkLocale v-if="locale === 'en'" to="/" locale="fr" class="locale-switch" aria-label="Français">
                    Version Française
                </NuxtLinkLocale>
                <NuxtLinkLocale v-else to="/" locale="en" class="locale-switch" aria-label="English">
                    English version
                </NuxtLinkLocale>
            </div>
        </header>

        <main class="space-y-24">
            <section class="hero portfolio-container" aria-labelledby="hero-title">
                <div class="hero-light" aria-hidden="true"/>
                <div class="hero-copy">
                    <p class="eyebrow">{{ t('portfolio.hero.role') }}</p>
                    <h1 id="hero-title">{{ t('portfolio.hero.headline') }}</h1>
                    <p class="hero-intro">{{ t('portfolio.hero.intro') }}</p>
                    <div class="hero-actions">
                        <a class="button button-primary" href="#projects">{{ t('portfolio.hero.workAction') }}
                            <ArrowDown :size="16"/>
                        </a>
                        <a class="button button-secondary" href="/my_resume.pdf"
                           download="Resume.Emile.D.G.pdf">{{ t('portfolio.hero.resumeAction') }}
                            <ArrowUpRight :size="16"/>
                        </a>
                    </div>
                </div>
                <p class="hero-index" aria-hidden="true">{{ t('portfolio.hero.caption') }}</p>
            </section>

            <section id="projects" class="work-section portfolio-container" aria-labelledby="work-title">
                <div class="section-heading">
                    <p class="eyebrow">01 / {{ t('portfolio.work.kicker') }}</p>
                    <h2 id="work-title">{{ t('portfolio.work.heading') }}</h2>
                </div>
                <nav class="project-index" :aria-label="t('portfolio.work.indexLabel')">
                    <a v-for="(project, index) in projects" :key="project.id" :href="`#${projectId(project.id)}`">
                        <span>{{ String(index + 1).padStart(2, '0') }}</span>{{ project.name }}
                        <ArrowDown :size="14"/>
                    </a>
                </nav>

                <article :id="projectId(projects[0]!.id)" class="featured-project crypto-project">
                    <div class="crypto-image-frame">
                        <NuxtImg :src="projects[0]!.image!.src" :alt="projects[0]!.imageAlt!"
                                 :width="projects[0]!.image!.width" :height="projects[1]!.image!.height"
                                 format="webp" loading="lazy" decoding="async"
                                 class="crypto-image"/>
                    </div>
                    <div class="project-story crypto-story">
                        <div>
                            <p class="eyebrow">{{ projects[0]!.category }}</p>
                            <h3>{{ projects[0]!.name }}</h3>
                        </div>
                        <div>
                            <p>{{ projects[0]!.summary }}</p>
                        </div>
                    </div>
                </article>

                <article :id="projectId(projects[1]!.id)" class="featured-project crypto-project">
                    <div class="crypto-image-frame">
                        <NuxtImg :src="projects[1]!.image!.src" :alt="projects[1]!.imageAlt!"
                                 :width="projects[1]!.image!.width" :height="projects[1]!.image!.height"
                                 format="webp" loading="lazy" decoding="async"
                                 class="crypto-image"/>
                    </div>
                    <div class="project-story crypto-story">
                        <div><p class="eyebrow">{{ projects[1]!.category }}</p>
                            <h3>{{ projects[1]!.name }}</h3></div>
                        <div><p>{{ projects[1]!.summary }}</p>
                            <NuxtLinkLocale :to="projects[1]!.caseStudyUrl!" :prefetch="false" class="text-link">
                                {{ t('portfolio.work.readCaseStudy') }}
                                <ArrowRight :size="16"/>
                            </NuxtLinkLocale>
                        </div>
                    </div>
                </article>

                <article v-for="project in projects.slice(2)" :id="projectId(project.id)" :key="project.id"
                         class="compact-project">
                    <p class="eyebrow compact-category">{{ project.category }}</p>
                    <h3>{{ project.name }}</h3>
                    <div class="compact-description"><p>{{ project.summary }}</p>
                        <NuxtLinkLocale v-if="project.caseStudyUrl" :to="project.caseStudyUrl" :prefetch="false"
                                        class="text-link">{{ t('portfolio.work.readCaseStudy') }}
                            <ArrowRight :size="16"/>
                        </NuxtLinkLocale>
                    </div>
                </article>
            </section>

            <section id="experience" class="experience-section">
                <div class="portfolio-container">
                    <div class="section-heading experience-heading"><p class="eyebrow">02 /
                        {{ t('portfolio.experience.kicker') }}</p>
                        <h2>{{ t('portfolio.experience.heading') }}</h2></div>
                    <ul class="experience-list">
                        <li v-for="item in experiences" :key="item.slug">
                            <NuxtLinkLocale :to="item.url" :prefetch="false"><span
                                class="experience-company">{{ item.company }}</span><span
                                class="experience-role">{{ item.role }}</span><span
                                class="experience-period">{{ item.period }}</span>
                                <ArrowUpRight :size="17"/>
                            </NuxtLinkLocale>
                        </li>
                    </ul>
                </div>
            </section>
        </main>

        <footer id="contact" class="contact-section">
            <div class="portfolio-container">
                <p class="eyebrow">03 / {{ t('portfolio.contact.kicker') }}</p>
                <h2>{{ t('portfolio.contact.heading') }}</h2>
                <a class="contact-email" href="mailto:emiledjida404@gmail.com">emiledjida404@gmail.com
                    <ArrowUpRight :size="22"/>
                </a>
                <div class="contact-bottom">
                    <nav :aria-label="t('portfolio.contact.socialLabel')"><a
                        href="https://www.linkedin.com/in/emile-djida-gongdebiya58b361197" target="_blank"
                        rel="noopener noreferrer">LinkedIn
                        <ArrowUpRight :size="14"/>
                    </a><a href="https://github.com/emile-dg" target="_blank" rel="noopener noreferrer">GitHub
                        <ArrowUpRight :size="14"/>
                    </a><a href="https://wa.me/237694764773" target="_blank" rel="noopener noreferrer">WhatsApp
                        <ArrowUpRight :size="14"/>
                    </a></nav>
                    <p>{{ t('footer.rights') }}</p></div>
            </div>
        </footer>
    </div>
</template>

<style>
.portfolio-page {
    --ink: #080b0e;
    --paper: #f0eee8;
    --muted: #aeb9c8;
    --blue: #0431e4;
    --focus: #86a4ff;
    background: var(--ink);
    color: var(--paper);
    min-height: 100vh;
    overflow: clip;
    font-family: var(--font-sans), sans-serif;
    font-size: 16px;
    line-height: 1.55
}

.portfolio-page * {
    box-sizing: border-box
}

.portfolio-container {
    width: min(100% - 40px, 1280px);
    margin-inline: auto
}

.portfolio-header {
    position: relative;
    z-index: 2;
    border-bottom: 1px solid #f0eee82b
}

.header-inner {
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px
}

.wordmark, .portfolio-header nav a, .locale-switch {
    color: var(--paper);
    text-decoration: none
}

.wordmark {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .1em
}

.portfolio-header nav {
    display: flex;
    align-items: center;
    gap: clamp(16px, 3vw, 40px)
}

.portfolio-header nav a, .locale-switch {
    font-size: 13px
}

.locale-switch {
    border: 1px solid #f0eee854;
    min-width: 42px;
    text-align: center;
    padding: 7px
}

.hero {
    position: relative;
    min-height: 75svh;
    display: flex;
    align-items: center;
    padding-block: 100px 110px;
    isolation: isolate
}

.hero:before, .hero-light {
    position: absolute;
    z-index: -1;
    content: "";
    pointer-events: none;
    inset: auto -10% -4% 40%;
    height: 75%;
    background: linear-gradient(145deg, transparent 8%, #1237dc99 43%, #0431e4 77%);
    clip-path: polygon(35% 0, 100% 26%, 100% 100%, 0 100%);
    filter: blur(1px)
}

.hero-light {
    inset: auto -14% -12% 46%;
    height: 66%;
    background: radial-gradient(ellipse at 65% 60%, #3767ffb8, #0431e4 42%, #0431e488 67%, transparent 75%);
    clip-path: none;
    filter: blur(40px);
    animation: light-arrive .45s ease-out both
}

.hero-copy {
    max-width: 790px;
    position: relative
}

.eyebrow {
    font-size: 11px;
    line-height: 1.4;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--muted);
    margin: 0 0 20px
}

.hero h1, .section-heading h2, .contact-section h2 {
    font-family: 'Big Shoulders', sans-serif;
    font-weight: 600;
    letter-spacing: -.025em;
    text-wrap: balance
}

.hero h1 {
    font-size: clamp(3.5rem, 8.3vw, 7.8rem);
    line-height: .91;
    margin: 0;
    max-width: 850px
}

.hero-intro {
    max-width: 570px;
    font-size: 18px;
    line-height: 1.65;
    color: #f0eee8d9;
    margin: 30px 0 0
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 30px
}

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    min-height: 48px;
    padding: 0 19px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: background-color .18s, color .18s, transform .18s
}

.button-primary {
    background: var(--blue);
    color: white
}

.button-primary:hover {
    background: #244cff;
    transform: translateY(-2px)
}

.button-secondary {
    border: 1px solid #f0eee85c;
    color: var(--paper)
}

.button-secondary:hover {
    background: var(--paper);
    color: var(--ink)
}

.hero-index {
    position: absolute;
    right: 0;
    bottom: 32px;
    color: #f0eee880;
    font-size: 10px;
    letter-spacing: .15em
}

.work-section {
    padding-block: 40px 100px
}

.section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 24px;
    border-bottom: 1px solid #f0eee84a;
    padding-bottom: 20px
}

.section-heading .eyebrow {
    margin: 0
}

.section-heading h2 {
    margin: 0;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: .95
}

.project-index {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #f0eee82b;
    padding: 13px 0 22px;
    gap: 10px 26px
}

.project-index a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 40px;
    color: var(--muted);
    text-decoration: none;
    font-size: 13px;
    transition: color .18s
}

.project-index a span {
    font-size: 10px;
    color: #f0eee873
}

.project-index a:hover {
    color: var(--paper)
}

.project-index svg {
    opacity: 0;
    transition: opacity .18s, transform .18s
}

.project-index a:hover svg, .project-index a:focus-visible svg {
    opacity: 1;
    transform: translateY(2px)
}

.featured-project, .compact-project {
    scroll-margin-top: 30px;
    transition: background-color .2s
}

.featured-project:target, .compact-project:target {
    background: #ffffff0a
}

.fibisoft-cover {
    height: clamp(250px, 42vw, 510px);
    background: var(--blue);
    padding: 20px clamp(18px, 4vw, 52px);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

.cover-topline, .cover-bottomline {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    color: #ffffffcb;
    font-size: 9px;
    letter-spacing: .13em
}

.cover-word {
    font-family: 'Big Shoulders', sans-serif;
    font-weight: 700;
    font-size: clamp(5rem, 19vw, 17rem);
    line-height: .7;
    letter-spacing: -.075em;
    white-space: nowrap;
    position: relative;
    z-index: 1
}

.cover-word span {
    font: 500 16px var(--font-sans), sans-serif;
    vertical-align: top;
    letter-spacing: 0
}

.cover-band {
    position: absolute;
    width: 120%;
    height: 22%;
    background: #f0eee8;
    right: -7%;
    top: 49%;
    transform: rotate(-7deg);
    box-shadow: 0 0 0 1px #fff8
}

.cover-bottomline {
    position: relative;
    z-index: 1
}

.project-story {
    display: grid;
    grid-template-columns:5fr 7fr;
    gap: 35px;
    padding: 32px 0 60px;
    border-bottom: 1px solid #f0eee82b;
    align-items: start
}

.project-story h3, .compact-project h3 {
    font-family: 'Big Shoulders', sans-serif;
    font-weight: 600;
    font-size: clamp(2.4rem, 4.5vw, 4.6rem);
    line-height: .95;
    margin: 0
}

.project-story .eyebrow {
    margin-bottom: 12px
}

.project-story > p, .crypto-story > div > p, .compact-description > p {
    font-size: 16px;
    line-height: 1.7;
    color: #f0eee8d9;
    margin: 0;
    max-width: 650px
}

.crypto-project {
    padding-top: 55px
}

.crypto-image-frame {
    background: #152033;
    overflow: hidden;
    aspect-ratio: 1028/541
}

.crypto-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain
}

.crypto-story {
    padding-top: 26px
}

.crypto-story > div:last-child {
    max-width: 650px
}

.text-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--focus);
    font-size: 14px;
    text-decoration: none;
    margin-top: 20px;
    min-height: 44px
}

.text-link:hover {
    color: var(--paper)
}

.compact-project {
    display: grid;
    grid-template-columns:2fr 3fr 5fr;
    gap: 26px;
    align-items: start;
    padding: 30px 0;
    border-bottom: 1px solid #f0eee82b
}

.compact-category {
    margin: 8px 0 0
}

.compact-project h3 {
    font-size: clamp(2rem, 3.5vw, 3.4rem)
}

.compact-description > p {
    font-size: 15px
}

.compact-description .text-link {
    margin-top: 8px
}

.experience-section {
    padding: 90px 0 100px;
    background: #0f151b
}

.experience-heading {
    margin-bottom: 8px
}

.experience-list {
    list-style: none;
    padding: 0;
    margin: 0
}

.experience-list li {
    border-bottom: 1px solid #f0eee82b
}

.experience-list a {
    display: grid;
    grid-template-columns:1.1fr 1.25fr 1fr 20px;
    gap: 20px;
    align-items: center;
    min-height: 78px;
    color: var(--paper);
    text-decoration: none;
    transition: padding .18s, color .18s
}

.experience-list a:hover {
    padding-inline: 10px;
    color: var(--focus)
}

.experience-company {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .05em
}

.experience-role, .experience-period {
    font-size: 13px;
    color: var(--muted)
}

.contact-section {
    background: #14247e;
    padding: 80px 0 26px
}

.contact-section .eyebrow {
    color: #ffffffa8
}

.contact-section h2 {
    font-size: clamp(3rem, 8vw, 7rem);
    line-height: .92;
    max-width: 900px;
    margin: 0 0 35px
}

.contact-email {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    max-width: 100%;
    font-size: clamp(1rem, 3vw, 1.8rem);
    color: white;
    text-decoration: none;
    overflow-wrap: anywhere;
    border-bottom: 1px solid #ffffff7a;
    padding-bottom: 8px
}

.contact-bottom {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 24px;
    margin-top: 90px;
    padding-top: 20px;
    border-top: 1px solid #ffffff5c
}

.contact-bottom nav {
    display: flex;
    flex-wrap: wrap;
    gap: 22px
}

.contact-bottom nav a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: white;
    text-decoration: none;
    font-size: 13px;
    min-height: 36px
}

.contact-bottom > p {
    font-size: 11px;
    color: #ffffffb0;
    text-align: right;
    margin: 0
}

@keyframes light-arrive {
    from {
        opacity: .25;
        transform: translateY(18px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
}

.portfolio-page :focus-visible {
    outline: 2px solid var(--focus);
    outline-offset: 4px
}

.portfolio-page a {
    -webkit-tap-highlight-color: transparent
}

@media (min-width: 1024px) {
    .portfolio-header {
        position: sticky;
        top: 0;
        background: #080b0ee8;
        backdrop-filter: blur(12px)
    }

    .portfolio-container {
        width: min(100% - 96px, 1280px)
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .portfolio-container {
        width: calc(100% - 64px)
    }

    .header-inner {
        min-height: 68px
    }
}

@media (max-width: 767px) {
    .header-inner {
        min-height: 0;
        display: grid;
        grid-template-columns:1fr auto;
        gap: 0
    }

    .wordmark, .locale-switch {
        min-height: 48px;
        display: flex;
        align-items: center
    }

    .portfolio-header nav {
        grid-column: 1/-1;
        grid-row: 2;
        justify-content: space-between;
        gap: 10px;
        border-top: 1px solid #f0eee82b
    }

    .portfolio-header nav a {
        display: flex;
        align-items: center;
        min-height: 46px;
        font-size: 12px
    }

    .hero {
        min-height: 0;
        padding-block: 88px 100px
    }

    .hero h1 {
        font-size: clamp(3.35rem, 13.8vw, 6.2rem);
        max-width: 620px
    }

    .hero-intro {
        font-size: 16px;
        margin-top: 22px
    }

    .hero:before {
        inset: auto -30% -6% 20%;
        height: 55%;
        opacity: .8
    }

    .hero-light {
        inset: auto -40% -14% 28%;
        height: 50%;
        filter: blur(32px)
    }

    .hero-index {
        bottom: 22px
    }

    .work-section {
        padding-top: 24px;
        padding-bottom: 70px
    }

    .section-heading {
        align-items: start;
        flex-direction: column;
        gap: 12px
    }

    .section-heading h2 {
        font-size: 3rem
    }

    .project-index {
        gap: 5px 15px;
        padding-bottom: 15px
    }

    .project-index a {
        font-size: 12px
    }

    .fibisoft-cover {
        height: 260px;
        padding: 17px 14px
    }

    .cover-word {
        font-size: clamp(4.5rem, 19vw, 8.5rem)
    }

    .cover-topline, .cover-bottomline {
        font-size: 7px
    }

    .cover-bottomline span:last-child {
        text-align: right
    }

    .project-story {
        grid-template-columns:1fr;
        gap: 17px;
        padding: 25px 0 38px
    }

    .project-story h3 {
        font-size: 3.15rem
    }

    .crypto-project {
        padding-top: 35px
    }

    .crypto-image-frame {
        aspect-ratio: 1028/541
    }

    .crypto-story {
        padding-top: 21px
    }

    .compact-project {
        grid-template-columns:1fr;
        gap: 10px;
        padding: 25px 0
    }

    .compact-project h3 {
        font-size: 2.6rem
    }

    .compact-category {
        margin: 0
    }

    .experience-section {
        padding: 65px 0
    }

    .experience-heading {
        margin-bottom: 12px
    }

    .experience-list a {
        grid-template-columns:1fr 20px;
        gap: 5px 12px;
        padding-block: 15px
    }

    .experience-company {
        grid-column: 1
    }

    .experience-role {
        grid-column: 1
    }

    .experience-period {
        grid-column: 1;
        grid-row: 3;
        font-size: 12px
    }

    .experience-list svg {
        grid-column: 2;
        grid-row: 1/4
    }

    .contact-section {
        padding-top: 62px
    }

    .contact-section h2 {
        font-size: clamp(3rem, 12vw, 5rem)
    }

    .contact-bottom {
        align-items: start;
        flex-direction: column;
        margin-top: 60px
    }

    .contact-bottom nav {
        gap: 14px
    }

    .contact-bottom > p {
        text-align: left
    }
}

@media (max-width: 359px) {
    .portfolio-container {
        width: calc(100% - 32px)
    }

    .cover-word {
        font-size: 18vw
    }

    .hero h1 {
        font-size: 3.2rem
    }

    .project-index {
        gap: 4px 10px
    }

    .project-index a {
        font-size: 11px
    }
}

@media (prefers-reduced-motion: reduce) {
    .portfolio-page *, .portfolio-page *::before, .portfolio-page *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important
    }
}
</style>
