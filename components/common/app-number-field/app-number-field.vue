<script setup lang="ts">
import {MinusIcon, PlusIcon} from "lucide-vue-next";
import {NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot} from "radix-vue";


defineProps<{
	id?: string,
	min?: number,
	max?: number,
	defaultValue?: number,
}>();

defineEmits(["update:value"]);
</script>

<template>
<NumberFieldRoot
	:min :max :defaultValue
	:id class="text-sm" @update:model-value="v => $emit('update:value', v)"
>
	<label :for="id" v-if="$slots.label">
		<slot name="label"/>
	</label>
	<div class="bg-white mt-1 flex items-center border border-slate-300 rounded-md">
		<NumberFieldDecrement class="p-2 disabled:opacity-20">
			<MinusIcon :size="18"/>
		</NumberFieldDecrement>
		<NumberFieldInput class="text-center bg-transparent w-20 tabular-nums focus:outline-0 p-1"/>
		<NumberFieldIncrement class="p-2 disabled:opacity-20">
			<PlusIcon :size="18"/>
		</NumberFieldIncrement>
	</div>
</NumberFieldRoot>
</template>

<style scoped>

</style>