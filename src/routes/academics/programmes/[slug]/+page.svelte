<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import Breadcrumbs from '$lib/components/shared/Breadcrumbs.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { programme } = data;
</script>

<svelte:head>
	<title>{programme.title} | Multimedia University of Kenya</title>
	<meta name="description" content={programme.description} />
</svelte:head>

<div class="container mx-auto px-4 pt-6">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/' },
			{ label: 'Academics', href: '/academics' },
			{ label: 'Programmes', href: '/academics/programmes' },
			{ label: programme.title }
		]}
	/>
</div>

<PageHero
	title={programme.title}
	subtitle={programme.faculty}
/>

<main class="container mx-auto px-4 py-12">
	<div class="grid gap-12 lg:grid-cols-3">
		<!-- Main content -->
		<div class="space-y-10 lg:col-span-2">
			<section>
				<h2 class="text-2xl font-bold tracking-tight">
					Programme Overview
				</h2>

				<p class="mt-4 leading-7 text-muted-foreground">
					{programme.overview}
				</p>
			</section>

			<section>
				<h2 class="text-2xl font-bold tracking-tight">
					Entry Requirements
				</h2>

				<ul class="mt-4 space-y-3">
					{#each programme.requirements as requirement}
						<li class="flex gap-3 text-muted-foreground">
							<span class="mt-2 size-1.5 shrink-0 rounded-full bg-primary"></span>
							<span>{requirement}</span>
						</li>
					{/each}
				</ul>
			</section>

			<section>
				<h2 class="text-2xl font-bold tracking-tight">
					Career Paths
				</h2>

				<div class="mt-4 flex flex-wrap gap-2">
					{#each programme.careerPaths as career}
						<Badge variant="secondary">{career}</Badge>
					{/each}
				</div>
			</section>
		</div>

		<!-- Programme information -->
		<aside>
			<Card.Root class="lg:sticky lg:top-24">
				<Card.Header>
					<Card.Title>Programme Information</Card.Title>
					<Card.Description>
						Key details about this programme.
					</Card.Description>
				</Card.Header>

				<Card.Content class="space-y-6">
					<div>
						<p class="text-sm font-medium text-muted-foreground">
							Degree Type
						</p>
						<p class="mt-1 font-semibold">
							{programme.degree}
						</p>
					</div>

					<div>
						<p class="text-sm font-medium text-muted-foreground">
							Faculty
						</p>
						<p class="mt-1 font-semibold">
							{programme.faculty}
						</p>
					</div>

					<div>
						<p class="text-sm font-medium text-muted-foreground">
							Duration
						</p>
						<p class="mt-1 font-semibold">
							{programme.duration}
						</p>
					</div>
				</Card.Content>

				<Card.Footer>
					<Button href="/admissions/how-to-apply" class="w-full">
						Apply Now
						<ArrowRight />
					</Button>
				</Card.Footer>
			</Card.Root>
		</aside>
	</div>
</main>

<section class="container mx-auto px-4 pb-16">
	<CTASection
		eyebrow="Next Step"
		title="Ready to apply?"
		description="Learn more about the application process and admission requirements."
		primaryAction={{
			label: 'How to Apply',
			href: '/admissions/how-to-apply'
		}}
		secondaryAction={{
			label: 'View All Programmes',
			href: '/academics/programmes'
		}}
	/>
</section>