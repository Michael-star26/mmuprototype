<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
	import Breadcrumbs from '$lib/components/shared/Breadcrumbs.svelte';
	import ProgrammeList from '$lib/components/programmes/ProgrammeList.svelte';

	import { programmes } from '$lib/data/programmes';
</script>

<svelte:head>
	<title>Academic Programmes | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Explore undergraduate, diploma, certificate, postgraduate and doctoral programmes offered at Multimedia University of Kenya."
	/>
</svelte:head>


<!-- =========================================================
     HEADER
========================================================= -->

<div class="border-b border-border">

	<div class="mx-auto max-w-[1440px] px-6 pt-6">

		<Breadcrumbs
			items={[
				{ label:'Home', href:'/' },
				{ label:'Academics', href:'/academics' },
				{ label:'Programmes', href:'/academics/programmes' }
			]}
		/>

	</div>


	<PageHero
		eyebrow="Academics"
		title="Academic Programmes"
		description="Explore programmes designed to develop knowledge, practical skills and innovative thinking across technology, business, media and research."
		actions={[
			{
				label:'Explore Programmes',
				href:'#catalogue'
			},
			{
				label:'Admissions',
				href:'/admissions',
				variant:'outline'
			}
		]}
	/>

</div>



<!-- =========================================================
     ACADEMIC PATHWAYS
========================================================= -->

<section class="border-b border-border">

	<div class="mx-auto max-w-[1440px] px-6 py-16 md:py-24">


		<div class="mb-12 grid gap-8 lg:grid-cols-[1fr_360px]">

			<div>

				<div class="flex items-center gap-3">

					<span class="h-px w-8 bg-primary"></span>

					<span
						class="font-mono text-[9px] uppercase tracking-[0.25em] text-primary"
					>
						01 / Academic Pathways
					</span>

				</div>


				<h2
					class="mt-5 text-4xl font-semibold tracking-[-0.06em] md:text-5xl"
				>
					Find your academic direction.
				</h2>

			</div>


			<p class="text-sm leading-7 text-muted-foreground">
				MMU offers academic pathways from foundational training to
				advanced research, supporting learners at different stages of
				their professional journey.
			</p>

		</div>



		<div class="grid border-y border-border md:grid-cols-4">


			{#each [
				{
					label:'UNDERGRADUATE',
					title:'Bachelor Degrees',
					text:'Build professional expertise through industry-focused degree programmes.'
				},
				{
					label:'DIPLOMA & CERTIFICATE',
					title:'Professional Skills',
					text:'Develop practical skills for emerging careers and industries.'
				},
				{
					label:'POSTGRADUATE',
					title:'Advanced Study',
					text:'Deepen expertise through postgraduate education and research.'
				},
				{
					label:'RESEARCH',
					title:'Innovation',
					text:'Participate in knowledge creation and technology advancement.'
				}
			] as item,index}


			<div
				class="p-6 md:p-8 {index !== 0 ? 'border-t md:border-l md:border-t-0 border-border':''}"
			>

				<span class="font-mono text-[9px] text-primary">
					{item.label}
				</span>


				<h3 class="mt-8 text-xl font-semibold tracking-tight">
					{item.title}
				</h3>


				<p class="mt-3 text-sm leading-6 text-muted-foreground">
					{item.text}
				</p>

			</div>


			{/each}


		</div>


	</div>

</section>



<!-- =========================================================
     PROGRAMME CATALOGUE
========================================================= -->

<section
	id="catalogue"
	class="scroll-mt-20 border-b border-border"
>

	<div class="mx-auto max-w-[1440px] px-6 py-16 md:py-24">


		<div
			class="mb-12 flex flex-col justify-between gap-8 border-b border-border pb-10 lg:flex-row lg:items-end"
		>

			<div>


				<div class="flex items-center gap-3">

					<span class="h-px w-8 bg-primary"></span>

					<span
						class="font-mono text-[9px] uppercase tracking-[0.25em] text-primary"
					>
						02 / Programme Catalogue
					</span>

				</div>


				<h2
					class="mt-5 text-4xl font-semibold tracking-[-0.06em] md:text-5xl"
				>
					Explore programmes.
				</h2>


			</div>



			<p class="max-w-md text-sm leading-7 text-muted-foreground">
				Browse programmes by academic level and discover opportunities
				across MMU schools and faculties.
			</p>


		</div>


		<ProgrammeList {programmes}/>


	</div>


</section>



<!-- =========================================================
     NEXT STEPS
========================================================= -->

<section class="border-b border-border">

	<div class="mx-auto max-w-[1440px] px-6 py-16 md:py-24">


		<div class="grid gap-10 lg:grid-cols-[260px_1fr]">


			<div>

				<span
					class="font-mono text-[9px] uppercase tracking-[0.25em] text-primary"
				>
					03 / Next Steps
				</span>


				<p class="mt-5 text-sm leading-6 text-muted-foreground">
					After choosing a programme, explore admission requirements,
					application procedures and student support information.
				</p>

			</div>



			<div class="grid border-y border-border md:grid-cols-3">


				{#each [
					{
						title:'Admissions',
						text:'Entry requirements, applications and joining MMU.',
						href:'/admissions'
					},
					{
						title:'Schools & Faculties',
						text:'Discover the academic units behind each programme.',
						href:'/university/schools'
					},
					{
						title:'Research',
						text:'Explore innovation and postgraduate opportunities.',
						href:'/research'
					}
				] as item,index}


				<a
					href={item.href}
					class="group p-6 transition-colors hover:bg-muted/30 md:p-8 {index !== 0 ? 'border-t md:border-l md:border-t-0 border-border':''}"
				>

					<div class="flex justify-between">

						<span class="font-mono text-[10px] text-primary">
							0{index + 1}
						</span>


						<ArrowUpRight
							class="size-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
						/>

					</div>


					<h3 class="mt-14 text-xl font-semibold tracking-tight">
						{item.title}
					</h3>


					<p class="mt-3 text-sm leading-6 text-muted-foreground">
						{item.text}
					</p>


				</a>


				{/each}


			</div>


		</div>


	</div>

</section>



<!-- cta -->

<section class="mx-auto max-w-[1440px] px-6 py-16 md:py-24">


	<CTASection
		eyebrow="Begin Your Journey"
		title="Ready to choose your programme?"
		description="Review available programmes, understand admission requirements and take the next step toward studying at Multimedia University of Kenya."
		primaryAction={{
			label:'View Admissions',
			href:'/admissions'
		}}
		secondaryAction={{
			label:'Contact MMU',
			href:'/contact'
		}}
	/>


</section>