<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import Building2 from '@lucide/svelte/icons/building-2';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';
	import Users from '@lucide/svelte/icons/users';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
</script>


<svelte:head>
	<title>The University | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Learn more about Multimedia University of Kenya, its leadership, schools, academic community, and institutional mission."
	/>
</svelte:head>



<PageHero
	eyebrow="The University"
	title="Discover MMU."
	description="A technology-driven university advancing knowledge, innovation, and human capacity through education, research, and collaboration."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'The University' }
	]}
	actions={[
		{ label: 'Explore Academics', href: '/academics' },
		{ label: 'Contact Us', href: '/contact', variant: 'outline' }
	]}
/>



<!-- =========================================================
     UNIVERSITY INTRODUCTION
========================================================= -->

<section class="border-b border-border/60">

	<div class="container mx-auto px-5 py-16 lg:px-6 lg:py-28">

		<div class="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">


			<div>

				<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">

					<span class="h-px w-5 bg-accent"></span>

					About MMU

				</p>

			</div>



			<div>

				<h2 class="max-w-4xl text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">

					Building knowledge, technology, and innovation for the future.

				</h2>


				<p class="mt-8 max-w-3xl text-base leading-8 text-muted-foreground">

					Multimedia University of Kenya provides a dynamic environment where students,
					researchers, and professionals collaborate to create solutions that respond
					to modern societal and technological challenges.

				</p>


				<p class="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">

					Through academic excellence, research, and industry engagement, MMU continues
					to develop graduates equipped for a rapidly changing world.

				</p>


			</div>


		</div>


	</div>

</section>





<!-- =========================================================
     UNIVERSITY DIRECTORY
========================================================= -->

<section class="container mx-auto px-5 py-16 lg:px-6 lg:py-24">


	<div class="mb-12">

		<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">

			<span class="h-px w-5 bg-accent"></span>

			Explore

		</p>


		<h2 class="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">

			Inside the University.

		</h2>

	</div>




	<div class="border-t border-border/60">


		<a
			href="/university/leadership"
			class="group grid gap-6 border-b border-border/60 py-10 transition-colors hover:bg-muted/20 md:grid-cols-[100px_1fr_220px]"
		>

			<div class="font-mono text-sm text-muted-foreground">
				01
			</div>


			<div>

				<div class="flex items-center gap-4">

					<Users class="size-6 text-accent" />

					<h3 class="text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary">
						Leadership
					</h3>

				</div>


				<p class="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">

					Meet the leaders responsible for shaping MMU's vision, governance,
					and strategic direction.

				</p>


			</div>



			<div class="flex items-center justify-end">

				<span class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">

					View Leadership

					<ArrowUpRight class="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />

				</span>

			</div>


		</a>





		<a
			href="/university/schools"
			class="group grid gap-6 border-b border-border/60 py-10 transition-colors hover:bg-muted/20 md:grid-cols-[100px_1fr_220px]"
		>

			<div class="font-mono text-sm text-muted-foreground">
				02
			</div>


			<div>

				<div class="flex items-center gap-4">

					<GraduationCap class="size-6 text-accent" />

					<h3 class="text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary">
						Schools
					</h3>

				</div>


				<p class="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">

					Explore academic schools, departments, and communities contributing
					to teaching, research, and innovation.

				</p>


			</div>



			<div class="flex items-center justify-end">

				<span class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">

					Explore Schools

					<ArrowUpRight class="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />

				</span>

			</div>


		</a>





		<a
			href="/academics"
			class="group grid gap-6 border-b border-border/60 py-10 transition-colors hover:bg-muted/20 md:grid-cols-[100px_1fr_220px]"
		>

			<div class="font-mono text-sm text-muted-foreground">
				03
			</div>


			<div>

				<div class="flex items-center gap-4">

					<Building2 class="size-6 text-accent" />

					<h3 class="text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary">
						Academics
					</h3>

				</div>


				<p class="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">

					Discover programmes, learning opportunities, and academic pathways
					designed to prepare students for the future.

				</p>


			</div>



			<div class="flex items-center justify-end">

				<span class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">

					Explore Academics

					<ArrowUpRight class="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />

				</span>

			</div>


		</a>


	</div>


</section>





<!-- =========================================================
     COMMUNITY SECTION
========================================================= -->

<section class="border-y border-border/60 bg-muted/20">

	<div class="container mx-auto px-5 py-16 lg:px-6 lg:py-24">


		<div class="grid gap-10 lg:grid-cols-2 lg:items-center">


			<div>

				<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">

					<span class="h-px w-3 bg-accent"></span>

					Our Community

				</p>


				<h2 class="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">

					A university built around people and ideas.

				</h2>


				<p class="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">

					Students, academics, researchers, and industry partners form a community
					committed to learning, discovery, and impact.

				</p>

			</div>



			<div class="lg:flex lg:justify-end">

				<CTASection
					eyebrow="Learn More"
					title="Explore MMU."
					description="Discover our programmes, community, and opportunities."
					primaryAction={{
						label: 'Explore Academics',
						href: '/academics'
					}}
					secondaryAction={{
						label: 'Contact Us',
						href: '/contact'
					}}
				/>

			</div>


		</div>


	</div>

</section>