<script setup lang="ts">

import {SelectItem, SelectItemIndicator, SelectItemText} from "radix-vue";

defineProps<{
	value: string;
}>()
</script>

<template>
<SelectItem
	:value class="px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors outline-hidden rounded-sm"
>
<!--	<SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">-->
<!--		<Icon icon="radix-icons:check"/>-->
<!--	</SelectItemIndicator>-->
	<SelectItemText>
		<slot/>
	</SelectItemText>
</SelectItem>
</template>

<style scoped>

</style>