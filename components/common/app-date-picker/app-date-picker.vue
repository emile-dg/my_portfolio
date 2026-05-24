<script setup lang="ts">
import {CalendarIcon, ChevronLeftIcon, ChevronRightIcon} from "lucide-vue-next";
import {
	DatePickerArrow,
	DatePickerCalendar,
	DatePickerCell,
	DatePickerCellTrigger,
	DatePickerContent,
	DatePickerField,
	DatePickerGrid,
	DatePickerGridBody,
	DatePickerGridHead,
	DatePickerGridRow,
	DatePickerHeadCell,
	DatePickerHeader,
	DatePickerHeading,
	DatePickerInput,
	DatePickerNext,
	DatePickerPrev,
	DatePickerRoot,
	DatePickerTrigger
} from "radix-vue";

defineProps<{ id: string }>();
defineEmits(['update:date']);

const model = ref();

</script>

<template>
<div class="flex flex-col gap-0">
	<label class="text-sm" for="date-field">
		<slot name="label"/>
	</label>
	<DatePickerRoot
		locale="fr-CM"
		:id v-model="model" @update:model-value="(v: string) => $emit('update:date', v)"
	>
		<DatePickerField
			v-slot="{ segments }"
			class="w-64 flex select-none items-center justify-between rounded-lg text-center border border-slate-300 px-4 py-2 data-invalid:border-red-500"
		>
			<div class="flex items-center gap-1">
				<template
					v-for="item in segments"
					:key="item.part"
				>
					<DatePickerInput
						v-if="item.part === 'literal'"
						:part="item.part" class="text-slate-500 "
					>
						{{ item.value }}
					</DatePickerInput>
					<DatePickerInput
						v-else
						:part="item.part"
						class="rounded-md p-0.5 focus:outline-hidden focus:shadow-[0_0_0_2px] focus:shadow-black data-placeholder:text-slate-500 "
					>
						{{ item.value }}
					</DatePickerInput>
				</template>
			</div>

			<DatePickerTrigger class="rounded-md text-xl p-1 focus:ring-3 outline-hidden">
				<CalendarIcon :size="18"/>
			</DatePickerTrigger>
		</DatePickerField>

		<DatePickerContent
			:side-offset="4"
			class="rounded-xl bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
		>
			<DatePickerArrow class="fill-white"/>
			<DatePickerCalendar
				v-slot="{ weekDays, grid }"
				class="p-4"
			>
				<DatePickerHeader class="flex items-center justify-between">
					<DatePickerPrev
						class="inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-secondary hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
					>
						<ChevronLeftIcon/>
					</DatePickerPrev>

					<DatePickerHeading class="text-black font-medium"/>
					<DatePickerNext
						class="inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-secondary hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
					>
						<ChevronRightIcon/>
					</DatePickerNext>
				</DatePickerHeader>
				<div
					class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
				>
					<DatePickerGrid
						v-for="month in grid"
						:key="month.value.toString()"
						class="w-full border-collapse select-none space-y-1"
					>
						<DatePickerGridHead>
							<DatePickerGridRow class="mb-1 flex w-full justify-between">
								<DatePickerHeadCell
									v-for="day in weekDays"
									:key="day"
									class="w-8 rounded-md text-xs text-green8"
								>
									{{ day }}
								</DatePickerHeadCell>
							</DatePickerGridRow>
						</DatePickerGridHead>
						<DatePickerGridBody>
							<DatePickerGridRow
								v-for="(weekDates, index) in month.rows"
								:key="`weekDate-${index}`"
								class="flex w-full"
							>
								<DatePickerCell
									v-for="weekDate in weekDates"
									:key="weekDate.toString()"
									:date="weekDate"
								>
									<DatePickerCellTrigger
										:day="weekDate"
										:month="month.value"
										class="relative flex items-center justify-center whitespace-nowrap rounded-[9px] border border-transparent bg-transparent text-sm font-normal text-black w-8 h-8 outline-hidden focus:shadow-[0_0_0_2px] focus:shadow-black hover:border-black data-[selected]:bg-primary data-selected:font-medium data-disabled:text-black/30 data-selected:text-white data-unavailable:pointer-events-none data-unavailable:text-black/30 data-unavailable:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-today:before:block data-[today]:before:bg-primary data-selected:before:bg-white"
									/>
								</DatePickerCell>
							</DatePickerGridRow>
						</DatePickerGridBody>
					</DatePickerGrid>
				</div>
			</DatePickerCalendar>
		</DatePickerContent>
	</DatePickerRoot>
</div>
</template>

<style scoped>

</style>