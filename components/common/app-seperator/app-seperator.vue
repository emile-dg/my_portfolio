<script setup lang="ts">
import {Separator} from 'radix-vue';

withDefaults(defineProps<{
	orientation?: 'horizontal' | 'vertical';
}>(), {orientation: "horizontal"});
</script>

<template>
<Separator
	class="bg-[#d7cff9] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
	decorative :orientation
/>
</template>