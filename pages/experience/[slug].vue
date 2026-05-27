<script setup lang="ts">
import {ArrowLeft} from 'lucide-vue-next'

const route = useRoute()
const {locale, t} = useI18n()
const slug = route.params.slug as string

const {data: experience} = await useAsyncData(
    `experience-${locale.value}-${slug}`,
    () =>
        queryCollection('content').path(`/${locale.value}/experience/${slug}`).first()
)

if (!experience.value) {
    throw createError({statusCode: 404, statusMessage: 'Experience not found'})
}

useHead({
    title: () => `${experience.value?.title} — ${experience.value?.company} | ${t('meta.title')}`,
    meta: [
        {name: 'description', content: () => experience.value?.summary ?? ''},
    ],
})
</script>

<template>
    <AppHeader/>

    <main class="container mx-auto px-4 xl:px-0 py-16">
        <!-- Back link -->
        <nuxt-link
            to="/#experience"
            class="inline-flex items-center gap-2 text-sm font-bold border border-black px-3 py-1.5 hover:bg-black hover:text-white transition-colors mb-12"
        >
            <ArrowLeft :size="14"/>
            {{ $t('experience.backToExperience') }}
        </nuxt-link>

        <!-- Header block -->
        <div class="mb-12 pb-8 border-b border-black">
            <p class="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-3">
                {{ experience?.period }}
            </p>
            <h1 class="font-alfa text-[clamp(2rem,6vw,5rem)] uppercase leading-tight mb-4">
                {{ experience?.company }}
            </h1>
            <p class="text-xl font-bold mb-2">{{ experience?.title }}</p>
            <p class="text-sm text-zinc-500 font-bold">{{ experience?.location }}</p>
        </div>

        <!-- Markdown prose content -->
        <div class="prose prose-zinc max-w-4xl mx-auto
            prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:font-alfa
            prose-h2:text-2xl prose-h2:border-b prose-h2:border-black prose-h2:pb-2 prose-h2:mt-12
            prose-h3:text-lg prose-h3:mt-8
            prose-p:leading-relaxed
            prose-li:leading-relaxed
            prose-strong:font-bold
            prose-a:underline hover:prose-a:no-underline
        ">
            <ContentRenderer v-if="experience" :value="experience"/>
        </div>
    </main>

    <footer class="container mx-auto py-10 text-center">
        {{ $t('footer.rights') }}
    </footer>
</template>
