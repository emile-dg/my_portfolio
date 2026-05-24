<template>

			<slot/>
</template>


<script setup lang="ts">
import AppSelectItem from "~/components/common/app-select/app-select-item.vue";
import AppSelect from "~/components/common/app-select/app-select.vue";
import {ChevronDown} from "lucide-vue-next";
import AppContainer from "~/components/common/app-container/app-container.vue";
import AppDropdown from "~/components/common/app-dropdown/app-dropdown.vue";
import AppDropdownItem from "~/components/common/app-dropdown/app-dropdown-item.vue";
</script>