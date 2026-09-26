<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Building2 from '@lucide/svelte/icons/building-2';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';
	import Users from '@lucide/svelte/icons/users';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<svelte:head>
	<title>The University | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Learn more about Multimedia University of Kenya, its leadership, schools, and academic community."
	/>
</svelte:head>

<PageHero
	eyebrow="The University"
	title="Discover MMU"
	description="Learn more about Multimedia University of Kenya, its leadership, schools, and academic community."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'The University' }
	]}
	actions={[
		{ label: 'Explore Academics', href: '/academics' },
		{ label: 'Contact Us', href: '/contact', variant: 'outline' }
	]}
/>

<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="About the University"
		title="Get to Know MMU"
		description="Explore the university, its leadership, schools, and academic community."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-3">
		<a
			href="/university/leadership"
			class="group rounded-lg border border-border/60 bg-background p-6 transition-colors hover:border-accent/40 hover:bg-muted/30"
		>
			<div class="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
				<Users class="size-6" />
			</div>

			<h2 class="mt-5 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
				Leadership
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Meet the university leadership and learn about the people guiding MMU.
			</p>

			<span class="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
				Meet the Leadership
				<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
			</span>
		</a>

		<a
			href="/university/schools"
			class="group rounded-lg border border-border/60 bg-background p-6 transition-colors hover:border-accent/40 hover:bg-muted/30"
		>
			<div class="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
				<GraduationCap class="size-6" />
			</div>

			<h2 class="mt-5 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
				Schools
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Explore the schools and academic areas that make up the university.
			</p>

			<span class="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
				Explore Schools
				<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
			</span>
		</a>

		<a
			href="/academics"
			class="group rounded-lg border border-border/60 bg-background p-6 transition-colors hover:border-accent/40 hover:bg-muted/30"
		>
			<div class="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
				<Building2 class="size-6" />
			</div>

			<h2 class="mt-5 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
				Academics
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Discover programmes and academic opportunities available at MMU.
			</p>

			<span class="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
				Explore Academics
				<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
			</span>
		</a>
	</div>
</section>

<section class="container mx-auto px-4 pb-16">
	<CTASection
		eyebrow="Learn More"
		title="Want to know more about MMU?"
		description="Explore the university and discover the people, schools, and academic community behind it."
		primaryAction={{ label: 'Explore Academics', href: '/academics' }}
		secondaryAction={{ label: 'Contact Us', href: '/contact' }}
	/>
</section>