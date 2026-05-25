<script setup lang="ts">
import StackGroup from '~/components/StackGroup.vue'

defineProps<{
    stacks: Array<{
        category: string
        items: Array<{ name: string; icon: string }>
    }>
}>()
</script>

<template>
    <section class="container mx-auto grid grid-cols-12 gap-y-10 py-20">
        <StackGroup
            v-for="group in stacks"
            :key="group.category"
            :category="group.category"
            :items="group.items"
        />
    </section>
</template>
