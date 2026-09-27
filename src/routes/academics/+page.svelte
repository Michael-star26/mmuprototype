<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import FlaskConical from '@lucide/svelte/icons/flask-conical';

	import Breadcrumbs from '$lib/components/shared/Breadcrumbs.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';

	const academicAreas = [
		{
			number: '01',
			title: 'Schools & Faculties',
			description:
				'Academic schools bring together related disciplines, programmes and expertise.',
			href: '/university/schools'
		},
		{
			number: '02',
			title: 'Academic Programmes',
			description:
				'Explore undergraduate, diploma, certificate and postgraduate opportunities.',
			href: '/academics/programmes'
		},
		{
			number: '03',
			title: 'Research & Innovation',
			description:
				'Research connects academic knowledge with technology, industry and society.',
			href: '/research'
		},
		{
			number: '04',
			title: 'Academic Resources',
			description:
				'Access the library, learning resources and services that support academic work.',
			href: '/library'
		}
	];

	const studyJourney = [
		{
			number: '01',
			title: 'Choose',
			text: 'Identify a programme that matches your interests, strengths and future direction.'
		},
		{
			number: '02',
			title: 'Apply',
			text: 'Review the requirements, prepare your application and complete the admissions process.'
		},
		{
			number: '03',
			title: 'Learn',
			text: 'Build knowledge through coursework, practical learning, projects and collaboration.'
		},
		{
			number: '04',
			title: 'Create',
			text: 'Apply what you learn through research, innovation, industry engagement and practical work.'
		},
		{
			number: '05',
			title: 'Graduate',
			text: 'Leave MMU with academic knowledge, practical capability and a foundation for continued growth.'
		}
	];

	const academicFeatures = [
		{
			icon: GraduationCap,
			label: 'Learning',
			title: 'Theory meets practice',
			description:
				'Academic study is supported by practical work, projects, technology and experiences designed to connect learning with the world beyond the classroom.'
		},
		{
			icon: FlaskConical,
			label: 'Research',
			title: 'Question what exists',
			description:
				'Research and innovation provide opportunities to investigate problems, develop ideas and contribute knowledge beyond the curriculum.'
		},
		{
			icon: BookOpen,
			label: 'Resources',
			title: 'Learn beyond the classroom',
			description:
				'Libraries, digital resources, academic support and collaborative spaces extend the learning environment across campus.'
		}
	];
</script>

<svelte:head>
	<title>Academics | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Explore academics at Multimedia University of Kenya, including schools, programmes, research, learning opportunities and the student academic journey."
	/>
</svelte:head>


<!-- =========================================================
     INTRO
========================================================= -->

<div class="border-b border-border">

	<div class="mx-auto max-w-[1440px] px-5 pt-5 sm:px-6 sm:pt-6">
		<Breadcrumbs
			items={[
				{ label: 'Home', href: '/' },
				{ label: 'Academics', href: '/academics' }
			]}
		/>
	</div>


	<section class="mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-28 lg:py-36">

		<div class="grid gap-12 lg:grid-cols-[1fr_390px] lg:gap-24">

			<div>

				<div class="flex items-center gap-3">
					<span class="h-px w-8 bg-accent"></span>

					<span
						class="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-accent"
					>
						01 / Academics
					</span>
				</div>


				<h1
					class="mt-8 max-w-6xl text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.78] tracking-[-0.085em]"
				>
					Learn.
					<br />
					<span class="ml-[0.16em] text-primary">Question.</span>
					<br />
					<span class="ml-[0.32em] skew-x-[-4deg] text-primary/70">
						Create.
					</span>
				</h1>

			</div>


			<div class="flex flex-col justify-end">

				<p class="max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
					MMU brings together technology, creativity, science,
					communication and research in an academic environment
					designed to prepare students for a changing world.
				</p>


				<div class="mt-8 flex flex-wrap gap-x-7 gap-y-3">

					<a
						href="/academics/programmes"
						class="group inline-flex items-center border-b border-foreground/20 pb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:border-accent hover:text-accent"
					>
						Explore programmes
						<ArrowUpRight
							class="ml-3 size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</a>


					<a
						href="/admissions"
						class="group inline-flex items-center border-b border-foreground/20 pb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:border-accent hover:text-accent"
					>
						Admissions
						<ArrowUpRight
							class="ml-3 size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</a>

				</div>

			</div>

		</div>


		<!-- Academic scope -->

		<div class="mt-16 grid border-y border-border sm:grid-cols-3">

			<div class="p-5 sm:p-7">
				<span class="font-mono text-[8px] uppercase tracking-[0.2em] text-accent">
					Academic scope
				</span>

				<p class="mt-3 text-sm font-medium">
					Technology · Media · Science
				</p>
			</div>


			<div class="border-t border-border p-5 sm:border-l sm:border-t-0 sm:p-7">
				<span class="font-mono text-[8px] uppercase tracking-[0.2em] text-accent">
					Learning model
				</span>

				<p class="mt-3 text-sm font-medium">
					Knowledge · Practice · Research
				</p>
			</div>


			<div class="border-t border-border p-5 sm:border-l sm:border-t-0 sm:p-7">
				<span class="font-mono text-[8px] uppercase tracking-[0.2em] text-accent">
					Academic outcome
				</span>

				<p class="mt-3 text-sm font-medium">
					Capability · Creativity · Impact
				</p>
			</div>

		</div>

	</section>

</div>



<!-- =========================================================
     ACADEMIC ECOSYSTEM
========================================================= -->

<section class="bg-surface-red border-b border-border">

	<div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-28 lg:py-36">

		<div class="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

			<div class="relative lg:sticky lg:top-28 lg:self-start">

				<div class="flex items-center gap-3">
					<span class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent">
						02
					</span>

					<span class="h-px w-8 bg-foreground/20"></span>

					<span class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
						The academic ecosystem
					</span>
				</div>


				<h2
					class="mt-8 max-w-xl text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.8] tracking-[-0.08em]"
				>
					More than
					<br />
					<span class="ml-[0.15em] text-primary">
						a programme.
					</span>
				</h2>


				<p class="mt-8 max-w-sm text-sm leading-6 text-muted-foreground">
					Academic life at MMU extends beyond the programme you
					choose. Schools, research, resources and academic
					communities shape the wider experience.
				</p>

			</div>


			<div>

				<div class="border-t border-foreground/15">

					{#each academicAreas as item}

						<a
							href={item.href}
							class="group relative block border-b border-foreground/15 py-8 sm:py-10"
						>

							<div class="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100"></div>


							<div class="grid gap-6 pl-4 sm:grid-cols-[70px_1fr_auto] sm:gap-8 sm:pl-5">

								<span class="font-mono text-[10px] font-semibold tracking-[0.15em] text-accent">
									{item.number}
								</span>


								<div>

									<h3
										class="text-[clamp(1.6rem,3vw,2.6rem)] font-semibold leading-none tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-1"
									>
										{item.title}
									</h3>


									<p class="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
										{item.description}
									</p>

								</div>


								<ArrowUpRight
									class="size-5 self-start text-foreground/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
								/>

							</div>

						</a>

					{/each}

				</div>


				<div class="mt-6 flex items-center justify-between">
					<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/50">
						MMU / Academic ecosystem
					</span>

					<a
						href="/university/schools"
						class="text-[8px] font-bold uppercase tracking-[0.15em] text-primary transition-colors hover:text-accent"
					>
						Explore schools
					</a>
				</div>

			</div>

		</div>

	</div>

</section>



<!-- =========================================================
     HOW ACADEMIC LIFE WORKS
========================================================= -->

<section class="bg-surface-blue border-b border-border">

	<div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-28 lg:py-36">


		<div class="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">


			<div>

				<div class="flex items-center gap-3">

					<span class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent">
						03
					</span>

					<span class="h-px w-8 bg-foreground/20"></span>

					<span class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
						The student journey
					</span>

				</div>


				<h2
					class="mt-8 max-w-lg text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.8] tracking-[-0.08em]"
				>
					From
					<br />
					<span class="ml-[0.15em] text-primary">
						learning
					</span>
					<br />
					to
					<br />
					<span class="ml-[0.3em] skew-x-[-4deg] text-primary/70">
						impact.
					</span>
				</h2>


				<p class="mt-8 max-w-sm text-sm leading-6 text-muted-foreground">
					A student's academic journey develops progressively:
					from choosing a direction to applying knowledge in
					real situations.
				</p>

			</div>



			<div class="border-t border-foreground/15">

				{#each studyJourney as step}

					<div class="grid grid-cols-[55px_1fr] gap-5 border-b border-foreground/15 py-7 sm:grid-cols-[80px_1fr] sm:gap-8 sm:py-9">

						<span class="font-mono text-[10px] font-semibold text-accent">
							{step.number}
						</span>


						<div>

							<h3 class="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
								{step.title}
							</h3>


							<p class="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
								{step.text}
							</p>

						</div>

					</div>

				{/each}

			</div>

		</div>


		<!-- Journey footer -->

		<div class="mt-12 grid border-t border-foreground/15 pt-6 sm:grid-cols-[auto_1fr] sm:gap-10">

			<span class="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
				ACADEMIC PATH
			</span>

			<p class="max-w-3xl text-sm font-medium leading-6 text-foreground/70">
				Your programme is the starting point. The wider academic
				experience gives you opportunities to develop knowledge,
				build practical capability and discover where your work
				can make a difference.
			</p>

		</div>

	</div>

</section>



<!-- =========================================================
     WHAT LEARNING LOOKS LIKE
========================================================= -->

<section class="border-b border-border">

	<div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-28 lg:py-36">


		<div class="flex flex-col justify-between gap-8 border-b border-border pb-10 lg:flex-row lg:items-end">

			<div>

				<div class="flex items-center gap-3">

					<span class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent">
						04
					</span>

					<span class="h-px w-8 bg-border"></span>

					<span class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
						Academic experience
					</span>

				</div>


				<h2 class="mt-6 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.82] tracking-[-0.08em]">
					How learning
					<br />
					<span class="ml-[0.15em] text-primary">
						takes shape.
					</span>
				</h2>

			</div>


			<p class="max-w-md text-sm leading-6 text-muted-foreground">
				Academic development is not limited to lectures and
				examinations. Different forms of learning work together
				to build deeper understanding and practical capability.
			</p>

		</div>



		<div class="mt-10 grid border-y border-border md:grid-cols-3">

			{#each academicFeatures as feature, index}

				<div
					class="group border-b border-border p-6 md:border-b-0 md:border-l md:p-8 first:md:border-l-0"
				>

					<div class="flex items-start justify-between">

						<span class="font-mono text-[9px] font-semibold text-accent">
							{String(index + 1).padStart(2, '0')}
						</span>


						<svelte:component
							this={feature.icon}
							class="size-5 text-primary/35 transition-colors group-hover:text-accent"
						/>

					</div>


					<span class="mt-12 block text-[8px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
						{feature.label}
					</span>


					<h3 class="mt-3 text-2xl font-semibold tracking-[-0.04em]">
						{feature.title}
					</h3>


					<p class="mt-4 text-sm leading-6 text-muted-foreground">
						{feature.description}
					</p>

				</div>

			{/each}

		</div>

	</div>

</section>



<!-- =========================================================
     PROGRAMME DISCOVERY
========================================================= -->

<section class="bg-surface-paper border-b border-border">

	<div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-28 lg:py-36">


		<div class="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">


			<div>

				<div class="flex items-center gap-3">

					<span class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent">
						05
					</span>

					<span class="h-px w-8 bg-foreground/20"></span>

					<span class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
						Find your direction
					</span>

				</div>


				<h2
					class="mt-7 max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.8] tracking-[-0.085em]"
				>
					There is more
					<br />
					<span class="ml-[0.18em] text-primary">
						to explore.
					</span>
				</h2>

			</div>


			<div>

				<p class="max-w-md text-sm leading-6 text-muted-foreground">
					MMU offers different academic pathways across its
					disciplines. Explore the complete catalogue to find
					the programme that matches your interests and goals.
				</p>


				<a
					href="/academics/programmes"
					class="group mt-8 inline-flex items-center border-b border-foreground/25 pb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:border-accent hover:text-accent"
				>
					Browse all programmes
					<ArrowRight
						class="ml-3 size-3.5 transition-transform duration-300 group-hover:translate-x-1"
					/>
				</a>

			</div>

		</div>


		<!-- Programme pathway strip -->

		<div class="mt-16 border-y border-foreground/15">

			<div class="grid sm:grid-cols-2 lg:grid-cols-4">

				<a
					href="/academics/programmes?level=undergraduate"
					class="group border-b border-foreground/15 p-6 transition-colors hover:bg-foreground/[0.03] sm:border-r lg:border-b-0 lg:p-8"
				>

					<span class="font-mono text-[9px] text-accent">
						01
					</span>

					<h3 class="mt-12 text-xl font-semibold tracking-[-0.03em]">
						Undergraduate
					</h3>

					<p class="mt-3 text-xs leading-5 text-muted-foreground">
						Build a strong academic and professional foundation.
					</p>

					<ArrowUpRight class="mt-8 size-4 text-foreground/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />

				</a>


				<a
					href="/academics/programmes?level=postgraduate"
					class="group border-b border-foreground/15 p-6 transition-colors hover:bg-foreground/[0.03] lg:border-b-0 lg:border-r lg:p-8"
				>

					<span class="font-mono text-[9px] text-accent">
						02
					</span>

					<h3 class="mt-12 text-xl font-semibold tracking-[-0.03em]">
						Postgraduate
					</h3>

					<p class="mt-3 text-xs leading-5 text-muted-foreground">
						Deepen expertise through advanced study and research.
					</p>

					<ArrowUpRight class="mt-8 size-4 text-foreground/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />

				</a>


				<a
					href="/academics/programmes?level=diploma"
					class="group border-b border-foreground/15 p-6 transition-colors hover:bg-foreground/[0.03] sm:border-r lg:border-b-0 lg:border-r lg:p-8"
				>

					<span class="font-mono text-[9px] text-accent">
						03
					</span>

					<h3 class="mt-12 text-xl font-semibold tracking-[-0.03em]">
						Diploma
					</h3>

					<p class="mt-3 text-xs leading-5 text-muted-foreground">
						Develop focused knowledge and practical skills.
					</p>

					<ArrowUpRight class="mt-8 size-4 text-foreground/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />

				</a>


				<a
					href="/academics/programmes?level=certificate"
					class="group p-6 transition-colors hover:bg-foreground/[0.03] lg:p-8"
				>

					<span class="font-mono text-[9px] text-accent">
						04
					</span>

					<h3 class="mt-12 text-xl font-semibold tracking-[-0.03em]">
						Certificate
					</h3>

					<p class="mt-3 text-xs leading-5 text-muted-foreground">
						Gain focused skills for professional development.
					</p>

					<ArrowUpRight class="mt-8 size-4 text-foreground/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />

				</a>

			</div>

		</div>


		<div class="mt-6 flex flex-wrap items-center justify-between gap-4">

			<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/50">
				MMU / Academic pathways
			</span>

			<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/50">
				Explore · Compare · Apply
			</span>

		</div>

	</div>

</section>



<!-- =========================================================
     RESEARCH CONNECTION
========================================================= -->

<section class="bg-surface-blue-deep border-b border-border">

	<div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-28 lg:py-32">


		<div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">


			<div>

				<div class="flex items-center gap-3">

					<span class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent">
						06
					</span>

					<span class="h-px w-8 bg-foreground/20"></span>

					<span class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
						Research & innovation
					</span>

				</div>


				<h2
					class="mt-7 text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.8] tracking-[-0.085em]"
				>
					Learn
					<br />
					<span class="ml-[0.2em] text-primary">
						by asking.
					</span>
				</h2>

			</div>


			<div class="flex flex-col justify-end">

				<p class="max-w-xl text-lg leading-8 tracking-[-0.02em] text-foreground/75 sm:text-xl">
					Research is part of the wider academic environment:
					a way to investigate questions, test ideas and create
					knowledge that responds to real challenges.
				</p>


				<a
					href="/research"
					class="group mt-8 inline-flex w-fit items-center border-b border-foreground/20 pb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:border-accent hover:text-accent"
				>
					Explore research & innovation
					<ArrowUpRight
						class="ml-3 size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					/>
				</a>

			</div>

		</div>


		<div class="mt-16 grid border-y border-foreground/15 sm:grid-cols-3">

			<div class="p-6 sm:p-8">

				<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-accent">
					Research
				</span>

				<p class="mt-4 text-sm leading-6 text-muted-foreground">
					Investigate problems and contribute new knowledge.
				</p>

			</div>


			<div class="border-t border-foreground/15 p-6 sm:border-l sm:border-t-0 sm:p-8">

				<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-accent">
					Innovation
				</span>

				<p class="mt-4 text-sm leading-6 text-muted-foreground">
					Turn ideas and discoveries into useful possibilities.
				</p>

			</div>


			<div class="border-t border-foreground/15 p-6 sm:border-l sm:border-t-0 sm:p-8">

				<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-accent">
					Partnership
				</span>

				<p class="mt-4 text-sm leading-6 text-muted-foreground">
					Connect academic knowledge with industry and society.
				</p>

			</div>

		</div>

	</div>

</section>



<!-- =========================================================
     CTA
========================================================= -->

<section class="mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-28">

	<CTASection
		eyebrow="Your Next Step"
		title="Find where you belong."
		description="Explore programmes, understand the admissions process and discover the academic environment at MMU."
		primaryAction={{
			label: 'Explore Programmes',
			href: '/academics/programmes'
		}}
		secondaryAction={{
			label: 'View Admissions',
			href: '/admissions'
		}}
	/>

</section>

