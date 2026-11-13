<script setup lang="ts">
useHead({
    link: [
        {rel: 'shortcut icon', href: '/favicon.ico'},
        {rel: 'manifest', href: '/site.webmanifest',},
        {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg',},
        {rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96',},
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png',},
    ],
    meta: [
        {name: 'apple-mobile-web-app-title', content: 'Emile DJIDA G',},
    ],
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<style scoped>

</style>