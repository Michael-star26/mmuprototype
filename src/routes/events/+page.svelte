<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';

	import { Button } from '$lib/components/ui/button';

	import EventCard from '$lib/components/shared/EventCard.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';

	import { events } from '$lib/data/events';
</script>

<svelte:head>
	<title>Events | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Discover upcoming events, activities, and opportunities at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	title="Events"
	subtitle="What's Happening"
/>

<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="University Events"
		title="Upcoming Events"
		description="Stay connected with events, activities, and opportunities happening across the university."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each events as event}
			<EventCard {event} />
		{/each}
	</div>
</section>

<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-12">
		<div
			class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
		>
			<div>
				<p class="text-sm font-semibold uppercase tracking-wider text-primary">
					Stay Connected
				</p>

				<h2 class="mt-1 text-xl font-bold tracking-tight">
					Don't miss what's happening at MMU.
				</h2>
			</div>

			<Button href="/contact" variant="outline">
				Contact Us
				<CalendarDays />
			</Button>
		</div>
	</div>
</section>