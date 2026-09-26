<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Button } from '$lib/components/ui/button';
	import PageHero from '$lib/components/shared/PageHero.svelte';

	import { events } from '$lib/data/events';

	let { events: eventItems = events }: { events: any[] } = $props();

	const [highlightEvent, ...otherEvents] = eventItems;
	const totalEvents = eventItems.length;
</script>

<svelte:head>
	<title>Events | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Discover upcoming events, activities, and opportunities at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="University Events"
	title="What's Happening"
	description="Stay connected with events, activities, and opportunities happening across the university."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Events' }
	]}
/>

<div class="space-y-0">
	<!-- =========================================================
	     FEATURED EVENT HIGHLIGHT SECTION
	========================================================= -->
	{#if highlightEvent}
		<div class="border-b border-border/60 bg-muted/20">
			<div class="grid lg:grid-cols-[1fr_320px] lg:min-h-[320px]">
				<!-- Main highlight details -->
				<div class="flex flex-col justify-between border-b border-border/60 p-6 lg:border-b-0 lg:border-r lg:border-border/60 lg:p-12">
					<div>
						<div class="flex items-center gap-3">
							<span class="text-[10px] font-bold uppercase tracking-[0.18em] text-accent flex items-center gap-2">
								<span class="h-px w-5 bg-accent"></span>
								Featured Event
							</span>

							<span class="h-px w-8 bg-border/60"></span>

							{#if highlightEvent.date}
								<span class="font-mono text-[10px] text-muted-foreground">
									{highlightEvent.date}
								</span>
							{/if}
						</div>

						<h2 class="mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl text-foreground">
							{highlightEvent.title}
						</h2>

						<p class="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
							{highlightEvent.description ?? highlightEvent.summary ?? 'Join us for this upcoming institutional event at Multimedia University of Kenya.'}
						</p>
					</div>

					<div class="mt-8">
						<a
							href="/events/{highlightEvent.slug ?? highlightEvent.id ?? '0'}"
							class="group inline-flex h-12 items-center justify-between gap-6 bg-primary px-6 text-[10px] font-bold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground shadow-sm rounded-md"
						>
							View Event Details
							<ArrowUpRight class="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
					</div>
				</div>

				<!-- Highlight side panel -->
				<div class="flex flex-col justify-between p-7 lg:p-8">
					<div>
						<p class="text-[9px] font-bold uppercase tracking-[0.16em] text-accent flex items-center gap-2">
							<span class="h-px w-4 bg-accent"></span>
							Schedule Focus
						</p>

						<p class="mt-4 text-sm leading-6 text-muted-foreground uppercase tracking-wider font-semibold">
							{highlightEvent.category ?? highlightEvent.location ?? 'Campus Wide'}
						</p>
					</div>

					<div class="border-t border-border/60 pt-6 mt-6">
						<span class="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
							Multimedia University Agenda
						</span>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- =========================================================
	     RESULT HEADER
	========================================================= -->
	<div class="grid border-b border-border/60 py-4 md:grid-cols-[80px_1fr_220px_120px_48px] md:items-center md:gap-5 px-6 lg:px-10">
		<div class="hidden md:block">
			<span class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
				No.
			</span>
		</div>

		<div>
			<span class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
				Event
			</span>
		</div>

		<div class="hidden md:block">
			<span class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
				Location / Type
			</span>
		</div>

		<div class="hidden md:block">
			<span class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
				Date
			</span>
		</div>
	</div>

	<!-- =========================================================
	     EVENTS LIST GRID
	========================================================= -->
	{#if otherEvents.length > 0}
		<div class="px-6 lg:px-10">
			{#each otherEvents as event, index (event.id ?? index)}
				<a
					href="/events/{event.slug ?? event.id ?? index + 1}"
					class="group relative grid border-b border-border/60 py-7 transition-colors hover:bg-muted/30 md:grid-cols-[80px_1fr_220px_120px_48px] md:items-center md:gap-5 md:py-8"
				>
					<!-- Number -->
					<div class="hidden md:block">
						<span class="font-mono text-sm text-muted-foreground transition-colors group-hover:text-primary">
							{(index + 1).toString().padStart(2, '0')}
						</span>
					</div>

					<!-- Main event information -->
					<div class="min-w-0">
						<div class="mb-3 flex items-center gap-3">
							<span class="font-mono text-[9px] text-muted-foreground md:hidden">
								{(index + 1).toString().padStart(2, '0')}
							</span>

							{#if event.category}
								<span class="text-[9px] font-bold uppercase tracking-[0.12em] text-accent">
									{event.category}
								</span>
							{/if}
						</div>

						<h3 class="max-w-3xl text-xl font-semibold tracking-[-0.03em] text-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary md:text-2xl">
							{event.title}
						</h3>

						<p class="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground line-clamp-2">
							{event.description ?? event.summary ?? 'Discover more details regarding this university event or activity.'}
						</p>

						<!-- Mobile metadata -->
						<div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 md:hidden">
							{#if event.location}
								<span class="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
									{event.location}
								</span>
							{/if}

							{#if event.date}
								<span class="font-mono text-[9px] text-muted-foreground">
									{event.date}
								</span>
							{/if}
						</div>
					</div>

					<!-- Location column -->
					<div class="hidden md:block">
						<p class="max-w-[190px] text-xs leading-5 text-muted-foreground uppercase tracking-wider font-semibold">
							{event.location ?? event.category ?? 'Main Campus'}
						</p>
					</div>

					<!-- Date column -->
					<div class="hidden md:block">
						<p class="font-mono text-xs text-foreground">
							{event.date ?? 'Upcoming'}
						</p>
					</div>

					<!-- Arrow -->
					<div class="hidden md:flex md:justify-end">
						<div class="flex size-9 items-center justify-center border border-border/60 transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
							<ArrowUpRight class="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</div>
					</div>

					<!-- Editorial hover marker -->
					<div class="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"></div>
				</a>
			{/each}
		</div>
	{:else}
		<div class="border-b border-border/60 py-24 text-center md:py-32">
			<p class="font-mono text-5xl tracking-[-0.06em] text-muted-foreground/40">
				00
			</p>

			<h3 class="mt-5 text-xl font-semibold tracking-tight text-foreground">
				No upcoming events found.
			</h3>

			<p class="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
				There are no scheduled events at this moment. Please check back later.
			</p>
		</div>
	{/if}
</div>

<!-- =========================================================
     STAY CONNECTED SECTION
========================================================= -->
<section class="border-b border-border/60 bg-muted/20">
	<div class="container mx-auto px-5 py-16 lg:px-6">
		<div class="grid gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
					<span class="h-px w-3 bg-accent"></span>
					Stay Connected
				</p>

				<h2 class="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Don't miss what's happening at MMU.
				</h2>

				<p class="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xl">
					Explore the university and discover more opportunities to get involved.
				</p>
			</div>

			<div class="flex flex-wrap gap-3 lg:justify-end">
				<Button
					href="/contact"
					variant="outline"
					class="border-border text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground h-11 px-6 text-xs font-bold uppercase tracking-wider"
				>
					Contact Us
				</Button>

				<Button
					href="/admissions"
					class="bg-primary text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground h-11 px-6 text-xs font-bold uppercase tracking-wider"
				>
					Explore Admissions
					<CalendarDays class="ml-2 size-4" />
				</Button>
			</div>
		</div>
	</div>
</section>