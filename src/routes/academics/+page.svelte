<script lang="ts">
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import ProgrammeCard from '$lib/components/shared/ProgrammeCard.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';

	import { programmes } from '$lib/data/programmes';
</script>

<svelte:head>
	<title>Academics | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Explore academic programmes, faculties, and learning opportunities at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Academics"
	title="Learn. Explore. Grow."
	description="Explore academic programmes, learning opportunities, and the academic community at Multimedia University of Kenya."
	actions={[
		{
			label: 'Explore Programmes',
			href: '#programmes'
		},
		{
			label: 'Admissions',
			href: '/admissions',
			variant: 'outline'
		}
	]}
/>

<!-- Programmes -->
<section id="programmes" class="container mx-auto px-4 py-16 md:py-20">
	<SectionHeading
		eyebrow="Academic Programmes"
		title="Explore Our Programmes"
		description="Discover programmes designed to build practical knowledge, critical thinking, and career-ready skills."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each programmes as programme}
			<ProgrammeCard {programme} />
		{/each}
	</div>
</section>

<!-- Academic Community -->
<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-16 md:py-20">
		<SectionHeading
			eyebrow="More Than Classrooms"
			title="An Academic Community"
			description="Explore the schools, research opportunities, and resources that support the student experience."
		/>

		<div class="mt-8 grid gap-6 md:grid-cols-3">
			<a
				href="/university/schools"
				class="rounded-lg border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/30"
			>
				<h3 class="font-semibold">Schools & Faculties</h3>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">
					Explore our academic schools, faculties, and areas of specialization.
				</p>
			</a>

			<a
				href="/research"
				class="rounded-lg border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/30"
			>
				<h3 class="font-semibold">Research</h3>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">
					Discover research, innovation, and opportunities to contribute to
					new knowledge.
				</p>
			</a>

			<a
				href="/admissions"
				class="rounded-lg border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/30"
			>
				<h3 class="font-semibold">Admissions</h3>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">
					Find admission information and take the next step toward joining
					the university.
				</p>
			</a>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="container mx-auto px-4 py-16 md:py-20">
	<CTASection
		eyebrow="Ready to Begin?"
		title="Find the programme that's right for you."
		description="Review our programmes and admission information to plan your next step."
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