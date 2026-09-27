<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import Check from '@lucide/svelte/icons/check';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';

	const requirements = [
		{
			number: '01',
			title: 'Degree programmes',
			requirement: 'C+',
			label: 'General minimum',
			description:
				'Applicants may qualify with a KCSE mean grade of C+ or above. Alternative entry may apply for applicants with a C and a relevant diploma.',
			note: 'Alternative: C with a relevant diploma.'
		},
		{
			number: '02',
			title: 'Diploma programmes',
			requirement: 'C / C-',
			label: 'General minimum',
			description:
				'Applicants may qualify with a KCSE mean grade of C or C-, together with a relevant certificate where applicable.'
		},
		{
			number: '03',
			title: 'Certificate programmes',
			requirement: 'C-',
			label: 'General minimum',
			description:
				'Applicants may qualify with a KCSE mean grade of C- depending on the selected programme.'
		},
		{
			number: '04',
			title: "Master's programmes",
			requirement: '2nd Upper',
			label: 'General minimum',
			description:
				'Applicants should hold at least a Second Class Honours (Upper Division) degree in a relevant subject.',
			note: 'Alternative: Second Class Lower Division with at least two years relevant work experience.'
		},
		{
			number: '05',
			title: 'Specialized & artisan courses',
			requirement: 'Varies',
			label: 'Course specific',
			description:
				'Requirements vary according to the course. Applicants should confirm the specific criteria before applying.'
		}
	];
</script>

<svelte:head>
	<title>Admission Requirements | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Review admission requirements for degree, diploma, certificate, master's and specialized programmes at Multimedia University of Kenya."
	/>
</svelte:head>


<PageHero
	eyebrow="Admissions"
	title="Before you apply"
	description="Understand the general requirements for your intended level of study. Programme-specific requirements may also apply."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Admissions', href: '/admissions' },
		{ label: 'Requirements' }
	]}
	actions={[
		{
			label: 'How to apply',
			href: '/admissions/how-to-apply'
		},
		{
			label: 'Explore programmes',
			href: '/academics/programmes',
			variant: 'outline'
		}
	]}
/>


<main>

	<!-- =========================================================
		ENTRY REQUIREMENTS
	========================================================= -->

	<section class="border-b border-border/60">

		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28"
		>

			<div class="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">


				<div>

					<p
						class="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-accent"
					>
						<span class="h-px w-5 bg-accent"></span>
						01 / Entry requirements
					</p>


					<h2
						class="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl"
					>
						Find your entry point.
					</h2>


					<p
						class="mt-5 max-w-[240px] text-sm leading-7 text-muted-foreground"
					>
						Admission pathways are structured according to the level
						of study you intend to pursue.
					</p>


				</div>



				<div class="border-t border-border/60">


					{#each requirements as item}

						<article
							class="group border-b border-border/60 py-8 transition-colors hover:bg-muted/20 sm:py-10"
						>


							<div
								class="grid gap-6 sm:grid-cols-[64px_1fr_160px]"
							>


								<div>

									<span
										class="font-mono text-xs font-bold text-primary"
									>
										{item.number}
									</span>

								</div>



								<div>

									<h3
										class="text-xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-primary sm:text-2xl"
									>
										{item.title}
									</h3>


									<p
										class="mt-3 max-w-xl text-sm leading-7 text-muted-foreground"
									>
										{item.description}
									</p>


									{#if item.note}

										<div
											class="mt-6 flex items-start gap-3 border-t border-border/40 pt-5"
										>

											<Check
												class="mt-0.5 size-4 text-accent"
											/>

											<p
												class="text-sm text-muted-foreground"
											>
												{item.note}
											</p>

										</div>

									{/if}


								</div>



								<div
									class="sm:text-right"
								>

									<p
										class="font-mono text-3xl font-semibold tracking-[-0.05em] text-primary"
									>
										{item.requirement}
									</p>


									<p
										class="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-accent"
									>
										{item.label}
									</p>

								</div>



							</div>


						</article>

					{/each}


				</div>

			</div>

		</div>

	</section>
		<!-- =========================================================
		PROGRAMME SPECIFIC CRITERIA
	========================================================= -->

	<section class="border-b border-border/60">

		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-24"
		>

			<div class="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">


				<div>

					<p
						class="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-accent"
					>
						<span class="h-px w-5 bg-accent"></span>
						02 / Programme criteria
					</p>


					<h2
						class="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl"
					>
						General entry is only the beginning.
					</h2>


					<p
						class="mt-5 max-w-[240px] text-sm leading-7 text-muted-foreground"
					>
						Some programmes require additional academic qualifications
						or subject combinations.
					</p>


				</div>



				<div>


					<div class="border-t border-border/60">


						<a
							href="/academics/programmes"
							class="group grid gap-5 border-b border-border/60 py-7 transition-colors hover:bg-muted/20 sm:grid-cols-[72px_1fr_32px]"
						>

							<span
								class="font-mono text-xs font-bold text-primary"
							>
								01
							</span>


							<div>

								<h3
									class="text-xl font-semibold tracking-[-0.03em] group-hover:text-primary transition-colors"
								>
									Subject requirements
								</h3>


								<p
									class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground"
								>
									Certain programmes may require specific
									subjects or minimum grades in addition to
									the general admission requirement.
								</p>


							</div>


							<ArrowRight
								class="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary"
							/>


						</a>



						<a
							href="/academics/programmes"
							class="group grid gap-5 border-b border-border/60 py-7 transition-colors hover:bg-muted/20 sm:grid-cols-[72px_1fr_32px]"
						>

							<span
								class="font-mono text-xs font-bold text-primary"
							>
								02
							</span>


							<div>

								<h3
									class="text-xl font-semibold tracking-[-0.03em] group-hover:text-primary transition-colors"
								>
									Additional criteria
								</h3>


								<p
									class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground"
								>
									Professional qualifications, previous
									training or other academic conditions may
									apply depending on your selected programme.
								</p>


							</div>


							<ArrowRight
								class="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary"
							/>


						</a>



						<a
							href="/academics/programmes"
							class="group grid gap-5 border-b border-border/60 py-7 transition-colors hover:bg-muted/20 sm:grid-cols-[72px_1fr_32px]"
						>

							<span
								class="font-mono text-xs font-bold text-primary"
							>
								03
							</span>


							<div>

								<h3
									class="text-xl font-semibold tracking-[-0.03em] group-hover:text-primary transition-colors"
								>
									Check your programme
								</h3>


								<p
									class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground"
								>
									Review the specific requirements for your
									intended course before beginning your
									application.
								</p>


							</div>


							<ArrowRight
								class="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary"
							/>


						</a>


					</div>



					<div
						class="mt-8 flex flex-col gap-5 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between"
					>

						<div>

							<p
								class="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
							>
								Find your course
							</p>


							<p
								class="mt-2 text-sm font-medium tracking-tight"
							>
								Browse the complete MMU programme catalogue.
							</p>


						</div>



						<a
							href="/academics/programmes"
							class="group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:text-accent"
						>
							Explore programmes

							<ArrowUpRight
								class="ml-2 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>

						</a>


					</div>


				</div>

			</div>

		</div>

	</section>




	<!-- =========================================================
		ADMISSIONS SUPPORT
	========================================================= -->


	<section class="border-b border-border/60">


		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-24"
		>


			<div class="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">


				<div>

					<p
						class="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-accent"
					>
						<span class="h-px w-5 bg-accent"></span>
						03 / Admissions support
					</p>


				</div>



				<div
					class="border-l border-border/60 pl-6 sm:pl-10"
				>

					<h2
						class="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl"
					>
						Need clarification before applying?
					</h2>


					<p
						class="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
					>
						Admission requirements may differ across programmes.
						For the most accurate information about your intended
						course, contact the MMU Admissions Office before
						submitting your application.
					</p>



					<a
						href="/contact"
						class="group mt-7 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:text-accent"
					>
						Contact admissions

						<ArrowUpRight
							class="ml-2 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>

					</a>


				</div>


			</div>


		</div>


	</section>
		<!-- =========================================================
		NEXT STEP CTA
	========================================================= -->

	<section>

		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-32"
		>

			<CTASection
				eyebrow="04 / Next step"
				title="Find your programme."
				description="Explore MMU's academic programmes, confirm your requirements and begin your application journey."
				primaryAction={{
					label: 'Explore programmes',
					href: '/academics/programmes'
				}}
				secondaryAction={{
					label: 'How to apply',
					href: '/admissions/how-to-apply'
				}}
			/>

		</div>

	</section>


</main>