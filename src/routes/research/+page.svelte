<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import FlaskConical from '@lucide/svelte/icons/flask-conical';
	import Lightbulb from '@lucide/svelte/icons/lightbulb';
	import Microscope from '@lucide/svelte/icons/microscope';

	import { Button } from '$lib/components/ui/button';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<svelte:head>
	<title>Research & Innovation | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Explore research, innovation, and opportunities to contribute to new knowledge at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Research & Innovation"
	title="Discover. Innovate. Impact."
	description="Explore research activities, innovation, and opportunities to contribute to solutions that address real-world challenges."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Research & Innovation' }
	]}
	actions={[
		{ label: 'Explore Academics', href: '/academics' },
		{ label: 'Contact Us', href: '/contact', variant: 'outline' }
	]}
/>

<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="Research at MMU"
		title="Advancing Knowledge Through Research"
		description="Explore research activities, innovation, and opportunities to contribute to solutions that address real-world challenges."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-3">
		<div class="rounded-lg border bg-background p-6">
			<FlaskConical class="size-8 text-primary" />

			<h2 class="mt-5 text-lg font-semibold">
				Research Areas
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Discover areas of research and academic inquiry across the university.
			</p>
		</div>

		<div class="rounded-lg border bg-background p-6">
			<Microscope class="size-8 text-primary" />

			<h2 class="mt-5 text-lg font-semibold">
				Research Centres
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Explore research centres, institutes, and collaborative initiatives.
			</p>
		</div>

		<div class="rounded-lg border bg-background p-6">
			<Lightbulb class="size-8 text-primary" />

			<h2 class="mt-5 text-lg font-semibold">
				Innovation
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				See how research and innovation can translate ideas into practical impact.
			</p>
		</div>
	</div>
</section>

<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-16">
		<div class="grid gap-10 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="text-sm font-semibold uppercase tracking-wider text-primary">
					Research Community
				</p>

				<h2 class="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
					Research is more than publications.
				</h2>

				<p class="mt-4 max-w-xl leading-7 text-muted-foreground">
					From undergraduate projects to collaborative research initiatives,
					students and researchers can contribute to new ideas, technologies,
					and solutions.
				</p>
			</div>

			<div class="flex flex-wrap gap-3 lg:justify-end">
				<Button href="/contact">
					Get Involved
					<ArrowRight class="ml-2 size-4" />
				</Button>

				<Button href="/academics" variant="outline">
					Explore Academics
				</Button>
			</div>
		</div>
	</div>
</section>