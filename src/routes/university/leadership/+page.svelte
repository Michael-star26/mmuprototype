<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<svelte:head>
	<title>University Leadership | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Meet the leadership team guiding Multimedia University of Kenya."
	/>
</svelte:head>


<PageHero
	eyebrow="The University"
	title="University Leadership"
	description="Meet the people responsible for shaping the vision, governance, and academic direction of Multimedia University of Kenya."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'The University', href: '/university' },
		{ label: 'Leadership' }
	]}
/>



<section class="border-b border-border/60">

	<div class="container mx-auto px-5 py-16 lg:px-6">

		<SectionHeading
			eyebrow="Leadership Team"
			title="Guiding the University Forward"
			description="MMU's leadership provides strategic direction, academic oversight, and institutional governance."
		/>


		<div class="mt-12 grid gap-0 border-t border-l border-border/60 md:grid-cols-2 lg:grid-cols-3">


			<div class="group border-r border-b border-border/60 bg-background transition-colors hover:bg-muted/20">

				<div class="aspect-[4/3] flex items-center justify-center border-b border-border/60 bg-muted/20">

					<div class="text-center">

						<div class="text-5xl font-semibold tracking-[-0.05em] text-muted-foreground/30">
							01
						</div>

						<p class="mt-2 text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
							Portrait
						</p>

					</div>

				</div>


				<div class="p-7">

					<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
						<span class="h-px w-4 bg-accent"></span>
						Vice Chancellor
					</p>


					<h2 class="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
						Leader Name
					</h2>


					<p class="mt-3 text-sm leading-6 text-muted-foreground">
						Profile information, academic background, and leadership responsibilities.
					</p>


					<a
						href="#"
						class="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
					>
						View Profile

						<ArrowUpRight class="size-4" />

					</a>

				</div>

			</div>




			<div class="group border-r border-b border-border/60 bg-background transition-colors hover:bg-muted/20">

				<div class="aspect-[4/3] flex items-center justify-center border-b border-border/60 bg-muted/20">

					<div class="text-center">

						<div class="text-5xl font-semibold tracking-[-0.05em] text-muted-foreground/30">
							02
						</div>

						<p class="mt-2 text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
							Portrait
						</p>

					</div>

				</div>


				<div class="p-7">

					<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
						<span class="h-px w-4 bg-accent"></span>
						Deputy Vice Chancellor
					</p>


					<h2 class="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
						Leader Name
					</h2>


					<p class="mt-3 text-sm leading-6 text-muted-foreground">
						Profile information, academic background, and leadership responsibilities.
					</p>


					<a
						href="#"
						class="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
					>
						View Profile
						<ArrowUpRight class="size-4" />

					</a>

				</div>

			</div>



			<div class="group border-r border-b border-border/60 bg-background transition-colors hover:bg-muted/20">

				<div class="aspect-[4/3] flex items-center justify-center border-b border-border/60 bg-muted/20">

					<div class="text-center">

						<div class="text-5xl font-semibold tracking-[-0.05em] text-muted-foreground/30">
							03
						</div>

						<p class="mt-2 text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
							Portrait
						</p>

					</div>

				</div>


				<div class="p-7">

					<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
						<span class="h-px w-4 bg-accent"></span>
						Administration
					</p>


					<h2 class="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
						Leader Name
					</h2>


					<p class="mt-3 text-sm leading-6 text-muted-foreground">
						Profile information, academic background, and leadership responsibilities.
					</p>


					<a
						href="#"
						class="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
					>
						View Profile
						<ArrowUpRight class="size-4" />

					</a>

				</div>

			</div>


		</div>


	</div>

</section>



<section class="container mx-auto px-5 py-16 lg:px-6">

	<CTASection
		eyebrow="Explore MMU"
		title="Discover more about the university."
		description="Learn about MMU's schools, academic programmes, research, and community."
		primaryAction={{
			label:'Explore Schools',
			href:'/university/schools'
		}}
		secondaryAction={{
			label:'Academic Programmes',
			href:'/academics/programmes'
		}}
	/>

</section>