<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Building2 from '@lucide/svelte/icons/building-2';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';

	import { Button } from '$lib/components/ui/button';

	import Breadcrumbs from '$lib/components/shared/Breadcrumbs.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<svelte:head>
	<title>Schools | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Explore the schools and academic areas at Multimedia University of Kenya."
	/>
</svelte:head>

<div class="container mx-auto px-4 pt-6">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/' },
			{ label: 'University', href: '/university' },
			{ label: 'Schools' }
		]}
	/>
</div>

<PageHero
	title="Schools"
	subtitle="Our Academic Community"
/>

<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="Academic Schools"
		title="Explore Our Schools"
		description="Discover the academic schools that form part of the university community."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		<div class="rounded-lg border bg-background p-6">
			<Building2 class="size-8 text-primary" />

			<h2 class="mt-5 text-lg font-semibold">
				School Name
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Explore programmes, departments, and academic opportunities within
				this school.
			</p>

			<Button href="/academics" variant="outline" class="mt-5">
				Explore
				<ArrowRight />
			</Button>
		</div>

		<div class="rounded-lg border bg-background p-6">
			<GraduationCap class="size-8 text-primary" />

			<h2 class="mt-5 text-lg font-semibold">
				School Name
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Explore programmes, departments, and academic opportunities within
				this school.
			</p>

			<Button href="/academics" variant="outline" class="mt-5">
				Explore
				<ArrowRight />
			</Button>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 pb-16">
	<CTASection
		eyebrow="Academic Programmes"
		title="Looking for a programme?"
		description="Explore the academic programmes available at the university."
		primaryAction={{ label: 'View Programmes', href: '/academics/programmes' }}
		secondaryAction={{ label: 'Contact Us', href: '/contact' }}
	/>
</section>