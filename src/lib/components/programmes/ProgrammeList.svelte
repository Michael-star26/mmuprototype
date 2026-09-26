<script lang="ts">
	import ProgrammeFilters from './ProgrammeFilters.svelte';
	import ProgrammePagination from './ProgrammePagination.svelte';
	import ProgrammeRow from './ProgrammeRow.svelte';

	import type { Programme } from '$lib/types';

	let { programmes }: { programmes: Programme[] } = $props();

	const perPage = 6;

	let search = $state('');
	let level = $state('all');
	let faculty = $state('all');
	let duration = $state('all');
	let currentPage = $state(1);

	const faculties = $derived(
		[...new Set(programmes.map((programme) => programme.faculty))].sort()
	);

	const filteredProgrammes = $derived.by(() => {
		const query = search.trim().toLowerCase();

		return programmes.filter((programme) => {
			const matchesSearch =
				query === '' ||
				programme.title.toLowerCase().includes(query) ||
				programme.faculty.toLowerCase().includes(query) ||
				programme.description.toLowerCase().includes(query);

			const matchesLevel =
				level === 'all' || programme.level === level;

			const matchesFaculty =
				faculty === 'all' || programme.faculty === faculty;

			const matchesDuration =
				duration === 'all' || programme.duration === duration;

			return (
				matchesSearch &&
				matchesLevel &&
				matchesFaculty &&
				matchesDuration
			);
		});
	});

	const paginatedProgrammes = $derived(
		filteredProgrammes.slice(
			(currentPage - 1) * perPage,
			currentPage * perPage
		)
	);

	const filterKey = $derived(
		`${search}|${level}|${faculty}|${duration}`
	);

	$effect(() => {
		filterKey;
		currentPage = 1;
	});
</script>

<div class="space-y-8">
	<!-- Filters -->
	<ProgrammeFilters
		bind:search
		bind:level
		bind:faculty
		bind:duration
		{faculties}
	/>

	<!-- Result count -->
	<div class="border-b pb-3">
		<p class="text-sm text-muted-foreground">
			{filteredProgrammes.length} programmes found
		</p>
	</div>

	<!-- Results -->
	{#if paginatedProgrammes.length > 0}
		<div>
			{#each paginatedProgrammes as programme (programme.id)}
				<ProgrammeRow {programme} />
			{/each}
		</div>
	{:else}
		<div class="rounded-lg border py-16 text-center">
			<h3 class="font-semibold">No programmes found</h3>
			<p class="mt-2 text-sm text-muted-foreground">
				Try adjusting your search or filters.
			</p>
		</div>
	{/if}

	<!-- Pagination -->
	<ProgrammePagination
		bind:currentPage
		count={filteredProgrammes.length}
		{perPage}
	/>
</div>