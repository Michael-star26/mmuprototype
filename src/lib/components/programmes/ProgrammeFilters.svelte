<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import X from '@lucide/svelte/icons/x';

	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';

	import type { StudyLevel } from '$lib/types';

	type FilterValue = {
		value: string;
		label: string;
	};

	let {
		search = $bindable(''),
		level = $bindable('all'),
		faculty = $bindable('all'),
		duration = $bindable('all'),
		faculties = []
	}: {
		search?: string;
		level?: string;
		faculty?: string;
		duration?: string;
		faculties?: string[];
	} = $props();

	const studyLevels: FilterValue[] = [
		{ value: 'all', label: 'All study levels' },
		{ value: 'Certificate', label: 'Certificate' },
		{ value: 'Diploma', label: 'Diploma' },
		{ value: "Bachelor's Degree", label: "Bachelor's Degree" },
		{ value: 'Postgraduate Diploma', label: 'Postgraduate Diploma' },
		{ value: "Master's Degree", label: "Master's Degree" },
		{ value: 'Doctoral (PhD)', label: 'Doctoral (PhD)' }
	];

	const durations: FilterValue[] = [
		{ value: 'all', label: 'All durations' },
		{ value: '1 Year', label: '1 Year' },
		{ value: '2 Years', label: '2 Years' },
		{ value: '3 Years', label: '3 Years' },
		{ value: '4 Years', label: '4 Years' },
		{ value: '5 Years', label: '5 Years' }
	];

	const facultyOptions = $derived([
		{ value: 'all', label: 'All faculties' },
		...faculties.map((item) => ({
			value: item,
			label: item
		}))
	]);

	const hasFilters = $derived(
		search.trim() !== '' ||
			level !== 'all' ||
			faculty !== 'all' ||
			duration !== 'all'
	);

	function clearFilters() {
		search = '';
		level = 'all';
		faculty = 'all';
		duration = 'all';
	}
</script>

<div class="space-y-4">
	<div class="relative">
		<Search
			class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
		/>

		<Input
			bind:value={search}
			placeholder="Search programmes..."
			class="pl-9 pr-9"
		/>

		{#if search}
			<button
				type="button"
				class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
				aria-label="Clear search"
				onclick={() => (search = '')}
			>
				<X class="size-4" />
			</button>
		{/if}
	</div>

	<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
		<Select.Root
			type="single"
			bind:value={level}
		>
			<Select.Trigger class="w-full">
				{studyLevels.find((item) => item.value === level)?.label ??
					'All study levels'}
			</Select.Trigger>

			<Select.Content>
				{#each studyLevels as item}
					<Select.Item value={item.value}>
						{item.label}
					</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>

		<Select.Root
			type="single"
			bind:value={faculty}
		>
			<Select.Trigger class="w-full">
				{facultyOptions.find((item) => item.value === faculty)?.label ??
					'All faculties'}
			</Select.Trigger>

			<Select.Content>
				{#each facultyOptions as item}
					<Select.Item value={item.value}>
						{item.label}
					</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>

		<Select.Root
			type="single"
			bind:value={duration}
		>
			<Select.Trigger class="w-full">
				{durations.find((item) => item.value === duration)?.label ??
					'All durations'}
			</Select.Trigger>

			<Select.Content>
				{#each durations as item}
					<Select.Item value={item.value}>
						{item.label}
					</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</div>

	{#if hasFilters}
		<div class="flex justify-end">
			<Button variant="ghost" size="sm" onclick={clearFilters}>
				<X class="mr-2 size-4" />
				Clear filters
			</Button>
		</div>
	{/if}
</div>