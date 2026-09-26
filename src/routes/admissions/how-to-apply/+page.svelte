<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';

	const steps = [
		{
			number: '01',
			title: 'Create an account',
			description:
				'Create an applicant account and provide your basic information to begin.'
		},
		{
			number: '02',
			title: 'Choose your level of study',
			description:
				'Select the level of study you are applying for, such as undergraduate or postgraduate.'
		},
		{
			number: '03',
			title: 'Select your programme',
			description:
				'Browse available programmes and select the one that matches your academic goals.'
		},
		{
			number: '04',
			title: 'Choose your funding mode',
			description:
				'Provide information about how you intend to finance your studies.'
		},
		{
			number: '05',
			title: 'Complete your application',
			description:
				'Review your information and complete your application before submitting.'
		}
	];
</script>

<svelte:head>
	<title>How to Apply | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Learn how to apply for programmes at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Admissions"
	title="Your application journey"
	description="Everything you need to know to move from choosing a programme to submitting your application."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Admissions', href: '/admissions' },
		{ label: 'How to Apply' }
	]}
	actions={[
		{
			label: 'View requirements',
			href: '/admissions/requirements'
		},
		{
			label: 'Explore programmes',
			href: '/academics/programmes',
			variant: 'outline'
		}
	]}
/>

<main>
	<!-- Application Process -->
	<section class="border-b border-border/60">
		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28"
		>
			<div
				class="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20"
			>
				<div>
					<p
						class="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-accent flex items-center gap-2"
					>
						<span class="h-px w-5 bg-accent"></span>
						01 / Process
					</p>

					<h2
						class="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl text-foreground"
					>
						Five steps to MMU.
					</h2>

					<p
						class="mt-5 max-w-[240px] text-sm leading-7 text-muted-foreground"
					>
						A straightforward application process designed to
						help you know what comes next.
					</p>
				</div>

				<div>
					<!-- Process header -->
					<div
						class="hidden border-y border-border/60 py-3 sm:grid sm:grid-cols-[72px_1fr_100px]"
					>
						<span
							class="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
						>
							No.
						</span>

						<span
							class="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
						>
							Application step
						</span>

						<span
							class="text-right font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
						>
							Status
						</span>
					</div>

					<div class="border-b border-border/60">
						{#each steps as step, index}
							<div class="group relative border-t border-border/60 first:border-t-0">
								<div
									class="grid gap-4 py-6 sm:grid-cols-[72px_1fr_100px] sm:items-center sm:gap-6 sm:py-7"
								>
									<div>
										<span
											class="font-mono text-xs font-bold tracking-[0.08em] text-primary"
										>
											{step.number}
										</span>
									</div>

									<div>
										<h3
											class="text-lg font-semibold tracking-[-0.02em] transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary sm:text-xl"
										>
											{step.title}
										</h3>

										<p
											class="mt-2 max-w-xl text-sm leading-6 text-muted-foreground"
										>
											{step.description}
										</p>
									</div>

									<div
										class="flex items-center justify-between sm:justify-end sm:gap-4"
									>
										<span
											class="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground"
										>
											Step {index + 1}
										</span>

										<ArrowRight
											class="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary"
										/>
									</div>
								</div>

								<div
									class="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
								></div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Before You Begin -->
	<section class="border-b border-border/60">
		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-24"
		>
			<div
				class="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20"
			>
				<div>
					<p
						class="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-accent flex items-center gap-2"
					>
						<span class="h-px w-5 bg-accent"></span>
						02 / Preparation
					</p>

					<h2
						class="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground"
					>
						Before you begin.
					</h2>
				</div>

				<div>
					<div class="grid border-t border-border/60 sm:grid-cols-2">
						<a
							href="/academics/programmes"
							class="group border-b border-border/60 py-7 sm:border-r sm:pr-10 transition-colors hover:bg-muted/30 px-2"
						>
							<div class="flex items-start justify-between">
								<span
									class="font-mono text-xs font-bold text-primary"
								>
									01
								</span>

								<ArrowUpRight
									class="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
								/>
							</div>

							<h3
								class="mt-12 text-xl font-semibold tracking-[-0.025em] group-hover:text-primary transition-colors"
							>
								Explore programmes
							</h3>

							<p
								class="mt-3 max-w-sm text-sm leading-6 text-muted-foreground"
							>
								Find a programme that fits your interests,
								goals and preferred level of study.
							</p>
						</a>

						<a
							href="/admissions/requirements"
							class="group border-b border-border/60 py-7 sm:pl-10 transition-colors hover:bg-muted/30 px-2"
						>
							<div class="flex items-start justify-between">
								<span
									class="font-mono text-xs font-bold text-primary"
								>
									02
								</span>

								<ArrowUpRight
									class="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
								/>
							</div>

							<h3
								class="mt-12 text-xl font-semibold tracking-[-0.025em] group-hover:text-primary transition-colors"
							>
								Review requirements
							</h3>

							<p
								class="mt-3 max-w-sm text-sm leading-6 text-muted-foreground"
							>
								Check the admission requirements and prepare
								the information needed for your application.
							</p>
						</a>
					</div>

					<div
						class="flex flex-col justify-between gap-5 border-b border-border/60 py-6 sm:flex-row sm:items-center"
					>
						<div>
							<p
								class="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
							>
								Need assistance?
							</p>

							<p
								class="mt-2 text-sm font-medium tracking-tight text-foreground"
							>
								Get in touch with MMU admissions.
							</p>
						</div>

						<a
							href="/contact"
							class="group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.1em] text-primary hover:text-accent transition-colors"
						>
							Contact admissions

							<ArrowRight
								class="ml-3 size-4 transition-transform duration-200 group-hover:translate-x-1"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Application CTA -->
	<section>
		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-32"
		>
			<CTASection
				eyebrow="03 / Next step"
				title="Ready to begin?"
				description="Choose your programme, review the requirements and start your application when you're ready."
				primaryAction={{
					label: 'Begin application',
					href: '/admissions'
				}}
				secondaryAction={{
					label: 'View all programmes',
					href: '/academics/programmes'
				}}
			/>
		</div>
	</section>
</main>