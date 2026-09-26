<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Building2 from '@lucide/svelte/icons/building-2';
	import HeartHandshake from '@lucide/svelte/icons/heart-handshake';
	import Trophy from '@lucide/svelte/icons/trophy';

	import { Button } from '$lib/components/ui/button';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<svelte:head>
	<title>Campus Life | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Discover student life, clubs, societies, activities, and opportunities at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Campus Life"
	title="Life Beyond the Classroom"
	description="Discover student life, clubs, societies, activities, and opportunities to connect with the wider campus community."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Campus Life' }
	]}
	actions={[
		{ label: 'Explore Student Activities', href: '/campus-life/clubs-and-societies' },
		{ label: 'Contact Us', href: '/contact', variant: 'outline' }
	]}
/>

<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="Student Experience"
		title="More Than Academics"
		description="University life is about learning, connecting, creating, and taking part in the wider campus community."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-3">
		<a
			href="/campus-life/clubs-and-societies"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary"
		>
			<div
				class="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary"
			>
				<HeartHandshake class="size-5" />
			</div>

			<h2 class="mt-5 text-lg font-semibold group-hover:text-primary">
				Clubs & Societies
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Connect with other students through clubs, societies, communities,
				and shared interests.
			</p>

			<div class="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
				Explore Clubs & Societies
				<ArrowRight class="size-4" />
			</div>
		</a>

		<div class="rounded-lg border bg-background p-6">
			<div
				class="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary"
			>
				<Trophy class="size-5" />
			</div>

			<h2 class="mt-5 text-lg font-semibold">
				Sports & Recreation
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Stay active, compete, and take part in recreational activities across
				the university.
			</p>
		</div>

		<div class="rounded-lg border bg-background p-6">
			<div
				class="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary"
			>
				<Building2 class="size-5" />
			</div>

			<h2 class="mt-5 text-lg font-semibold">
				Campus Facilities
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Explore the spaces and facilities that support learning, collaboration,
				and student life.
			</p>
		</div>
	</div>
</section>

<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-16">
		<div class="mx-auto max-w-3xl text-center">
			<p class="text-sm font-semibold uppercase tracking-wider text-primary">
				Student Community
			</p>

			<h2 class="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
				Find your place on campus.
			</h2>

			<p class="mt-4 text-muted-foreground">
				From student organizations to recreation and campus activities, there
				are opportunities to build connections outside the classroom.
			</p>

			<div class="mt-7">
				<Button href="/campus-life/clubs-and-societies">
					Explore Student Activities
					<ArrowRight class="ml-2 size-4" />
				</Button>
			</div>
		</div>
	</div>
</section>