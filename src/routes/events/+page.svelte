<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';

	import { events } from '$lib/data/events';

	let { events: eventItems = events }: { events: any[] } = $props();

	const [highlightEvent, ...allOtherEvents] = eventItems;

	const pageSize = 6;

	let currentPage = $state(1);

	let totalPages = $derived(
		Math.ceil(allOtherEvents.length / pageSize)
	);

	let paginatedEvents = $derived(
		allOtherEvents.slice(
			(currentPage - 1) * pageSize,
			currentPage * pageSize
		)
	);


	function goToPage(page: number) {
		if (page < 1 || page > totalPages) return;

		currentPage = page;

		window.scrollTo({
			top: 500,
			behavior: 'smooth'
		});
	}
	$effect(() => {
	if (currentPage > totalPages) {
		currentPage = 1;
	}
});
</script>

<svelte:head>
	<title>Events | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Discover upcoming events, activities, and opportunities happening at Multimedia University of Kenya."
	/>
</svelte:head>


<PageHero
	eyebrow="University Events"
	title="What's happening."
	description="Stay connected with events, activities, and opportunities happening across the Multimedia University of Kenya community."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Events' }
	]}
/>



<main>


{#if highlightEvent}

<section class="border-b border-border/60">

	<div
		class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28"
	>

		<div
			class="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-20"
		>


			<div>

				<p
					class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent"
				>

					<span class="h-px w-5 bg-accent"></span>

					Featured Event

				</p>



				<h2
					class="mt-6 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-foreground sm:text-6xl"
				>
					{highlightEvent.title}
				</h2>



				<p
					class="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
				>
					{highlightEvent.description ??
						highlightEvent.summary ??
						'Join us for this upcoming university event.'}
				</p>



				<a
					href="/events/{highlightEvent.slug ?? highlightEvent.id ?? '0'}"
					class="group mt-8 inline-flex h-11 items-center gap-3 bg-primary px-6 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
				>

					View event details


					<ArrowUpRight
						class="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					/>

				</a>


			</div>




			<div
				class="border-l border-border/60 pl-6 sm:pl-8"
			>


				<div
					class="border-b border-border/60 pb-6"
				>

					<p
						class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
					>
						Date
					</p>


					<p
						class="mt-3 font-mono text-sm text-foreground"
					>
						{highlightEvent.date ?? 'Upcoming'}
					</p>


				</div>



				<div
					class="border-b border-border/60 py-6"
				>

					<p
						class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
					>
						Category
					</p>


					<p
						class="mt-3 text-sm font-semibold uppercase tracking-wide text-foreground"
					>
						{highlightEvent.category ?? 'University Event'}
					</p>

				</div>



				<div
					class="pt-6"
				>

					<p
						class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
					>
						Location
					</p>


					<p
						class="mt-3 text-sm font-semibold uppercase tracking-wide text-foreground"
					>
						{highlightEvent.location ?? 'Main Campus'}
					</p>


				</div>


			</div>


		</div>

	</div>

</section>

{/if}
<!-- =========================================================
     UPCOMING EVENTS
========================================================= -->

<section class="border-b border-border/60">

	<div
		class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-24"
	>


		<div
			class="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20"
		>


			<div>

				<p
					class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent"
				>

					<span class="h-px w-5 bg-accent"></span>

					Event calendar

				</p>



				<h2
					class="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-4xl"
				>
					Upcoming activities.
				</h2>



				<p
					class="mt-5 max-w-[240px] text-sm leading-7 text-muted-foreground"
				>
					Explore university events, activities and opportunities to engage with the MMU community.
				</p>


			</div>




			<div>


				{#if allOtherEvents.length > 0}

	<div class="border-t border-border/60">

		{#each paginatedEvents as event, index (event.id ?? index)}

<a
	href="/events/{event.slug ?? event.id ?? index + 1}"
	class="group relative grid gap-6 border-b border-border/60 py-8 transition-colors sm:grid-cols-[72px_1fr_150px] sm:items-start"
>

	<!-- Number -->
	<div>
		<span class="font-mono text-xs font-bold text-primary">
			{((currentPage - 1) * pageSize + index + 1)
				.toString()
				.padStart(2, '0')}
		</span>
	</div>


	<!-- Content -->
	<div>

		<div class="flex flex-wrap items-center gap-3">

			{#if event.category}
				<span
					class="text-[9px] font-bold uppercase tracking-[0.14em] text-accent"
				>
					{event.category}
				</span>
			{/if}

		</div>


		<h3
			class="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground transition-colors group-hover:text-primary sm:text-2xl"
		>
			{event.title}
		</h3>


		<p
			class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground"
		>
			{event.description ??
				event.summary ??
				'Discover more details about this university event.'}
		</p>


		<div class="mt-5 flex flex-wrap gap-x-5 gap-y-2">

			{#if event.location}
				<span
					class="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
				>
					{event.location}
				</span>
			{/if}


			{#if event.date}
				<span
					class="font-mono text-[9px] text-muted-foreground"
				>
					{event.date}
				</span>
			{/if}

		</div>

	</div>



	<!-- Date + arrow -->
	<div
		class="hidden sm:flex sm:flex-col sm:items-end sm:justify-between"
	>

		{#if event.date}
			<span class="font-mono text-xs text-foreground">
				{event.date}
			</span>
		{/if}


		<div
			class="mt-8 flex size-9 items-center justify-center border border-border/60 transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
		>
			<ArrowUpRight
				class="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
			/>
		</div>

	</div>


	<!-- Hover line -->
	<div
		class="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
	></div>


</a>

{/each}

	</div>


	<!-- Pagination -->
	{#if totalPages > 1}

		<div
			class="flex items-center justify-between border-b border-border/60 px-6 py-8 lg:px-10"
		>

			<button
				type="button"
				onclick={() => goToPage(currentPage - 1)}
				disabled={currentPage === 1}
				class="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground hover:text-primary disabled:opacity-30"
			>
				← Previous
			</button>


			<div class="flex items-center gap-2">

				{#each Array(totalPages) as _, page}

					<button
						type="button"
						onclick={() => goToPage(page + 1)}
						class="
							flex size-9 items-center justify-center
							border text-[10px] font-bold uppercase tracking-[0.12em]
							transition-colors
							{currentPage === page + 1
								? 'border-primary bg-primary text-primary-foreground'
								: 'border-border/60 text-muted-foreground hover:border-primary hover:text-primary'}
						"
					>
						{page + 1}
					</button>

				{/each}

			</div>


			<button
				type="button"
				onclick={() => goToPage(currentPage + 1)}
				disabled={currentPage === totalPages}
				class="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground hover:text-primary disabled:opacity-30"
			>
				Next →
			</button>

		</div>

	{/if}


{:else}

	<div class="border-t border-border/60 py-20 text-center">

		<p class="font-mono text-5xl tracking-[-0.06em] text-muted-foreground/40">
			00
		</p>

		<h3 class="mt-5 text-xl font-semibold tracking-tight text-foreground">
			No upcoming events.
		</h3>

		<p class="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
			There are currently no scheduled events. Please check back later.
		</p>

	</div>

{/if}


			</div>



		</div>


	</div>

</section>
<!-- =========================================================
     FINAL CTA
========================================================= -->

<section>

	<div
		class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-32"
	>

		<CTASection
			eyebrow="Stay Connected"
			title="Be part of university life."
			description="Discover events, activities and opportunities to connect with students, staff and the wider MMU community."
			primaryAction={{
				label: 'Explore admissions',
				href: '/admissions'
			}}
			secondaryAction={{
				label: 'Contact us',
				href: '/contact'
			}}
		/>

	</div>

</section>


</main>