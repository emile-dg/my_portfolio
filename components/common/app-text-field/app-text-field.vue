<script setup lang="ts">

defineProps<{ id: string }>();
</script>

<template>
<div class="flex flex-col gap-2">
	<label :for="id" class="text-sm">
		<slot name="label"/>
	</label>

	<input :id="id" :name="id" type="text" v-bind="$attrs"
	       class="px-4 py-2 rounded-lg bg-white outline-hidden border border-slate-200">
</div>
</template>

<style scoped>

</style>