<script setup lang="ts">
import {$class} from "~/utils";
import {type ButtonVariants, buttonVariants} from ".";

type ButtonProps = {
	size?: ButtonVariants['size'],
	variant?: ButtonVariants['variant'],
}


const $props = withDefaults(defineProps<ButtonProps>(), {});
</script>

<template>
<button :class="$class(buttonVariants($props))">
	<slot name="left-icon"></slot>
	<slot/>
	<slot name="right-icon"></slot>
</button>
</template>

<style scoped>

</style>