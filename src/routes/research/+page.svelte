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

<section class="container mx-auto px-5 py-16 lg:px-6 lg:py-24">

	<SectionHeading
		eyebrow="Research at MMU"
		title="Advancing Knowledge Through Research"
		description="Explore research activities, innovation, and opportunities to contribute to solutions that address real-world challenges."
	/>


	<div class="mt-12 border-t border-border/60">

		<div class="grid md:grid-cols-3">

			<div class="group border-b border-border/60 p-8 md:border-b-0 md:border-r">

				<div class="font-mono text-sm text-muted-foreground">
					01
				</div>


				<FlaskConical class="mt-8 size-7 text-accent" />


				<h2 class="mt-6 text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
					Research Areas
				</h2>


				<p class="mt-3 text-sm leading-7 text-muted-foreground">
					Discover areas of academic inquiry, emerging technologies, and research themes across the university.
				</p>

			</div>



			<div class="group border-b border-border/60 p-8 md:border-b-0 md:border-r">

				<div class="font-mono text-sm text-muted-foreground">
					02
				</div>


				<Microscope class="mt-8 size-7 text-accent" />


				<h2 class="mt-6 text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
					Research Centres
				</h2>


				<p class="mt-3 text-sm leading-7 text-muted-foreground">
					Explore research centres, institutes, and collaborations driving innovation and knowledge creation.
				</p>

			</div>



			<div class="group p-8">

				<div class="font-mono text-sm text-muted-foreground">
					03
				</div>


				<Lightbulb class="mt-8 size-7 text-accent" />


				<h2 class="mt-6 text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
					Innovation
				</h2>


				<p class="mt-3 text-sm leading-7 text-muted-foreground">
					Transform research ideas into practical solutions through entrepreneurship, technology, and collaboration.
				</p>

			</div>


		</div>

	</div>

</section>

<section class="border-y border-border/60 bg-muted/20">
	<div class="container mx-auto px-4 py-16">
		<div class="grid gap-10 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent flex items-center gap-2">
					<span class="h-px w-3 bg-accent"></span>
					Research Community
				</p>

				<h2 class="mt-2 text-3xl font-bold tracking-tight md:text-4xl text-foreground">
					Research is more than publications.
				</h2>

				<p class="mt-4 max-w-xl leading-7 text-muted-foreground">
					From undergraduate projects to collaborative research initiatives,
					students and researchers can contribute to new ideas, technologies,
					and solutions.
				</p>
			</div>

			<div class="flex flex-wrap gap-3 lg:justify-end">
				<Button 
					href="/contact"
					class="rounded-none h-11 bg-primary px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground hover:bg-accent hover:text-accent-foreground"
				>
					Get Involved
					<ArrowRight class="ml-2 size-4" />
				</Button>


				<Button 
					href="/academics"
					variant="outline"
					class="rounded-none h-11 border-border/60 px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
				>
					Explore Academics
				</Button>
			</div>
		</div>
	</div>
</section>