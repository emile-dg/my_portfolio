<script lang="ts" setup>
const $emit = defineEmits(['formSubmitted']);

const handleSubmit = (event: Event): void => {
	event.preventDefault();

	const formElement = event.target as HTMLFormElement;
	const formData = new FormData(formElement);

	const data = {};
	formData.forEach((value: any, key: any) => {
		// @ts-ignore
		data[key] = value;
	});

	$emit('formSubmitted', data);
};
</script>

<template>
<form v-bind="$attrs" @submit="handleSubmit">
	<slot></slot>
</form>
</template>