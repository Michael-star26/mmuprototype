<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';


	const schools = [
		{
			name: 'School of Computing and Information Technology',
			description:
				'Advancing computing education, software development, information systems, and emerging technologies.'
		},
		{
			name: 'School of Engineering and Technology',
			description:
				'Developing innovative engineering solutions through technology, research, and practical learning.'
		},
		{
			name: 'School of Media and Communication',
			description:
				'Exploring media, communication, creative technologies, and digital storytelling.'
		},
		{
			name: 'School of Business and Economics',
			description:
				'Preparing students through business education, entrepreneurship, and economic research.'
		},
		{
			name: 'School of Science',
			description:
				'Building scientific knowledge through teaching, research, and innovation.'
		},
		{
			name: 'School of Graduate Studies',
			description:
				'Supporting postgraduate education, research development, and advanced scholarship.'
		}
	];
</script>


<svelte:head>
	<title>Schools | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Explore academic schools and learning communities at Multimedia University of Kenya."
	/>
</svelte:head>



<PageHero
	eyebrow="Academic Community"
	title="Our Schools."
	description="Discover the academic schools that form the foundation of teaching, research, and innovation at Multimedia University of Kenya."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'University', href: '/university' },
		{ label: 'Schools' }
	]}
/>




<section class="container mx-auto px-5 py-16 lg:px-6 lg:py-24">


	<div>

		<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">

			<span class="h-px w-5 bg-accent"></span>

			Academic Schools

		</p>


		<h2 class="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">

			Explore our academic communities.

		</h2>


		<p class="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">

			Each school brings together programmes, researchers, academics,
			and students working towards knowledge creation and professional growth.

		</p>

	</div>




	<div class="mt-12 border-t border-border/60">


		{#each schools as school, index}

			<a
				href="/academics"
				class="group grid gap-6 border-b border-border/60 py-10 transition-colors hover:bg-muted/20 md:grid-cols-[80px_1fr_180px]"
			>


				<div class="font-mono text-sm text-muted-foreground">

					{String(index + 1).padStart(2, '0')}

				</div>



				<div>

					<h3 class="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">

						{school.name}

					</h3>


					<p class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">

						{school.description}

					</p>


				</div>




				<div class="flex items-center md:justify-end">

					<span class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">

						View School

						<ArrowUpRight
							class="size-4 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
						/>

					</span>

				</div>


			</a>


		{/each}


	</div>


</section>




<section class="border-y border-border/60 bg-muted/20">

	<div class="container mx-auto px-5 py-16 lg:px-6 lg:py-24">


		<CTASection
			eyebrow="Academic Programmes"
			title="Find your programme."
			description="Explore undergraduate and postgraduate programmes available across MMU schools."
			primaryAction={{
				label: 'View Programmes',
				href: '/academics/programmes'
			}}
			secondaryAction={{
				label: 'Contact Us',
				href: '/contact'
			}}
		/>


	</div>

</section>