<script setup lang="ts">
defineProps<{
    id?: string
    heading?: string
    headingSize?: 'sm' | 'md' | 'lg' | 'xl'
    paddingY?: string
}>()
</script>

<template>
    <section
        :id="id"
        :class="[
            'container mx-auto p-4 lg:p-0 grid grid-cols-12',
            paddingY ?? 'py-16',
        ]"
    >
        <h2
            v-if="heading"
            :class="[
                'col-span-12 font-bold',
                headingSize === 'xl'
                    ? 'text-[clamp(4rem,9vw,9rem)] leading-none'
                    : headingSize === 'lg'
                    ? 'text-4xl'
                    : headingSize === 'sm'
                    ? 'text-xl'
                    : 'text-3xl',
            ]"
        >
            {{ heading }}
        </h2>

        <div class="col-span-12">
            <slot/>
        </div>
    </section>
</template>
