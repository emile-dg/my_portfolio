<script setup lang="ts">
import {AccordionRoot} from "radix-vue";

defineProps();
</script>

<template>
<AccordionRoot
	class="w-full rounded-lg outline-hidden"
	default-value="item-1"
	type="single"
	:collapsible="true"
>
	<slot/>
</AccordionRoot>
</template>

<style scoped>

</style>