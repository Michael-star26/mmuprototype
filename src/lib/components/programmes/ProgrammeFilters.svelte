<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
	import X from '@lucide/svelte/icons/x';

	import { Button } from '$lib/components/ui/button';

	let {
		search = $bindable(''),
		level = $bindable('all'),
		faculty = $bindable('all'),
		duration = $bindable('all'),
		faculties = [],
		onToggleFilters
	}: {
		search?: string;
		level?: string;
		faculty?: string;
		duration?: string;
		faculties?: string[];
		onToggleFilters?: () => void;
	} = $props();

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
	<!-- Search & Filter Bar using a native input to guarantee deep navy theme styling -->
	<div class="flex flex-col gap-3 sm:flex-row sm:items-center">
		<div class="relative flex-1">
			<Search
				class="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary-foreground/70 z-10"
			/>

			<input
				type="text"
				bind:value={search}
				placeholder="Search programmes, disciplines or faculties"
				class="h-14 w-full rounded-md bg-primary text-primary-foreground placeholder:text-primary-foreground/60 border border-primary pl-11 pr-10 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm text-sm font-medium"
			/>

			{#if search}
				<button
					type="button"
					class="absolute right-3.5 top-1/2 -translate-y-1/2 text-primary-foreground/70 transition-colors hover:text-primary-foreground z-10"
					aria-label="Clear search"
					onclick={() => (search = '')}
				>
					<X class="size-4" />
				</button>
			{/if}
		</div>

		<Button
			variant="default"
			class="h-14 bg-primary text-primary-foreground border border-primary-foreground/20 px-6 text-xs font-bold uppercase tracking-wider gap-2 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors shadow-sm"
			onclick={onToggleFilters}
		>
			<SlidersHorizontal class="size-4" />
			Filters
		</Button>
	</div>

	<!-- Active Filter Status & Clear Option -->
	{#if hasFilters}
		<div class="flex items-center justify-between border-b border-border/40 pb-3 text-xs">
			<span class="text-muted-foreground font-medium">
				Active search or filters applied
			</span>
			<button
				type="button"
				class="font-semibold text-accent hover:underline inline-flex items-center gap-1"
				onclick={clearFilters}
			>
				<X class="size-3.5" />
				Clear all filters
			</button>
		</div>
	{/if}
</div>