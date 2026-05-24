<script setup lang="ts">
import {
	DropdownMenuContent,
	DropdownMenuPortal,
	DropdownMenuRoot,
	type DropdownMenuRootProps,
	DropdownMenuTrigger
} from "radix-vue";

defineProps<DropdownMenuRootProps>();
</script>

<template>
<DropdownMenuRoot v-bind="$attrs">
	<DropdownMenuTrigger class="">
		<slot name="trigger"/>
	</DropdownMenuTrigger>

	<DropdownMenuPortal>
		<DropdownMenuContent
			class="p-2 bg-white min-w-[250px] border border-slate-300 rounded-lg"
			:side-offset="5"
		>
			<slot/>
		</DropdownMenuContent>
	</DropdownMenuPortal>
</DropdownMenuRoot>
</template>

<style scoped>

</style>