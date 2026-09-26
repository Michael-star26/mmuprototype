<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';
	import Building2 from '@lucide/svelte/icons/building-2';
	import Library from '@lucide/svelte/icons/library';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';

	const academicPaths = [
		{
			number: '01',
			title: 'Academic Programmes',
			description:
				'Explore undergraduate, postgraduate and other programmes offered across the university.',
			href: '/academics/programmes',
			icon: BookOpen
		},
		{
			number: '02',
			title: 'Schools & Faculties',
			description:
				'Explore the academic units responsible for teaching, research and professional development.',
			href: '/university/schools',
			icon: Building2
		},
		{
			number: '03',
			title: 'Admissions',
			description:
				'Find application information, entry requirements and the steps required to apply.',
			href: '/admissions',
			icon: GraduationCap
		},
		{
			number: '04',
			title: 'Academic Resources',
			description:
				'Access academic information, calendars, policies and resources for university life.',
			href: '/resources',
			icon: Library
		}
	];

	const studyLevels = [
		{
			number: '01',
			title: 'Undergraduate',
			description:
				'Explore undergraduate degree and diploma opportunities across the university.',
			href: '/academics/programmes?level=undergraduate'
		},
		{
			number: '02',
			title: 'Postgraduate',
			description:
				'Find postgraduate opportunities for advanced study and professional development.',
			href: '/academics/programmes?level=postgraduate'
		},
		{
			number: '03',
			title: 'Other Programmes',
			description:
				'Explore additional academic and professional training opportunities.',
			href: '/academics/programmes'
		}
	];
</script>

<svelte:head>
	<title>Academics | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Explore academic programmes, schools, faculties, admissions and academic resources at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Academics"
	title="Learn. Build. Advance."
	description="Explore programmes, academic units and resources that shape the learning experience at Multimedia University of Kenya."
	actions={[
		{
			label: 'Browse programmes',
			href: '/academics/programmes'
		},
		{
			label: 'Admissions',
			href: '/admissions',
			variant: 'outline'
		}
	]}
/>

<!-- Academic navigation -->
<section class="border-b">
	<div class="container mx-auto px-5 lg:px-6">
		<div class="grid md:grid-cols-2 lg:grid-cols-4">
			{#each academicPaths as path, i}
				{@const Icon = path.icon}

				<a
					href={path.href}
					class={`group flex min-h-[240px] flex-col justify-between border-b p-6 transition-colors hover:bg-muted/40 sm:p-8 lg:min-h-[280px] lg:border-b-0 ${
						i > 0 ? 'lg:border-l' : ''
					}`}
				>
					<div class="flex items-start justify-between">
						<div
							class="flex size-10 items-center justify-center border border-foreground bg-foreground text-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
						>
							<Icon class="size-4" />
						</div>

						<span class="text-[9px] text-muted-foreground">
							{path.number}
						</span>
					</div>

					<div>
						<h2
							class="text-lg font-semibold tracking-[-0.03em] sm:text-xl"
						>
							{path.title}
						</h2>

						<p
							class="mt-3 max-w-sm text-sm leading-6 text-muted-foreground"
						>
							{path.description}
						</p>

						<div
							class="mt-6 inline-flex items-center text-[9px] font-bold uppercase tracking-[0.14em]"
						>
							Explore

							<ArrowUpRight
								class="ml-2 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Study at MMU -->
<section class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28">
	<div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
		<div>
			<SectionHeading
				eyebrow="Study at MMU"
				title="Find the right path."
				description="Start with your level of study, then explore programmes, requirements and application information."
			/>
		</div>

		<div class="divide-y border-t">
			{#each studyLevels as level}
				<a
					href={level.href}
					class="group grid gap-4 py-7 sm:grid-cols-[60px_1fr_auto] sm:items-start sm:gap-6"
				>
					<span class="text-[9px] font-medium text-muted-foreground">
						{level.number}
					</span>

					<div>
						<h3
							class="text-lg font-semibold tracking-[-0.025em] transition-transform duration-200 group-hover:translate-x-1"
						>
							{level.title}
						</h3>

						<p
							class="mt-2 max-w-lg text-sm leading-6 text-muted-foreground"
						>
							{level.description}
						</p>
					</div>

					<ArrowUpRight
						class="hidden size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
					/>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Programme finder -->
<section class="border-y bg-muted/20">
	<div class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28">
		<div
			class="flex flex-col gap-6 border-b pb-8 sm:flex-row sm:items-end sm:justify-between"
		>
			<SectionHeading
				eyebrow="Programme directory"
				title="What do you want to study?"
				description="Browse the complete programme catalogue and narrow your options by study level or academic area."
			/>

			<a
				href="/academics/programmes"
				class="group inline-flex shrink-0 items-center text-[10px] font-bold uppercase tracking-[0.12em]"
			>
				View all programmes

				<ArrowUpRight
					class="ml-2 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
				/>
			</a>
		</div>

		<div class="mt-8 grid gap-px border bg-border sm:grid-cols-2">
			<a
				href="/academics/programmes"
				class="group bg-background p-6 transition-colors hover:bg-muted/40 sm:p-8"
			>
				<span
					class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
				>
					Explore
				</span>

				<h3 class="mt-4 text-xl font-semibold tracking-[-0.03em]">
					Programme directory
				</h3>

				<p class="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
					Search the university's academic catalogue and discover
					programmes that match your interests.
				</p>

				<ArrowUpRight
					class="mt-8 size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
				/>
			</a>

			<a
				href="/admissions/requirements"
				class="group bg-background p-6 transition-colors hover:bg-muted/40 sm:p-8"
			>
				<span
					class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
				>
					Check
				</span>

				<h3 class="mt-4 text-xl font-semibold tracking-[-0.03em]">
					Entry requirements
				</h3>

				<p class="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
					Review the requirements for your chosen programme before
					starting your application.
				</p>

				<ArrowUpRight
					class="mt-8 size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
				/>
			</a>
		</div>
	</div>
</section>

<!-- Academic experience -->
<section class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28">
	<div class="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
		<div>
			<p
				class="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
			>
				Beyond the classroom
			</p>

			<h2
				class="mt-3 max-w-xl text-3xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-4xl lg:text-5xl"
			>
				Learning extends beyond the lecture hall.
			</h2>
		</div>

		<div class="space-y-6">
			<p class="text-sm leading-7 text-muted-foreground sm:text-base">
				Academic life is connected to research, practical learning,
				industry engagement and the wider university community.
			</p>

			<div class="border-t pt-6">
				<a
					href="/research"
					class="group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.14em]"
				>
					Explore research & innovation

					<ArrowUpRight
						class="ml-2 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					/>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="border-t bg-muted/20">
	<div class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-24">
		<CTASection
			eyebrow="Start here"
			title="Find your programme."
			description="Explore your options, check the requirements and take the next step towards studying at MMU."
			primaryAction={{
				label: 'Browse programmes',
				href: '/academics/programmes'
			}}
			secondaryAction={{
				label: 'View admissions',
				href: '/admissions'
			}}
		/>
	</div>
</section>