<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';


	const resources = [
		{
			title: 'Library',
			description:
				'Access digital collections, library services, research materials, and academic support resources.',
			status: 'Coming Soon'
		},
		{
			title: 'Downloads',
			description:
				'Find forms, publications, institutional documents, and important university materials.',
			status: 'Coming Soon'
		},
		{
			title: 'Student Resources',
			description:
				'Access information, services, and tools designed to support student life and learning.',
			status: 'Coming Soon'
		},
		{
			title: 'Frequently Asked Questions',
			description:
				'Find answers to common questions about admissions, academics, and university services.',
			status: 'Coming Soon'
		}
	];
</script>


<svelte:head>
	<title>University Resources | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Access university resources, academic information, services, and useful links."
	/>
</svelte:head>



<PageHero
	eyebrow="Resources"
	title="University Resources"
	description="A central hub for academic materials, services, documents, and information supporting the MMU community."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Resources' }
	]}
/>



<section class="container mx-auto px-5 py-16 lg:px-6 lg:py-24">


	<div>

		<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">

			<span class="h-px w-5 bg-accent"></span>

			Resource Centre

		</p>


		<h2 class="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">

			Information and services in one place.

		</h2>


		<p class="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">

			Explore academic resources, institutional documents, and support services
			available to students, staff, and visitors.

		</p>

	</div>




	<div class="mt-12 border-t border-border/60">


		{#each resources as resource, index}

			<a
				href="#"
				class="group grid gap-6 border-b border-border/60 py-10 transition-colors hover:bg-muted/20 md:grid-cols-[80px_1fr_180px]"
			>


				<div class="font-mono text-sm text-muted-foreground">

					{String(index + 1).padStart(2, '0')}

				</div>



				<div>

					<h3 class="text-2xl font-semibold tracking-[-0.04em] text-foreground transition-colors group-hover:text-primary">

						{resource.title}

					</h3>


					<p class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">

						{resource.description}

					</p>


				</div>



				<div class="flex items-center md:justify-end">


					<span class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">

						{resource.status}

						<ArrowUpRight class="size-4 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />

					</span>


				</div>


			</a>


		{/each}


	</div>


</section>




<section class="border-y border-border/60 bg-muted/20">

	<div class="container mx-auto px-5 py-16 lg:px-6 lg:py-24">


		<CTASection
			eyebrow="Need Assistance?"
			title="Looking for something specific?"
			description="Contact the university for additional information, guidance, or support."
			primaryAction={{
				label: 'Contact Us',
				href: '/contact'
			}}
			secondaryAction={{
				label: 'Admissions',
				href: '/admissions'
			}}
		/>


	</div>

</section>