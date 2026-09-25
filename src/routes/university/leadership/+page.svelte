<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import BriefcaseBusiness from '@lucide/svelte/icons/briefcase-business';
	import Users from '@lucide/svelte/icons/users';

	import { Button } from '$lib/components/ui/button';

	import Breadcrumbs from '$lib/components/shared/Breadcrumbs.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<svelte:head>
	<title>University Leadership | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Meet the leadership of Multimedia University of Kenya."
	/>
</svelte:head>

<div class="container mx-auto px-4 pt-6">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/' },
			{ label: 'University', href: '/university' },
			{ label: 'Leadership' }
		]}
	/>
</div>

<PageHero
	title="University Leadership"
	subtitle="Leading the University Forward"
/>

<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="University Leadership"
		title="Meet Our Leadership"
		description="Learn about the people responsible for guiding the university and supporting its academic and institutional mission."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		<div class="overflow-hidden rounded-lg border bg-background">
			<div class="flex aspect-[4/3] items-center justify-center bg-muted">
				<Users class="size-12 text-muted-foreground" />
			</div>

			<div class="p-6">
				<p class="text-sm font-medium text-primary">
					Position
				</p>

				<h2 class="mt-1 text-xl font-semibold">
					Leader Name
				</h2>

				<p class="mt-3 text-sm leading-6 text-muted-foreground">
					Leadership profile information will appear here.
				</p>
			</div>
		</div>

		<div class="overflow-hidden rounded-lg border bg-background">
			<div class="flex aspect-[4/3] items-center justify-center bg-muted">
				<BriefcaseBusiness class="size-12 text-muted-foreground" />
			</div>

			<div class="p-6">
				<p class="text-sm font-medium text-primary">
					Position
				</p>

				<h2 class="mt-1 text-xl font-semibold">
					Leader Name
				</h2>

				<p class="mt-3 text-sm leading-6 text-muted-foreground">
					Leadership profile information will appear here.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 pb-16">
	<CTASection
		eyebrow="About MMU"
		title="Learn more about the university."
		description="Explore the university, its schools, academic programmes, and community."
		primaryAction={{ label: 'About MMU', href: '/university' }}
		secondaryAction={{ label: 'Explore Schools', href: '/university/schools' }}
	/>
</section>