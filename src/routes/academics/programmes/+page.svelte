<script lang="ts">
	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import ProgrammeCard from '$lib/components/shared/ProgrammeCard.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';

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
	eyebrow="Academics"
	title="Find Your Path"
	description="Explore academic programmes at Multimedia University of Kenya and find an area of study that matches your interests and career goals."
	actions={[
		{
			label: 'Admissions',
			href: '/admissions'
		},
		{
			label: 'Contact Us',
			href: '/contact',
			variant: 'outline'
		}
	]}
/>

<section class="container mx-auto px-4 py-16 md:py-20">
	<SectionHeading
		align="center"
		eyebrow="Academic Programmes"
		title="Explore Our Programmes"
		description="Explore our range of undergraduate programmes and discover opportunities to build knowledge, practical skills, and career-ready expertise."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each programmes as programme}
			<ProgrammeCard {programme} />
		{/each}
	</div>
</section>

<section class="container mx-auto px-4 pb-16 md:pb-20">
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