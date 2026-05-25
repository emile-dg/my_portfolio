<script setup lang="ts">
import BaseBadge from '~/components/BaseBadge.vue'
import BaseButton from '~/components/BaseButton.vue'
</script>

<template>
    <section class="container mx-auto grid grid-cols-12 pt-16 pb-28">
        <!-- Big title -->
        <div class="col-span-12">
            <div class="font-alfa space-y-4 font-bold uppercase leading-[0.85] text-[clamp(4rem,10vw,150px)]">
                <div class="block">{{ $t('hero.line1') }}</div>
                <div class="flex items-center justify-between gap-8">
                    <div class="flex items-center w-full">
                        <div class="w-6 aspect-square bg-black"/>
                        <div class="h-2 w-11/12 bg-black"/>
                    </div>
                    <div class="text-transparent" style="-webkit-text-stroke: 2px black">
                        {{ $t('hero.line2') }}
                    </div>
                </div>
                <div class="block">{{ $t('hero.line3') }}</div>
            </div>
        </div>

        <!-- Subtitle + CTA -->
        <div class="col-span-12 mt-14 grid grid-cols-12 gap-8">
            <div class="col-span-12 md:col-span-7">
                <p class="text-xl">{{ $t('hero.description1') }}</p>
                <p class="mt-6 max-w-xl text-xl">{{ $t('hero.description2') }}</p>
            </div>

            <div class="col-span-12 flex flex-col gap-6 md:col-span-5">
                <div class="flex flex-wrap gap-4">
                    <BaseBadge>{{ $t('hero.badge1') }}</BaseBadge>
                    <BaseBadge>{{ $t('hero.badge2') }}</BaseBadge>
                    <BaseBadge>{{ $t('hero.badge3') }}</BaseBadge>
                </div>

                <div class="flex flex-wrap gap-2">
                    <BaseButton to="/resume.pdf" variant="primary">{{ $t('hero.resumeBtn') }}</BaseButton>
                    <BaseButton to="#experience" variant="secondary">{{ $t('hero.caseStudiesBtn') }}</BaseButton>
                </div>
            </div>
        </div>
    </section>
</template>
