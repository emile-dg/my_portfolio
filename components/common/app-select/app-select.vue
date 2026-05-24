<script setup lang="ts">
import {SelectContent, SelectPortal, SelectRoot, SelectTrigger, SelectValue, SelectViewport} from "radix-vue";
import {ChevronDown} from "lucide-vue-next";

defineProps<{
	placeholder?: string
}>();
</script>

<template>
<SelectRoot v-bind="$attrs">
	<SelectTrigger
		class="flex justify-between bg-white items-center w-full px-4 py-2 rounded-lg border border-slate-300 text-slate-700 outline-hidden"
		aria-label="Customise options"
	>
		<SelectValue :placeholder/>
		<ChevronDown :size="18"/>
	</SelectTrigger>

	<SelectPortal>
		<SelectContent
			:side-offset="5"
			class="bg-white min-w-[200px] border border-slate-300 rounded-lg"
		>
			<SelectViewport class="p-2">
				<slot/>
			</SelectViewport>
		</SelectContent>
	</SelectPortal>
</SelectRoot>
</template>

<style scoped>

</style>