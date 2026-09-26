<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { programme } = data;
</script>

<svelte:head>
	<title>{programme.title} | Multimedia University of Kenya</title>

	<meta
		name="description"
		content={programme.description}
	/>
</svelte:head>

<PageHero
	eyebrow={programme.faculty}
	title={programme.title}
	description={programme.description}
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Academics', href: '/academics' },
		{ label: 'Programmes', href: '/academics/programmes' },
		{ label: programme.title }
	]}
/>

<main>
	<!-- ============================================================
		PROGRAMME CONTENT
	============================================================ -->

	<section class="border-b">
		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28"
		>
			<div
				class="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-24"
			>
				<!-- Main content -->
				<div class="space-y-16 sm:space-y-20">
					<!-- Overview -->
					<section>
						<div class="grid gap-6 sm:grid-cols-[120px_1fr] sm:gap-10">
							<div>
								<p
									class="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
								>
									01
								</p>
							</div>

							<div>
								<h2
									class="text-3xl font-semibold leading-none tracking-[-0.045em] sm:text-4xl"
								>
									Programme overview
								</h2>

								<p
									class="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
								>
									{programme.overview}
								</p>
							</div>
						</div>
					</section>

					<!-- Entry requirements -->
					<section>
						<div class="grid gap-6 sm:grid-cols-[120px_1fr] sm:gap-10">
							<div>
								<p
									class="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
								>
									02
								</p>
							</div>

							<div>
								<h2
									class="text-3xl font-semibold leading-none tracking-[-0.045em] sm:text-4xl"
								>
									Entry requirements
								</h2>

								<div class="mt-7 border-t">
									{#each programme.requirements as requirement, index}
										<div
											class="grid gap-4 border-b py-5 sm:grid-cols-[40px_1fr] sm:py-6"
										>
											<span
												class="font-mono text-[9px] text-muted-foreground sm:text-[10px]"
											>
												{String(index + 1).padStart(2, '0')}
											</span>

											<p
												class="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7"
											>
												{requirement}
											</p>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</section>

					<!-- Career paths -->
					<section>
						<div class="grid gap-6 sm:grid-cols-[120px_1fr] sm:gap-10">
							<div>
								<p
									class="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
								>
									03
								</p>
							</div>

							<div>
								<h2
									class="text-3xl font-semibold leading-none tracking-[-0.045em] sm:text-4xl"
								>
									Career paths
								</h2>

								<div class="mt-7 border-t">
									{#each programme.careerPaths as career, index}
										<a
											href="/academics/programmes"
											class="group flex items-center justify-between border-b py-5 sm:py-6"
										>
											<div class="flex items-center gap-5">
												<span
													class="font-mono text-[9px] text-muted-foreground sm:text-[10px]"
												>
													{String(index + 1).padStart(2, '0')}
												</span>

												<span
													class="text-sm font-medium tracking-tight sm:text-base"
												>
													{career}
												</span>
											</div>

											<ArrowRight
												class="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground"
											/>
										</a>
									{/each}
								</div>
							</div>
						</div>
					</section>
				</div>

				<!-- ====================================================
					PROGRAMME INFORMATION
				==================================================== -->

				<aside class="lg:sticky lg:top-32 lg:self-start">
					<div class="border-t">
						<div class="border-b py-5">
							<p
								class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
							>
								Programme information
							</p>

							<p
								class="mt-2 text-sm leading-5 text-muted-foreground"
							>
								Key details about this programme.
							</p>
						</div>

						<div class="divide-y">
							<div class="py-5">
								<p
									class="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
								>
									Degree type
								</p>

								<p class="mt-2 text-sm font-semibold">
									{programme.degree}
								</p>
							</div>

							<div class="py-5">
								<p
									class="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
								>
									Faculty
								</p>

								<p class="mt-2 text-sm font-semibold">
									{programme.faculty}
								</p>
							</div>

							<div class="py-5">
								<p
									class="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
								>
									Duration
								</p>

								<p class="mt-2 font-mono text-sm font-semibold">
									{programme.duration}
								</p>
							</div>
						</div>

						<a
							href="/admissions/how-to-apply"
							class="group mt-5 flex h-12 w-full items-center justify-between bg-foreground px-5 text-[10px] font-bold uppercase tracking-[0.1em] text-background transition-colors hover:bg-primary hover:text-primary-foreground"
						>
							Apply to this programme

							<ArrowUpRight
								class="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					</div>
				</aside>
			</div>
		</div>
	</section>

	<!-- ============================================================
		RELATED NAVIGATION
	============================================================ -->

	<section class="border-b">
		<div
			class="container mx-auto px-5 py-12 sm:py-16 lg:px-6 lg:py-20"
		>
			<div
				class="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
			>
				<div>
					<p
						class="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
					>
						Explore further
					</p>

					<p
						class="mt-2 text-base font-medium tracking-tight sm:text-lg"
					>
						Discover more from MMU.
					</p>
				</div>

				<a
					href="/academics/programmes"
					class="group inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.1em] sm:text-xs"
				>
					View all programmes

					<ArrowRight
						class="ml-3 size-4 transition-transform duration-200 group-hover:translate-x-1"
					/>
				</a>
			</div>
		</div>
	</section>
</main>

<!-- ============================================================
	CTA
============================================================ -->

<section>
	<div
		class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-32"
	>
		<CTASection
			eyebrow="Next step"
			title="Ready to apply?"
			description="Learn more about the application process, admission requirements and what you need to begin your application."
			primaryAction={{
				label: 'How to apply',
				href: '/admissions/how-to-apply'
			}}
			secondaryAction={{
				label: 'View all programmes',
				href: '/academics/programmes'
			}}
		/>
	</div>
</section>