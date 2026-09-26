<script lang="ts">
	import BriefcaseBusiness from '@lucide/svelte/icons/briefcase-business';
	import Users from '@lucide/svelte/icons/users';

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

<PageHero
	eyebrow="The University"
	title="University Leadership"
	description="Meet the people responsible for guiding the university and supporting its academic and institutional mission."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'The University', href: '/university' },
		{ label: 'Leadership' }
	]}
/>

<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="University Leadership"
		title="Meet Our Leadership"
		description="Learn about the people responsible for guiding the university and supporting its academic and institutional mission."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		<div class="group overflow-hidden rounded-lg border border-border/60 bg-background transition-colors hover:border-accent/40">
			<div class="flex aspect-[4/3] items-center justify-center bg-muted/40 transition-colors group-hover:bg-muted/60">
				<Users class="size-12 text-muted-foreground group-hover:text-accent transition-colors" />
			</div>

			<div class="p-6">
				<p class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent flex items-center gap-2">
					<span class="h-px w-3 bg-accent"></span>
					Position
				</p>

				<h2 class="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
					Leader Name
				</h2>

				<p class="mt-3 text-sm leading-6 text-muted-foreground">
					Leadership profile information will appear here.
				</p>
			</div>
		</div>

		<div class="group overflow-hidden rounded-lg border border-border/60 bg-background transition-colors hover:border-accent/40">
			<div class="flex aspect-[4/3] items-center justify-center bg-muted/40 transition-colors group-hover:bg-muted/60">
				<BriefcaseBusiness class="size-12 text-muted-foreground group-hover:text-accent transition-colors" />
			</div>

			<div class="p-6">
				<p class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent flex items-center gap-2">
					<span class="h-px w-3 bg-accent"></span>
					Position
				</p>

				<h2 class="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
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