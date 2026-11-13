<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const experienceLink = computed(() => route.path.startsWith('/experience/') ? localePath('/#experience') : '#experience')
const contactLink = computed(() => route.path.startsWith('/experience/') ? localePath('/#contact') : '#contact')
</script>

<template>
    <header class="site-header">
        <div class="site-header-inner">
            <NuxtLinkLocale to="/" class="site-header-name">{{ t('header.name') }}</NuxtLinkLocale>
            <nav :aria-label="t('header.nav.home')">
                <NuxtLinkLocale to="/">{{ t('header.nav.home') }}</NuxtLinkLocale>
                <NuxtLink :to="experienceLink">{{ t('header.nav.experience') }}</NuxtLink>
                <NuxtLink :to="contactLink">{{ t('header.nav.contact') }}</NuxtLink>
            </nav>
            <NuxtLink :to="switchLocalePath(locale === 'en' ? 'fr' : 'en')" class="site-language">{{ locale === 'en' ? 'FR' : 'EN' }}</NuxtLink>
        </div>
    </header>
</template>

<style scoped>
.site-header{position:sticky;top:0;z-index:20;background:#f0eee8ed;border-bottom:1px solid #080b0e2b;backdrop-filter:blur(12px);color:#080b0e}.site-header-inner{width:min(100% - 40px,1280px);min-height:76px;margin:auto;display:grid;grid-template-columns:1fr auto 44px;align-items:center;gap:28px}.site-header-name{font-size:14px;font-weight:700;letter-spacing:.08em;text-decoration:none;color:inherit}.site-header nav{display:flex;align-items:center;gap:clamp(16px,3vw,40px)}.site-header nav a,.site-language{display:inline-flex;align-items:center;min-height:44px;color:inherit;text-decoration:none;font-size:13px}.site-header nav a:hover,.site-header-name:hover{text-decoration:underline;text-underline-offset:4px}.site-language{justify-content:center;border:1px solid #080b0e55}.site-header a:focus-visible{outline:2px solid #0431e4;outline-offset:3px}@media(max-width:767px){.site-header-inner{grid-template-columns:1fr 44px;gap:0}.site-header nav{grid-column:1/-1;grid-row:2;justify-content:space-between;border-top:1px solid #080b0e2b;gap:10px}.site-header nav a{font-size:12px}.site-language{grid-column:2;grid-row:1}.site-header-name{grid-column:1;grid-row:1}}
</style>
