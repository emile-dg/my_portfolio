// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/i18n'],
    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
            { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' },
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales/',
        strategy: 'no_prefix',
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
});