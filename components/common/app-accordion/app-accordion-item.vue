<script setup lang="ts">
import {AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger} from "radix-vue";
import {ChevronDown} from "lucide-vue-next";

defineProps<{ value: string, }>();
</script>

<template>
<AccordionItem
	v-bind="$attrs" :value
	class="mt-px overflow-hidden first:mt-0  border border-slate-300 first:rounded-t-lg last:rounded-b-lg focus-within:relative focus-within:z-10"
>
	<AccordionHeader class="flex">
		<AccordionTrigger
			class="w-full p-4 flex justify-between items-center">
			<slot name="trigger"/>
			<ChevronDown
				class="text-green10 ease-[cubic-bezier(0.87,0,0.13,1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
			/>
		</AccordionTrigger>
	</AccordionHeader>
	<AccordionContent
		class="border-t border-t-slate-300 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
		<div class="p-4">
			<slot/>
		</div>
	</AccordionContent>
</AccordionItem>
</template>

<style scoped>

</style>