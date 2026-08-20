<script setup lang="ts">
import {gsap}                                                from 'gsap';
import {ScrollTrigger}                                       from 'gsap/ScrollTrigger';
import {computed, nextTick, onBeforeUnmount, onMounted, ref} from 'vue';


type Orientation = | 'vertical' | 'horizontal' | 'vertical-reverse' | 'horizontal-reverse';


interface Tag {
    id: string;
    name: string;
    isHighlighted: boolean;
}


const props = withDefaults(defineProps<{
    date: string;
    image?: string;
    projectName: string;
    content: string[];
    tags: Tag[];
    orientation?: Orientation;
}>(), {
    orientation: 'horizontal',
});

const isVertical = computed(() => props.orientation === 'vertical' || props.orientation === 'vertical-reverse');

const isReverse = computed(() => props.orientation === 'vertical-reverse' || props.orientation === 'horizontal-reverse');

const articleRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(async () => {
    gsap.registerPlugin(ScrollTrigger);
    await nextTick();
    if (!articleRef.value) return;

    ctx = gsap.context(() => {
        const image = articleRef.value?.querySelector('.project-image');
        const metadata = articleRef.value?.querySelector('.project-metadata');
        const description = articleRef.value?.querySelector('.project-description');

        if (image) {
            gsap.fromTo(image, {
                opacity: 0,
                y: 80,
                scale: 0.95,
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: image,
                    start: 'top 85%',
                    end: 'top 60%',
                    scrub: 1,
                },
            });
        }

        if (metadata) {
            gsap.fromTo(metadata, {
                opacity: 0,
                y: 60,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: metadata,
                    start: 'top 100%',
                    end: 'top 65%',
                    scrub: 1,
                },
            });

            const tags = metadata.querySelectorAll('.project-tag');
            if (tags.length > 0) {
                gsap.fromTo(tags, {
                    scale: 0.8,
                    opacity: 0,
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: metadata,
                        start: 'top 90%',
                        end: 'bottom 0%',
                        toggleActions: 'play reverse play reverse',
                    },
                });
            }
        }

        if (description) {
            gsap.fromTo(description, {
                opacity: 0,
                y: 60,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: description,
                    start: 'top 100%',
                    end: 'top 65%',
                    scrub: 1,
                },
            });
        }
    }, articleRef.value);
});

onBeforeUnmount(() => {
    ctx?.revert();
});
</script>

<template>
    <article
        ref="articleRef"
        :class="[
            'w-full',
            isVertical
                ? 'flex flex-col'
                : 'grid grid-cols-1 xl:grid-cols-5',
        ]"
    >
        <!-- Image -->
        <div
            class="project-image"
            :class="[
                'w-full overflow-hidden bg-dark-soft',
                isVertical
                    ? 'aspect-video'
                    : 'aspect-video lg:aspect-square lg:col-span-3',
                isReverse ? 'order-1 xl:order-2' : 'order-1',
            ]"
        >
            <img
                v-if="image"
                :src="image"
                :alt="`${projectName} project`"
                class="h-full w-full object-cover"
            />
        </div>

        <!-- Project information -->
        <div
            :class="[
                isVertical
                    ? 'grid grid-cols-1 lg:grid-cols-2 lg:gap-12'
                    : 'lg:col-span-2 flex flex-col justify-between',
                isReverse ? 'order-2 lg:order-1' : 'order-2',
            ]"
        >
            <!-- Metadata -->
            <div
                class="project-metadata"
                :class="[
                    'w-full space-y-6',
                    isVertical ? 'py-8 lg:py-10' : 'px-0 py-8 lg:p-8',
                ]"
            >
                <p class="text-sm">
                    {{ date }}
                </p>

                <h2 class="font-display text-4xl lg:text-6xl">
                    {{ projectName }}
                </h2>

                <div class="flex flex-wrap gap-4">
                    <div
                        v-for="tag in tags"
                        :key="tag.id"
                        class="project-tag"
                        :class="[
                            'px-6 py-3 text-white',
                            tag.isHighlighted
                                ? 'bg-primary'
                                : 'bg-dark-soft',
                        ]"
                    >
                        {{ tag.name }}
                    </div>
                </div>
            </div>

            <!-- Description -->
            <div
                class="project-description"
                :class="[
                    'w-full space-y-6',
                    isVertical
                        ? 'pb-8 lg:py-10'
                        : 'px-0 pb-8 lg:p-8',
                ]"
            >
                <p
                    v-for="(paragraph, index) in content"
                    :key="index"
                    class="text-lg"
                >
                    {{ paragraph }}
                </p>
            </div>
        </div>
    </article>
</template>