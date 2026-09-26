<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
	import X from '@lucide/svelte/icons/x';

	import ProgrammePagination from './ProgrammePagination.svelte';

	import type { Programme } from '$lib/types';

	let { programmes }: { programmes: Programme[] } = $props();

	const perPage = 6;

	let search = $state('');
	let level = $state('all');
	let faculty = $state('all');
	let duration = $state('all');
	let currentPage = $state(1);
	let filtersOpen = $state(false);

	const faculties = $derived(
		[...new Set(programmes.map((programme) => programme.faculty))].sort()
	);

	const levels = $derived(
		[...new Set(programmes.map((programme) => programme.level))].sort()
	);

	const durations = $derived(
		[...new Set(programmes.map((programme) => programme.duration))].sort()
	);

	const filteredProgrammes = $derived.by(() => {
		const query = search.trim().toLowerCase();

		return programmes.filter((programme) => {
			const matchesSearch =
				query === '' ||
				programme.title.toLowerCase().includes(query) ||
				programme.faculty.toLowerCase().includes(query) ||
				programme.description.toLowerCase().includes(query) ||
				programme.level.toLowerCase().includes(query);

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

	const totalPages = $derived(
		Math.max(1, Math.ceil(filteredProgrammes.length / perPage))
	);

	const paginatedProgrammes = $derived(
		filteredProgrammes.slice(
			(currentPage - 1) * perPage,
			currentPage * perPage
		)
	);

	const hasFilters = $derived(
		search.trim() !== '' ||
			level !== 'all' ||
			faculty !== 'all' ||
			duration !== 'all'
	);

	const activeFilterCount = $derived(
		[level !== 'all', faculty !== 'all', duration !== 'all'].filter(Boolean)
			.length
	);

	function clearFilters() {
		search = '';
		level = 'all';
		faculty = 'all';
		duration = 'all';
		currentPage = 1;
	}

	function setLevel(value: string) {
		level = value;
		currentPage = 1;
	}

	function setFaculty(value: string) {
		faculty = value;
		currentPage = 1;
	}

	function setDuration(value: string) {
		duration = value;
		currentPage = 1;
	}

	function startIndex() {
		return filteredProgrammes.length === 0
			? 0
			: (currentPage - 1) * perPage + 1;
	}

	function endIndex() {
		return Math.min(currentPage * perPage, filteredProgrammes.length);
	}

	function countForLevel(item: string) {
		return programmes.filter((programme) => programme.level === item).length;
	}
</script>

<div class="space-y-0">
	<!-- =========================================================
	     EXPLORER INTRO
	========================================================= -->
	<div class="border-y">
		<div
			class="grid lg:grid-cols-[1fr_280px] lg:min-h-[280px]"
		>
			<!-- Main introduction -->
			<div class="flex flex-col justify-between border-b p-6 lg:border-b-0 lg:border-r lg:p-10">
				<div>
					<div class="flex items-center gap-3">
						<span
							class="text-[10px] font-bold uppercase tracking-[0.18em] text-primary"
						>
							Programme Catalogue
						</span>

						<span class="h-px w-8 bg-border"></span>

						<span
							class="font-mono text-[10px] text-muted-foreground"
						>
							01 / 04
						</span>
					</div>

					<h2
						class="mt-7 max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl"
					>
						Find your path.
					</h2>

					<p
						class="mt-5 max-w-xl text-sm leading-6 text-muted-foreground md:text-base"
					>
						Explore academic programmes across MMU's schools and
						faculties. Search by discipline, programme, level of
						study, or duration.
					</p>
				</div>

				<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
					<div>
						<span class="font-mono text-2xl tracking-[-0.04em]">
							{programmes.length}
						</span>

						<span
							class="ml-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
						>
							Programmes
						</span>
					</div>

					<div class="h-4 w-px bg-border"></div>

					<div>
						<span class="font-mono text-2xl tracking-[-0.04em]">
							{faculties.length}
						</span>

						<span
							class="ml-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
						>
							Faculties
						</span>
					</div>
				</div>
			</div>

			<!-- Catalogue index -->
			<div class="hidden flex-col justify-between lg:flex">
				<div class="p-7">
					<p
						class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
					>
						Study at MMU
					</p>

					<p
						class="mt-6 text-sm leading-6 text-muted-foreground"
					>
						Choose a level of study to narrow the catalogue.
					</p>
				</div>

				<div class="border-t">
					<div class="flex items-center justify-between px-7 py-5">
						<span
							class="text-[9px] font-semibold uppercase tracking-[0.14em]"
						>
							Levels
						</span>

						<span class="font-mono text-[10px] text-muted-foreground">
							{levels.length.toString().padStart(2, '0')}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- =========================================================
	     SEARCH
	========================================================= -->
	<div class="border-b">
		<div class="relative">
			<Search
				class="pointer-events-none absolute left-0 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
			/>

			<label for="programme-search" class="sr-only">
				Search academic programmes
			</label>

			<input
				id="programme-search"
				type="search"
				bind:value={search}
				placeholder="Search programmes, disciplines or faculties"
				class="h-20 w-full border-0 bg-transparent pl-9 pr-12 text-base outline-none placeholder:text-muted-foreground/70 focus:ring-0 md:h-24 md:text-lg"
			/>

			{#if search}
				<button
					type="button"
					onclick={() => (search = '')}
					class="absolute right-0 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center border transition-colors hover:bg-muted"
					aria-label="Clear search"
				>
					<X class="size-3.5" />
				</button>
			{/if}
		</div>
	</div>

	<!-- =========================================================
	     LEVEL NAVIGATION
	========================================================= -->
	<div class="border-b">
		<div class="flex overflow-x-auto">
			<button
				type="button"
				onclick={() => setLevel('all')}
				class="group relative flex min-h-[72px] min-w-fit flex-1 items-center justify-between gap-5 border-r px-5 text-left transition-colors hover:bg-muted/40 md:px-6"
			>
				<div>
					<p
						class={`text-[10px] font-bold uppercase tracking-[0.12em] ${
							level === 'all'
								? 'text-foreground'
								: 'text-muted-foreground'
						}`}
					>
						All programmes
					</p>
				</div>

				<span class="font-mono text-[10px] text-muted-foreground">
					{programmes.length.toString().padStart(2, '0')}
				</span>

				{#if level === 'all'}
					<span class="absolute inset-x-0 bottom-0 h-0.5 bg-foreground"></span>
				{/if}
			</button>

			{#each levels as item}
				<button
					type="button"
					onclick={() => setLevel(item)}
					class="group relative flex min-h-[72px] min-w-fit flex-1 items-center justify-between gap-5 border-r px-5 text-left transition-colors hover:bg-muted/40 last:border-r-0 md:px-6"
				>
					<p
						class={`text-[10px] font-bold uppercase tracking-[0.12em] ${
							level === item
								? 'text-foreground'
								: 'text-muted-foreground'
						}`}
					>
						{item}
					</p>

					<span class="font-mono text-[10px] text-muted-foreground">
						{countForLevel(item).toString().padStart(2, '0')}
					</span>

					{#if level === item}
						<span class="absolute inset-x-0 bottom-0 h-0.5 bg-foreground"></span>
					{/if}
				</button>
			{/each}
		</div>
	</div>

	<!-- =========================================================
	     FILTER CONTROLS
	========================================================= -->
	<div class="border-b">
		<div class="flex min-h-[64px] items-center justify-between gap-4">
			<div class="flex items-center">
				<button
					type="button"
					onclick={() => (filtersOpen = !filtersOpen)}
					class="flex h-16 items-center gap-3 border-r px-4 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-muted/40 md:px-6"
					aria-expanded={filtersOpen}
				>
					<SlidersHorizontal class="size-3.5" />

					<span>Filters</span>

					{#if activeFilterCount > 0}
						<span class="font-mono text-muted-foreground">
							({activeFilterCount})
						</span>
					{/if}
				</button>

				{#if hasFilters}
					<button
						type="button"
						onclick={clearFilters}
						class="flex h-16 items-center gap-2 px-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground md:px-6"
					>
						<X class="size-3" />
						Clear
					</button>
				{/if}
			</div>

			<div
				class="pr-4 text-right md:pr-6"
			>
				<p class="font-mono text-xs">
					{filteredProgrammes.length.toString().padStart(2, '0')}
				</p>

				<p
					class="text-[8px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
				>
					Results
				</p>
			</div>
		</div>

		{#if filtersOpen}
			<div class="grid border-t md:grid-cols-3">
				<!-- Faculty -->
				<label class="relative border-b md:border-b-0 md:border-r">
					<span
						class="absolute left-5 top-4 text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
					>
						Faculty
					</span>

					<select
						value={faculty}
						onchange={(event) =>
							setFaculty(
								(event.currentTarget as HTMLSelectElement).value
							)}
						class="h-20 w-full appearance-none bg-background px-5 pb-0 pt-7 text-sm outline-none transition-colors focus:bg-muted/20"
					>
						<option value="all">All faculties</option>

						{#each faculties as item}
							<option value={item}>{item}</option>
						{/each}
					</select>

					<ChevronDown
						class="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
					/>
				</label>

				<!-- Duration -->
				<label class="relative border-b md:border-b-0 md:border-r">
					<span
						class="absolute left-5 top-4 text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
					>
						Duration
					</span>

					<select
						value={duration}
						onchange={(event) =>
							setDuration(
								(event.currentTarget as HTMLSelectElement).value
							)}
						class="h-20 w-full appearance-none bg-background px-5 pb-0 pt-7 text-sm outline-none transition-colors focus:bg-muted/20"
					>
						<option value="all">Any duration</option>

						{#each durations as item}
							<option value={item}>{item}</option>
						{/each}
					</select>

					<ChevronDown
						class="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
					/>
				</label>

				<!-- Current selection -->
				<div class="flex h-20 items-center justify-between px-5">
					<div>
						<p
							class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
						>
							Current level
						</p>

						<p class="mt-1 text-sm font-medium">
							{level === 'all' ? 'All levels' : level}
						</p>
					</div>

					<span class="font-mono text-xs text-muted-foreground">
						{filteredProgrammes.length.toString().padStart(2, '0')}
					</span>
				</div>
			</div>
		{/if}

		<!-- Active filters -->
		{#if hasFilters}
			<div class="flex flex-wrap gap-2 border-t px-4 py-3 md:px-6">
				{#if search}
					<button
						type="button"
						onclick={() => (search = '')}
						class="group inline-flex items-center gap-2 border px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-muted"
					>
						Search: "{search}"
						<X class="size-3" />
					</button>
				{/if}

				{#if level !== 'all'}
					<button
						type="button"
						onclick={() => setLevel('all')}
						class="group inline-flex items-center gap-2 border px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-muted"
					>
						{level}
						<X class="size-3" />
					</button>
				{/if}

				{#if faculty !== 'all'}
					<button
						type="button"
						onclick={() => setFaculty('all')}
						class="group inline-flex items-center gap-2 border px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-muted"
					>
						{faculty}
						<X class="size-3" />
					</button>
				{/if}

				{#if duration !== 'all'}
					<button
						type="button"
						onclick={() => setDuration('all')}
						class="group inline-flex items-center gap-2 border px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-muted"
					>
						{duration}
						<X class="size-3" />
					</button>
				{/if}
			</div>
		{/if}
	</div>

	<!-- =========================================================
	     RESULT HEADER
	========================================================= -->
	<div
		class="grid border-b py-4 md:grid-cols-[80px_1fr_220px_120px_48px] md:items-center md:gap-5"
	>
		<div class="hidden md:block">
			<span
				class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
			>
				No.
			</span>
		</div>

		<div>
			<span
				class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
			>
				Programme
			</span>
		</div>

		<div class="hidden md:block">
			<span
				class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
			>
				Faculty
			</span>
		</div>

		<div class="hidden md:block">
			<span
				class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
			>
				Duration
			</span>
		</div>
	</div>

	<!-- =========================================================
	     PROGRAMMES
	========================================================= -->
	{#if paginatedProgrammes.length > 0}
		<div>
			{#each paginatedProgrammes as programme, index (programme.id)}
				<a
					href={`/academics/programmes/${programme.slug}`}
					class="group relative grid border-b py-7 transition-colors hover:bg-muted/30 md:grid-cols-[80px_1fr_220px_120px_48px] md:items-center md:gap-5 md:py-8"
				>
					<!-- Number -->
					<div class="hidden md:block">
						<span
							class="font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground"
						>
							{((currentPage - 1) * perPage + index + 1)
								.toString()
								.padStart(2, '0')}
						</span>
					</div>

					<!-- Main programme information -->
					<div class="min-w-0">
						<div class="mb-3 flex items-center gap-3">
							<span
								class="font-mono text-[9px] text-muted-foreground md:hidden"
							>
								{((currentPage - 1) * perPage + index + 1)
									.toString()
									.padStart(2, '0')}
							</span>

							<span
								class="text-[9px] font-bold uppercase tracking-[0.12em] text-primary"
							>
								{programme.level}
							</span>
						</div>

						<h3
							class="max-w-3xl text-xl font-semibold tracking-[-0.03em] transition-transform duration-200 group-hover:translate-x-1 md:text-2xl"
						>
							{programme.title}
						</h3>

						<p
							class="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground"
						>
							{programme.description}
						</p>

						<!-- Mobile metadata -->
						<div
							class="mt-5 flex flex-wrap gap-x-5 gap-y-2 md:hidden"
						>
							<span
								class="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground"
							>
								{programme.faculty}
							</span>

							<span
								class="font-mono text-[9px] text-muted-foreground"
							>
								{programme.duration}
							</span>
						</div>
					</div>

					<!-- Faculty -->
					<div class="hidden md:block">
						<p
							class="max-w-[190px] text-xs leading-5 text-muted-foreground"
						>
							{programme.faculty}
						</p>
					</div>

					<!-- Duration -->
					<div class="hidden md:block">
						<p class="font-mono text-xs">
							{programme.duration}
						</p>
					</div>

					<!-- Arrow -->
					<div class="hidden md:flex md:justify-end">
						<div
							class="flex size-9 items-center justify-center border transition-all duration-200 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
						>
							<ArrowUpRight
								class="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</div>
					</div>

					<!-- Editorial hover marker -->
					<div
						class="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full"
					></div>
				</a>
			{/each}
		</div>

		<!-- =====================================================
		     PAGINATION
		===================================================== -->
		<div class="flex flex-col gap-5 border-b py-6 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<p class="font-mono text-xs">
					{startIndex().toString().padStart(2, '0')}
					–
					{endIndex().toString().padStart(2, '0')}
				</p>

				<p
					class="mt-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
				>
					Showing programmes
				</p>
			</div>

			{#if totalPages > 1}
				<ProgrammePagination
					bind:currentPage
					count={filteredProgrammes.length}
					{perPage}
				/>
			{/if}
		</div>
	{:else}
		<!-- Empty -->
		<div class="border-b py-24 text-center md:py-32">
			<p
				class="font-mono text-5xl tracking-[-0.06em] text-muted-foreground/40"
			>
				00
			</p>

			<h3 class="mt-5 text-xl font-semibold tracking-tight">
				No programmes found.
			</h3>

			<p
				class="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground"
			>
				Your current search and filters did not return any programmes.
				Try broadening your search.
			</p>

			<button
				type="button"
				onclick={clearFilters}
				class="mt-7 inline-flex h-10 items-center border bg-foreground px-5 text-[9px] font-bold uppercase tracking-[0.12em] text-background transition-colors hover:bg-primary hover:text-primary-foreground"
			>
				Clear all filters
			</button>
		</div>
	{/if}

	<!-- =========================================================
	     CATALOGUE FOOTER
	========================================================= -->
	<div class="grid border-b md:grid-cols-3">
		<div class="border-b p-6 md:border-b-0 md:border-r md:p-7">
			<p class="font-mono text-3xl tracking-[-0.05em]">
				{programmes.length.toString().padStart(2, '0')}
			</p>

			<p
				class="mt-3 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
			>
				Academic programmes
			</p>
		</div>

		<div class="border-b p-6 md:border-b-0 md:border-r md:p-7">
			<p class="font-mono text-3xl tracking-[-0.05em]">
				{levels.length.toString().padStart(2, '0')}
			</p>

			<p
				class="mt-3 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
			>
				Levels of study
			</p>
		</div>

		<div class="p-6 md:p-7">
			<p class="font-mono text-3xl tracking-[-0.05em]">
				{faculties.length.toString().padStart(2, '0')}
			</p>

			<p
				class="mt-3 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
			>
				Academic faculties
			</p>
		</div>
	</div>
</div>
