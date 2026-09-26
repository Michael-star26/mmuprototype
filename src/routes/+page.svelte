<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import Newspaper from '@lucide/svelte/icons/newspaper';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Button } from '$lib/components/ui/button';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import EventCard from '$lib/components/shared/EventCard.svelte';
	import NewsCard from '$lib/components/shared/NewsCard.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
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
<PageHero
	eyebrow="Multimedia University of Kenya"
	title="Shaping the future through knowledge, innovation and technology."
	description="Explore structured academic programmes, rigorous research centres, and career pathways designed to prepare professionals for complex, changing environments."
	actions={[
		{
			label: 'Apply Now',
			href: '/admissions'
		},
		{
			label: 'Explore Programmes',
			href: '/academics/programmes',
			variant: 'outline'
		}
	]}
/>

<!-- Stats -->
<section class="border-b bg-muted/10">
	<div
		class="container mx-auto grid grid-cols-2 divide-y divide-border border-x border-border lg:grid-cols-4 lg:divide-x lg:divide-y-0"
	>
		<div class="p-6 lg:p-8">
			<StatBlock value="15,000+" label="Students" />
		</div>

		<div class="p-6 lg:p-8">
			<StatBlock value="40+" label="Academic Programmes" />
		</div>

		<div class="p-6 lg:p-8">
			<StatBlock value="10+" label="Research Centres" />
		</div>

		<div class="p-6 lg:p-8">
			<StatBlock value="30+" label="Years of Excellence" />
		</div>
	</div>
</section>

<!-- Programmes -->
<section class="container mx-auto px-4 py-20">
	<div class="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
		<SectionHeading
			eyebrow="Academics"
			title="Explore Our Programmes"
			description="Discover academic programmes designed to develop practical skill sets and mastery."
		/>

		<Button
			href="/academics/programmes"
			variant="outline"
			class="self-start md:self-auto"
		>
			View All Programmes
			<ArrowRight class="ml-2 size-4" />
		</Button>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each programmes.slice(0, 3) as programme}
			<ProgrammeCard {programme} />
		{/each}
	</div>
</section>

<!-- News -->
<section class="border-y bg-muted/20">
	<div class="container mx-auto px-4 py-20">
		<div class="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
			<SectionHeading
				eyebrow="News & Updates"
				title="What's Happening at MMU"
				description="Stay informed about institutional developments, milestones, and campus reports."
			/>

			<Button
				href="/news"
				variant="outline"
				class="self-start md:self-auto"
			>
				View All News
				<Newspaper class="ml-2 size-4" />
			</Button>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each news.slice(0, 3) as article}
				<NewsCard news={article} />
			{/each}
		</div>
	</div>
</section>

<!-- Events -->
<section class="container mx-auto px-4 py-20">
	<div class="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
		<SectionHeading
			eyebrow="Events"
			title="Upcoming Events"
			description="Engage with academic lectures, institutional workshops, and campus activities."
		/>

		<Button
			href="/events"
			variant="outline"
			class="self-start md:self-auto"
		>
			View All Events
			<CalendarDays class="ml-2 size-4" />
		</Button>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each events.slice(0, 3) as event}
			<EventCard {event} />
		{/each}
	</div>
</section>

<!-- CTA -->
<section class="border-t bg-muted/10">
	<div class="container mx-auto px-4 py-20">
		<CTASection
			eyebrow="Start Your Journey"
			title="Ready to become part of MMU?"
			description="Review admission timelines, curriculum requirements, and application procedures."
			primaryAction={{
				label: 'Apply Now',
				href: '/admissions'
			}}
			secondaryAction={{
				label: 'Contact Us',
				href: '/contact'
			}}
		/>
	</div>
</section>