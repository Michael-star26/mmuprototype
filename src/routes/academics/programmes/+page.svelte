<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Button } from '$lib/components/ui/button';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import ProgrammeCard from '$lib/components/shared/ProgrammeCard.svelte';

	import { programmes } from '$lib/data/programmes';
</script>

<svelte:head>
	<title>Academic Programmes | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Explore academic programmes at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	title="Academic Programmes"
	subtitle="Find Your Path"
/>

<section class="container mx-auto px-4 py-16">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-2xl font-bold tracking-tight md:text-3xl">
			Explore Our Programmes
		</h2>

		<p class="mt-3 text-muted-foreground">
			Explore our range of undergraduate programmes and find an area of study
			that matches your interests and career goals.
		</p>
	</div>

	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each programmes as programme}
			<ProgrammeCard {programme} />
		{/each}
	</div>
</section>

<section class="container mx-auto px-4 pb-16">
	<CTASection
		eyebrow="Admissions"
		title="Ready to take the next step?"
		description="Explore admission requirements and find out how to begin your application."
		primaryAction={{
			label: 'View Admissions',
			href: '/admissions'
		}}
		secondaryAction={{
			label: 'Contact Us',
			href: '/contact'
		}}
	/>
</section>