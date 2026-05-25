<script setup lang="ts">
import StackCard from '~/components/StackCard.vue'

defineProps<{
    category: string
    items: Array<{ name: string; icon: string }>
}>()
</script>

<template>
    <div class="col-span-12 grid grid-cols-12 items-start gap-6">
        <h2 class="col-span-12 text-2xl font-bold md:col-span-3">
            {{ category }}
        </h2>

        <div class="col-span-12 grid grid-cols-2 gap-4 md:col-span-9 md:grid-cols-3">
            <StackCard
                v-for="item in items"
                :key="item.name"
                :name="item.name"
                :icon="item.icon"
            />
        </div>
    </div>
</template>
