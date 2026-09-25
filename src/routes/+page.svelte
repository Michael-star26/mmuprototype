<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';
	import Newspaper from '@lucide/svelte/icons/newspaper';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Button } from '$lib/components/ui/button';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import EventCard from '$lib/components/shared/EventCard.svelte';
	import NewsCard from '$lib/components/shared/NewsCard.svelte';
	import ProgrammeCard from '$lib/components/shared/ProgrammeCard.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import StatBlock from '$lib/components/shared/StatBlock.svelte';

	import { news } from '$lib/data/news';
	import { events } from '$lib/data/events';
	import { programmes } from '$lib/data/programmes';
</script>

<svelte:head>
	<title>Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Discover programmes, research, innovation, and opportunities at Multimedia University of Kenya."
	/>
</svelte:head>

<!-- Hero -->
<section class="border-b bg-muted/40">
	<div class="container mx-auto px-4 py-20 md:py-28">
		<div class="max-w-3xl">
			<p class="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
				Multimedia University of Kenya
			</p>

			<h1 class="text-4xl font-bold tracking-tight md:text-6xl">
				Shaping the future through knowledge, innovation and technology.
			</h1>

			<p class="mt-6 max-w-2xl text-lg text-muted-foreground">
				Explore programmes, research, innovation, and opportunities designed
				to prepare students for a changing world.
			</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<Button href="/admissions">
					Apply Now
					<ArrowRight />
				</Button>

				<Button href="/academics/programmes" variant="outline">
					Explore Programmes
				</Button>
			</div>
		</div>
	</div>
</section>

<!-- Stats -->
<section class="border-b">
	<div class="container mx-auto grid gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
		<StatBlock value="15,000+" label="Students" />
		<StatBlock value="40+" label="Academic Programmes" />
		<StatBlock value="10+" label="Research Centres" />
		<StatBlock value="30+" label="Years of Excellence" />
	</div>
</section>

<!-- Programmes -->
<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="Academics"
		title="Explore Our Programmes"
		description="Discover academic programmes designed to develop the skills, knowledge, and experience needed for today's world."
	/>

	<div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each programmes.slice(0, 3) as programme}
			<ProgrammeCard {programme} />
		{/each}
	</div>

	<div class="mt-8 text-center">
		<Button href="/academics/programmes" variant="outline">
			View All Programmes
			<ArrowRight />
		</Button>
	</div>
</section>

<!-- News -->
<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-16">
		<SectionHeading
			eyebrow="News & Updates"
			title="What's Happening at MMU"
			description="Stay informed about the latest developments, achievements, and stories from across the university."
		/>

		<div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each news.slice(0, 3) as article}
				<NewsCard news={article} />
			{/each}
		</div>

		<div class="mt-8 text-center">
			<Button href="/news" variant="outline">
				View All News
				<Newspaper />
			</Button>
		</div>
	</div>
</section>

<!-- Events -->
<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="Events"
		title="Upcoming Events"
		description="Connect, learn, and participate in events happening across the university."
	/>

	<div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each events.slice(0, 3) as event}
			<EventCard {event} />
		{/each}
	</div>

	<div class="mt-8 text-center">
		<Button href="/events" variant="outline">
			View All Events
			<CalendarDays />
		</Button>
	</div>
</section>

<!-- CTA -->
<section class="container mx-auto px-4 pb-16">
	<CTASection
		eyebrow="Start Your Journey"
		title="Ready to become part of MMU?"
		description="Explore our programmes, discover admission requirements, and take the next step toward your future."
		primaryAction={{
			label: 'Apply Now',
			href: '/admissions'
		}}
		secondaryAction={{
			label: 'Contact Us',
			href: '/contact'
		}}
	/>
</section>