<script setup lang="ts">
import {
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	type DropdownMenuSubProps,
	DropdownMenuSubTrigger
} from "radix-vue";
import {ChevronRight} from "lucide-vue-next";

defineProps<DropdownMenuSubProps>();
</script>

<template>
<DropdownMenuSub v-bind="$attrs">
	<DropdownMenuSubTrigger
		:class="$class([
			'group w-full  rounded-sm px-4 py-2 flex items-center relative select-none outline-hidden ',
			'data-[state=open]:bg-green4 data-[state=open]:text-grass11 ',
			'data-highlighted:bg-slate-200 data-[highlighted]:text-green1 ',
			'data-disabled:text-slate-300 data-disabled:pointer-events-none ',
			'data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1'
		])"
	>
		<slot name="trigger"/>
		<div
			class="ml-auto pl-[20px] text-slate-700 group-data-disabled:text-slate-300">
			<ChevronRight :size="24"/>
		</div>
	</DropdownMenuSubTrigger>

	<DropdownMenuPortal>
		<DropdownMenuSubContent
			class="p-2 bg-white min-w-[250px] border border-slate-300 rounded-lg"
			:side-offset="2"
			:align-offset="-5"
		>
			<slot/>
		</DropdownMenuSubContent>
	</DropdownMenuPortal>
</DropdownMenuSub>
</template>

<style scoped>

</style>