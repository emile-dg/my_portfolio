<script setup lang="ts">
import {DropdownMenuItem, type DropdownMenuItemProps} from "radix-vue";
import {$class} from "~/utils";

defineProps<DropdownMenuItemProps>();
</script>

<template>
<DropdownMenuItem
	v-bind="$attrs"
	:class="$class([
		 'group select-none text-slate-700 px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors outline-hidden rounded-sm',
		 'data-disabled:text-slate-400 data-disabled:pointer-events-none',
		 'data-highlighted:bg-slate-200',
	])"
>
	<slot/>

	<div
		v-if="$slots.shortcut"
		class="ml-auto pl-[20px] group-data-highlighted:text-white group-data-disabled:text-slate-400"
	>
		<slot name="shortcut"/>
	</div>
</DropdownMenuItem>
</template>

<style scoped>

</style>