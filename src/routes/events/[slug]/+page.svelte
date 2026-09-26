<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import Clock from '@lucide/svelte/icons/clock';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Button } from '$lib/components/ui/button';
	import PageHero from '$lib/components/shared/PageHero.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { event } = data;
</script>

<svelte:head>
	<title>{event.title} | Multimedia University of Kenya</title>
	<meta name="description" content={event.description} />
</svelte:head>

<PageHero
	eyebrow={event.category}
	title={event.title}
	description={event.description}
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Events', href: '/events' },
		{ label: event.title }
	]}
/>

<div class="space-y-0">
	<!-- =========================================================
	     EVENT METADATA BAR
	========================================================= -->
	<div class="border-y border-border/60 bg-muted/20">
		<div class="container mx-auto px-5 py-6 lg:px-6">
			<div class="flex flex-wrap items-center justify-between gap-6">
				<div class="flex flex-wrap items-center gap-x-8 gap-y-3">
					<div class="flex items-center gap-2">
						<CalendarDays class="size-4 shrink-0 text-accent" />
						<div>
							<span class="text-[9px] font-bold uppercase tracking-[0.14em] text-accent block">Date</span>
							<span class="font-mono text-xs text-foreground mt-0.5 block">{event.date}</span>
						</div>
					</div>

					<div class="h-6 w-px bg-border/60"></div>

					<div class="flex items-center gap-2">
						<Clock class="size-4 shrink-0 text-accent" />
						<div>
							<span class="text-[9px] font-bold uppercase tracking-[0.14em] text-accent block">Time</span>
							<span class="font-mono text-xs text-foreground mt-0.5 block">{event.time}</span>
						</div>
					</div>

					<div class="h-6 w-px bg-border/60"></div>

					<div class="flex items-center gap-2">
						<MapPin class="size-4 shrink-0 text-accent" />
						<div>
							<span class="text-[9px] font-bold uppercase tracking-[0.14em] text-accent block">Location</span>
							<span class="text-xs font-semibold text-foreground mt-0.5 block uppercase tracking-wider">{event.location}</span>
						</div>
					</div>
				</div>

				<div>
					<span class="font-mono text-xs text-muted-foreground">
						Multimedia University Agenda
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- =========================================================
	     EVENT BODY CONTENT
	========================================================= -->
	<main class="container mx-auto px-5 py-16 lg:px-6">
		<div class="grid gap-12 lg:grid-cols-12">
			<!-- Main content column -->
			<article class="lg:col-span-8 space-y-8">
				<div class="border-b border-border/60 pb-12 space-y-6">
					<h2 class="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
						Event Overview
					</h2>

					<p class="text-base leading-relaxed text-muted-foreground">
						{event.description}
					</p>

					<div class="pt-6">
						<h3 class="text-xl font-semibold tracking-tight text-foreground mb-4">
							Event Details
						</h3>
						<p class="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
							{event.content}
						</p>
					</div>
				</div>
			</article>

			<!-- Sidebar side panel -->
			<aside class="lg:col-span-4">
				<div class="sticky top-24 rounded-xl border border-border/60 bg-muted/10 p-6 space-y-6">
					<div>
						<p class="text-[9px] font-bold uppercase tracking-[0.16em] text-accent flex items-center gap-2">
							<span class="h-px w-4 bg-accent"></span>
							Quick Overview
						</p>
						<h3 class="mt-3 text-lg font-semibold text-foreground">
							Schedule Info
						</h3>
					</div>

					<div class="space-y-4 pt-4 border-t border-border/60 text-sm">
						<div>
							<span class="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">Category</span>
							<p class="font-medium text-foreground mt-1 uppercase text-xs">{event.category}</p>
						</div>
						<div>
							<span class="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">Date & Time</span>
							<p class="font-medium text-foreground mt-1 font-mono text-xs">{event.date} at {event.time}</p>
						</div>
						<div>
							<span class="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">Venue</span>
							<p class="font-medium text-foreground mt-1 text-xs">{event.location}</p>
						</div>
					</div>

					<div class="pt-4 border-t border-border/60">
						<Button href="/contact" variant="outline" class="w-full text-xs font-bold uppercase tracking-wider">
							Contact Us
						</Button>
					</div>
				</div>
			</aside>
		</div>
	</main>
</div>

<!-- =========================================================
     STAY CONNECTED SECTION
========================================================= -->
<section class="border-t border-border/60 bg-muted/20">
	<div class="container mx-auto px-5 py-16 lg:px-6">
		<div class="grid gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
					<span class="h-px w-3 bg-accent"></span>
					More Events
				</p>

				<h2 class="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Explore what's happening at MMU.
				</h2>

				<p class="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xl">
					Discover other upcoming events and activities across the university.
				</p>
			</div>

			<div class="flex flex-wrap gap-3 lg:justify-end">
				<Button
					href="/events"
					variant="outline"
					class="border-border text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground h-11 px-6 text-xs font-bold uppercase tracking-wider"
				>
					View All Events
					<ArrowUpRight class="ml-2 size-4" />
				</Button>

				<Button
					href="/contact"
					class="bg-primary text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground h-11 px-6 text-xs font-bold uppercase tracking-wider"
				>
					Contact Us
					<ArrowRight class="ml-2 size-4" />
				</Button>
			</div>
		</div>
	</div>
</section>