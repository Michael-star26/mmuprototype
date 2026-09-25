<script lang="ts">
	import Newspaper from '@lucide/svelte/icons/newspaper';

	import { Button } from '$lib/components/ui/button';

	import NewsCard from '$lib/components/shared/NewsCard.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';

	import { news } from '$lib/data/news';
</script>

<svelte:head>
	<title>News | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Read the latest news, announcements, achievements, and stories from Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	title="News"
	subtitle="MMU News & Updates"
/>

<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="Latest News"
		title="What's Happening at MMU"
		description="Stay informed about the latest developments, achievements, announcements, and stories from across the university."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each news as article}
			<NewsCard news={article} />
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
					Stay Informed
				</p>

				<h2 class="mt-1 text-xl font-bold tracking-tight">
					Keep up with MMU.
				</h2>
			</div>

			<Button href="/contact" variant="outline">
				Contact Us
				<Newspaper />
			</Button>
		</div>
	</div>
</section>