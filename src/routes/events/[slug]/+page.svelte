<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import Clock from '@lucide/svelte/icons/clock';
	import MapPin from '@lucide/svelte/icons/map-pin';

	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import Breadcrumbs from '$lib/components/shared/Breadcrumbs.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { event } = data;
</script>

<svelte:head>
	<title>{event.title} | Multimedia University of Kenya</title>
	<meta name="description" content={event.description} />
</svelte:head>

<div class="container mx-auto px-4 pt-6">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/' },
			{ label: 'Events', href: '/events' },
			{ label: event.title }
		]}
	/>
</div>

<PageHero
	title={event.title}
	subtitle={event.category}
/>

<main class="container mx-auto px-4 py-12">
	<div class="grid gap-12 lg:grid-cols-3">
		<!-- Main content -->
		<article class="space-y-8 lg:col-span-2">
			<div>
				<Badge variant="secondary">{event.category}</Badge>

				<h2 class="mt-4 text-2xl font-bold tracking-tight">
					About This Event
				</h2>

				<p class="mt-4 text-lg leading-7 text-muted-foreground">
					{event.description}
				</p>
			</div>

			<section>
				<h2 class="text-2xl font-bold tracking-tight">
					Event Details
				</h2>

				<p class="mt-4 leading-7 text-muted-foreground">
					{event.content}
				</p>
			</section>
		</article>

		<!-- Event information -->
		<aside>
			<Card.Root class="lg:sticky lg:top-24">
				<Card.Header>
					<Card.Title>Event Information</Card.Title>
					<Card.Description>
						Everything you need to know about this event.
					</Card.Description>
				</Card.Header>

				<Card.Content class="space-y-5">
					<div class="flex gap-3">
						<CalendarDays class="mt-0.5 size-5 shrink-0 text-primary" />

						<div>
							<p class="text-sm font-medium text-muted-foreground">
								Date
							</p>
							<p class="mt-1 font-medium">{event.date}</p>
						</div>
					</div>

					<div class="flex gap-3">
						<Clock class="mt-0.5 size-5 shrink-0 text-primary" />

						<div>
							<p class="text-sm font-medium text-muted-foreground">
								Time
							</p>
							<p class="mt-1 font-medium">{event.time}</p>
						</div>
					</div>

					<div class="flex gap-3">
						<MapPin class="mt-0.5 size-5 shrink-0 text-primary" />

						<div>
							<p class="text-sm font-medium text-muted-foreground">
								Location
							</p>
							<p class="mt-1 font-medium">{event.location}</p>
						</div>
					</div>
				</Card.Content>

				<Card.Footer>
					<Button href="/contact" variant="outline" class="w-full">
						Contact Us
					</Button>
				</Card.Footer>
			</Card.Root>
		</aside>
	</div>
</main>

<section class="container mx-auto px-4 pb-16">
	<CTASection
		eyebrow="More Events"
		title="Explore what's happening at MMU."
		description="Discover other upcoming events and activities across the university."
		primaryAction={{
			label: 'View All Events',
			href: '/events'
		}}
		secondaryAction={{
			label: 'Contact Us',
			href: '/contact'
		}}
	/>
</section>