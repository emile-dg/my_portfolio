// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {
                    // Immediately hide document to prevent flash before LoadingScreen mounts
                    innerHTML: `document.documentElement.style.visibility='hidden'`,
                    tagPosition: 'head',
                },
            ],
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/i18n', '@nuxt/content', '@nuxt/image'],
    i18n: {
        locales: [
            {code: 'en', iso: 'en-US', file: 'en.json', name: 'English'},
            {code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français'},
        ],
        lazy: true,
        defaultLocale: 'en',
        langDir: 'locales/',
        strategy: 'prefix_and_default',
        baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://emiledjida.dev',
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
});