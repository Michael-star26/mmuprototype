<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Button } from '$lib/components/ui/button';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import ProgrammeCard from '$lib/components/shared/ProgrammeCard.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';

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
	title="Academics"
	subtitle="Learn. Explore. Grow."
/>

<section class="container mx-auto px-4 py-16">
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

<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-16">
		<SectionHeading
			eyebrow="More Than Classrooms"
			title="An Academic Community"
			description="Explore the faculties, research opportunities, and learning resources that support the student experience."
		/>

		<div class="mt-8 grid gap-6 md:grid-cols-3">
			<a
				href="/academics/faculties"
				class="rounded-lg border bg-background p-6 transition-colors hover:border-primary"
			>
				<h3 class="font-semibold">Faculties & Schools</h3>
				<p class="mt-2 text-sm text-muted-foreground">
					Explore our academic faculties, schools, and areas of specialization.
				</p>
			</a>

			<a
				href="/research"
				class="rounded-lg border bg-background p-6 transition-colors hover:border-primary"
			>
				<h3 class="font-semibold">Research</h3>
				<p class="mt-2 text-sm text-muted-foreground">
					Discover research, innovation, and opportunities to contribute to
					new knowledge.
				</p>
			</a>

			<a
				href="/admissions"
				class="rounded-lg border bg-background p-6 transition-colors hover:border-primary"
			>
				<h3 class="font-semibold">Admissions</h3>
				<p class="mt-2 text-sm text-muted-foreground">
					Find admission information and take the next step toward joining
					the university.
				</p>
			</a>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 py-16">
	<div
		class="flex flex-col gap-6 rounded-lg border bg-background p-8 md:flex-row md:items-center md:justify-between"
	>
		<div class="max-w-2xl">
			<p class="text-sm font-semibold uppercase tracking-wider text-primary">
				Ready to begin?
			</p>

			<h2 class="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
				Find the programme that's right for you.
			</h2>

			<p class="mt-3 text-muted-foreground">
				Review our programmes and admission information to plan your next
				step.
			</p>
		</div>

		<Button href="/admissions">
			Admissions
			<ArrowRight />
		</Button>
	</div>
</section>