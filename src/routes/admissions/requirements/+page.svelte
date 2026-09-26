<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import Check from '@lucide/svelte/icons/check';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
</script>

<svelte:head>
	<title>Admission Requirements | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Review general admission requirements for degree, diploma, certificate, master's, specialized and artisan programmes at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Admissions"
	title="Before you apply"
	description="Review the general admission requirements for your intended level of study. Programme-specific requirements may also apply."
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
	<!-- General requirements -->
	<section class="border-b">
		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28"
		>
			<div class="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
				<div>
					<p
						class="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
					>
						01 / Entry requirements
					</p>

					<h2
						class="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl"
					>
						Find your entry point.
					</h2>

					<p
						class="mt-5 max-w-[240px] text-sm leading-7 text-muted-foreground"
					>
						General requirements vary according to the level
						and type of programme you intend to pursue.
					</p>
				</div>

				<div class="border-t">
					<!-- Table header -->
					<div
						class="hidden border-b py-3 sm:grid sm:grid-cols-[64px_1fr_190px]"
					>
						<span
							class="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
						>
							No.
						</span>

						<span
							class="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
						>
							Programme level
						</span>

						<span
							class="text-right font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
						>
							General requirement
						</span>
					</div>

					<!-- Degree -->
					<div class="border-b py-7 sm:py-8">
						<div
							class="grid gap-5 sm:grid-cols-[64px_1fr_190px] sm:items-start sm:gap-6"
						>
							<span
								class="font-mono text-xs font-semibold text-muted-foreground"
							>
								01
							</span>

							<div>
								<h3
									class="text-xl font-semibold tracking-[-0.025em] sm:text-2xl"
								>
									Degree programmes
								</h3>

								<p
									class="mt-3 max-w-xl text-sm leading-7 text-muted-foreground"
								>
									Applicants may qualify with a KCSE mean
									grade of C+ or above. An alternative
									entry route may apply for applicants
									with a C and a relevant diploma.
								</p>
							</div>

							<div class="sm:text-right">
								<p
									class="font-mono text-3xl font-semibold tracking-[-0.05em]"
								>
									C+
								</p>

								<p
									class="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
								>
									General minimum
								</p>
							</div>
						</div>

						<div
							class="mt-6 border-t pt-5 sm:ml-[90px]"
						>
							<div class="flex items-start gap-3">
								<Check
									class="mt-0.5 size-4 shrink-0 text-primary"
									aria-hidden="true"
								/>

								<p
									class="text-sm leading-6 text-muted-foreground"
								>
									Alternative: C with a relevant diploma.
								</p>
							</div>
						</div>
					</div>

					<!-- Diploma -->
					<div class="border-b py-7 sm:py-8">
						<div
							class="grid gap-5 sm:grid-cols-[64px_1fr_190px] sm:items-start sm:gap-6"
						>
							<span
								class="font-mono text-xs font-semibold text-muted-foreground"
							>
								02
							</span>

							<div>
								<h3
									class="text-xl font-semibold tracking-[-0.025em] sm:text-2xl"
								>
									Diploma programmes
								</h3>

								<p
									class="mt-3 max-w-xl text-sm leading-7 text-muted-foreground"
								>
									Applicants may qualify with a KCSE mean
									grade of C or C-, together with a
									relevant certificate where applicable.
								</p>
							</div>

							<div class="sm:text-right">
								<p
									class="font-mono text-3xl font-semibold tracking-[-0.05em]"
								>
									C / C-
								</p>

								<p
									class="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
								>
									General minimum
								</p>
							</div>
						</div>
					</div>

					<!-- Certificate -->
					<div class="border-b py-7 sm:py-8">
						<div
							class="grid gap-5 sm:grid-cols-[64px_1fr_190px] sm:items-start sm:gap-6"
						>
							<span
								class="font-mono text-xs font-semibold text-muted-foreground"
							>
								03
							</span>

							<div>
								<h3
									class="text-xl font-semibold tracking-[-0.025em] sm:text-2xl"
								>
									Certificate programmes
								</h3>

								<p
									class="mt-3 max-w-xl text-sm leading-7 text-muted-foreground"
								>
									Applicants may qualify with a KCSE mean
									grade of C-.
								</p>
							</div>

							<div class="sm:text-right">
								<p
									class="font-mono text-3xl font-semibold tracking-[-0.05em]"
								>
									C-
								</p>

								<p
									class="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
								>
									General minimum
								</p>
							</div>
						</div>
					</div>

					<!-- Masters -->
					<div class="border-b py-7 sm:py-8">
						<div
							class="grid gap-5 sm:grid-cols-[64px_1fr_190px] sm:items-start sm:gap-6"
						>
							<span
								class="font-mono text-xs font-semibold text-muted-foreground"
							>
								04
							</span>

							<div>
								<h3
									class="text-xl font-semibold tracking-[-0.025em] sm:text-2xl"
								>
									Master's programmes
								</h3>

								<p
									class="mt-3 max-w-xl text-sm leading-7 text-muted-foreground"
								>
									At least a Second Class Honours (Upper
									Division) degree in a relevant subject.
								</p>

								<p
									class="mt-3 max-w-xl text-sm leading-7 text-muted-foreground"
								>
									A Second Class Honours (Lower Division)
									may also be considered with at least two
									years of relevant work experience.
								</p>
							</div>

							<div class="sm:text-right">
								<p
									class="font-mono text-2xl font-semibold leading-tight tracking-[-0.05em]"
								>
									2nd Upper
								</p>

								<p
									class="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
								>
									General minimum
								</p>
							</div>
						</div>

						<div
							class="mt-6 border-t pt-5 sm:ml-[90px]"
						>
							<div class="flex items-start gap-3">
								<Check
									class="mt-0.5 size-4 shrink-0 text-primary"
									aria-hidden="true"
								/>

								<p
									class="text-sm leading-6 text-muted-foreground"
								>
									Alternative: 2nd Lower + 2 years of
									relevant work experience.
								</p>
							</div>
						</div>
					</div>

					<!-- Specialized / Artisan -->
					<div class="py-7 sm:py-8">
						<div
							class="grid gap-5 sm:grid-cols-[64px_1fr_190px] sm:items-start sm:gap-6"
						>
							<span
								class="font-mono text-xs font-semibold text-muted-foreground"
							>
								05
							</span>

							<div>
								<h3
									class="text-xl font-semibold tracking-[-0.025em] sm:text-2xl"
								>
									Specialized & artisan courses
								</h3>

								<p
									class="mt-3 max-w-xl text-sm leading-7 text-muted-foreground"
								>
									Admission requirements vary by course.
									Applicants should confirm the specific
									criteria before applying.
								</p>
							</div>

							<div class="sm:text-right">
								<p
									class="font-mono text-lg font-semibold uppercase tracking-[-0.02em]"
								>
									Varies
								</p>

								<p
									class="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
								>
									Course specific
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Programme-specific requirements -->
	<section class="border-b">
		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-24"
		>
			<div class="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
				<div>
					<p
						class="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
					>
						02 / Programme criteria
					</p>

					<h2
						class="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl"
					>
						General entry is only the starting point.
					</h2>
				</div>

				<div>
					<div class="border-t">
						<div
							class="grid gap-5 border-b py-6 sm:grid-cols-[72px_1fr_24px] sm:items-start sm:gap-8"
						>
							<span
								class="font-mono text-xs font-semibold text-muted-foreground"
							>
								01
							</span>

							<div>
								<h3
									class="text-xl font-semibold tracking-[-0.025em]"
								>
									Subject requirements
								</h3>

								<p
									class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground"
								>
									Some programmes may require specific
									subjects or minimum grades in addition
									to the general admission requirement.
								</p>
							</div>

							<ArrowRight
								class="size-4 text-muted-foreground"
							/>
						</div>

						<div
							class="grid gap-5 border-b py-6 sm:grid-cols-[72px_1fr_24px] sm:items-start sm:gap-8"
						>
							<span
								class="font-mono text-xs font-semibold text-muted-foreground"
							>
								02
							</span>

							<div>
								<h3
									class="text-xl font-semibold tracking-[-0.025em]"
								>
									Additional criteria
								</h3>

								<p
									class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground"
								>
									Certain courses may have additional
									academic, professional or other
									requirements.
								</p>
							</div>

							<ArrowRight
								class="size-4 text-muted-foreground"
							/>
						</div>

						<div
							class="grid gap-5 border-b py-6 sm:grid-cols-[72px_1fr_24px] sm:items-start sm:gap-8"
						>
							<span
								class="font-mono text-xs font-semibold text-muted-foreground"
							>
								03
							</span>

							<div>
								<h3
									class="text-xl font-semibold tracking-[-0.025em]"
								>
									Check your programme
								</h3>

								<p
									class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground"
								>
									Review the requirements for your specific
									programme before starting an application.
								</p>
							</div>

							<ArrowRight
								class="size-4 text-muted-foreground"
							/>
						</div>
					</div>

					<div
						class="mt-8 flex flex-col justify-between gap-5 border-t pt-6 sm:flex-row sm:items-center"
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
								Browse the complete programme catalogue.
							</p>
						</div>

						<a
							href="/academics/programmes"
							class="group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.1em]"
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

	<!-- Admissions help -->
	<section class="border-b">
		<div
			class="container mx-auto px-5 py-14 sm:py-16 lg:px-6 lg:py-20"
		>
			<div class="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-20">
				<div>
					<p
						class="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
					>
						03 / Admissions
					</p>
				</div>

				<div
					class="border-l pl-6 sm:pl-8"
				>
					<h2
						class="text-xl font-semibold tracking-[-0.025em] sm:text-2xl"
					>
						Need clarification?
					</h2>

					<p
						class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
					>
						Admission requirements can vary between programmes.
						For the most accurate and up-to-date information
						about your intended course, contact the MMU
						Admissions Office before applying.
					</p>

					<a
						href="/contact"
						class="group mt-6 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.1em]"
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

	<!-- CTA -->
	<section>
		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-32"
		>
			<CTASection
				eyebrow="04 / Next step"
				title="Find your programme."
				description="Explore MMU's programmes, review the requirements for your chosen course and learn how to begin your application."
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