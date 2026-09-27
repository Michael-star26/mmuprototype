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


<!-- =========================================================
     PROGRAMME CONTENT
========================================================= -->


<section class="border-b border-border/60">

	<div class="mx-auto max-w-[1440px] px-6 py-16 md:py-28">


		<div class="grid gap-14 lg:grid-cols-[1fr_320px] lg:gap-24">


			<div class="space-y-20">



				<!-- =================================================
				     SNAPSHOT
				================================================== -->


				<section>

					<div class="grid gap-8 md:grid-cols-[120px_1fr]">


						<div>

							<p
								class="
								flex items-center gap-3
								font-mono text-[9px]
								font-semibold uppercase
								tracking-[0.16em]
								text-accent
								"
							>

								<span class="h-px w-3 bg-accent"></span>

								01 / Snapshot

							</p>

						</div>



						<div>


							<h2
								class="
								text-3xl font-semibold
								tracking-[-0.045em]
								text-foreground
								sm:text-4xl
								"
							>
								Programme details
							</h2>



							<div
								class="
								mt-8 grid
								border-y border-border/60
								sm:grid-cols-2
								"
							>


								<div
									class="
									border-b border-border/60
									py-6
									sm:border-r
									sm:pr-8
									"
								>

									<p
										class="
										text-[9px]
										font-bold uppercase
										tracking-[0.14em]
										text-muted-foreground
										"
									>
										Degree type
									</p>


									<p
										class="
										mt-3 text-sm
										font-medium
										text-foreground
										"
									>
										{programme.degree}
									</p>

								</div>



								<div
									class="
									border-b border-border/60
									py-6
									sm:pl-8
									"
								>

									<p
										class="
										text-[9px]
										font-bold uppercase
										tracking-[0.14em]
										text-muted-foreground
										"
									>
										Duration
									</p>


									<p
										class="
										mt-3 font-mono
										text-sm
										text-foreground
										"
									>
										{programme.duration}
									</p>

								</div>



								<div
									class="
									py-6
									sm:border-r
									sm:pr-8
									"
								>

									<p
										class="
										text-[9px]
										font-bold uppercase
										tracking-[0.14em]
										text-muted-foreground
										"
									>
										Faculty
									</p>


									<p
										class="
										mt-3 text-sm
										font-medium
										text-foreground
										"
									>
										{programme.faculty}
									</p>

								</div>



								<div
									class="
									py-6
									sm:pl-8
									"
								>

									<p
										class="
										text-[9px]
										font-bold uppercase
										tracking-[0.14em]
										text-muted-foreground
										"
									>
										Level
									</p>


									<p
										class="
										mt-3 text-sm
										font-medium
										text-foreground
										"
									>
										{programme.level}
									</p>

								</div>


							</div>


						</div>


					</div>

				</section>





				<!-- =================================================
				     OVERVIEW
				================================================== -->


				<section>

					<div class="grid gap-8 md:grid-cols-[120px_1fr]">


						<div>

							<p
								class="
								flex items-center gap-3
								font-mono text-[9px]
								font-semibold uppercase
								tracking-[0.16em]
								text-accent
								"
							>

								<span class="h-px w-3 bg-accent"></span>

								02 / Overview

							</p>


						</div>



						<div>


							<h2
								class="
								text-3xl font-semibold
								tracking-[-0.045em]
								text-foreground
								sm:text-4xl
								"
							>
								Programme overview
							</h2>



							<p
								class="
								mt-6 max-w-3xl
								text-sm leading-7
								text-muted-foreground
								sm:text-base
								sm:leading-8
								"
							>
								{programme.overview}
							</p>


						</div>


					</div>


				</section>

				
				<!-- =================================================
				     ENTRY REQUIREMENTS
				================================================== -->


				<section>

					<div class="grid gap-8 md:grid-cols-[120px_1fr]">


						<div>

							<p
								class="
								flex items-center gap-3
								font-mono text-[9px]
								font-semibold uppercase
								tracking-[0.16em]
								text-accent
								"
							>

								<span class="h-px w-3 bg-accent"></span>

								03 / Requirements

							</p>

						</div>



						<div>


							<h2
								class="
								text-3xl font-semibold
								tracking-[-0.045em]
								text-foreground
								sm:text-4xl
								"
							>
								Entry requirements
							</h2>



							<div
								class="
								mt-8 border-t
								border-border/60
								"
							>


								{#each programme.requirements as requirement, index}

									<div
										class="
										grid gap-5
										border-b border-border/60
										py-6
										sm:grid-cols-[40px_1fr]
										"
									>

										<span
											class="
											font-mono text-[10px]
											text-muted-foreground
											"
										>
											{String(index + 1).padStart(2,'0')}
										</span>


										<p
											class="
											text-sm leading-7
											text-muted-foreground
											sm:text-base
											"
										>
											{requirement}
										</p>


									</div>


								{/each}


							</div>


						</div>


					</div>

				</section>





				<!-- =================================================
				     CAREER PATHS
				================================================== -->


				<section>

					<div class="grid gap-8 md:grid-cols-[120px_1fr]">


						<div>

							<p
								class="
								flex items-center gap-3
								font-mono text-[9px]
								font-semibold uppercase
								tracking-[0.16em]
								text-accent
								"
							>

								<span class="h-px w-3 bg-accent"></span>

								04 / Careers

							</p>


						</div>



						<div>


							<h2
								class="
								text-3xl font-semibold
								tracking-[-0.045em]
								text-foreground
								sm:text-4xl
								"
							>
								Career paths
							</h2>



							<div
								class="
								mt-8 border-t
								border-border/60
								"
							>


								{#each programme.careerPaths as career, index}


									<a
										href="/academics/programmes"
										class="
										group flex items-center
										justify-between
										border-b border-border/60
										py-6
										transition-colors
										"
									>


										<div class="flex items-center gap-6">


											<span
												class="
												font-mono text-[10px]
												text-muted-foreground
												"
											>
												{String(index + 1).padStart(2,'0')}
											</span>



											<span
												class="
												text-sm font-medium
												tracking-tight
												text-foreground
												transition-colors
												group-hover:text-primary
												sm:text-base
												"
											>
												{career}
											</span>


										</div>



										<ArrowRight
											class="
											size-4
											text-muted-foreground
											transition-transform
											group-hover:translate-x-1
											group-hover:text-accent
											"
										/>


									</a>


								{/each}


							</div>


						</div>


					</div>


				</section>



			</div>





			<!-- ====================================================
			     SIDEBAR
			==================================================== -->


			<aside
				class="
				lg:sticky
				lg:top-32
				lg:self-start
				"
			>


				<div
					class="
					border-y border-border/60
					"
				>


					<div
						class="
						border-b border-border/60
						py-6
						"
					>


						<p
							class="
							flex items-center gap-2
							text-[9px]
							font-bold uppercase
							tracking-[0.16em]
							text-accent
							"
						>

							<span class="h-px w-3 bg-accent"></span>

							Programme information

						</p>


						<p
							class="
							mt-3 text-sm
							leading-6
							text-muted-foreground
							"
						>
							Essential information about this programme.
						</p>


					</div>




					<div class="divide-y divide-border/60">


						<div class="py-6">

							<p
								class="
								text-[9px]
								font-bold uppercase
								tracking-[0.14em]
								text-muted-foreground
								"
							>
								Award
							</p>


							<p
								class="
								mt-3 text-sm
								font-medium
								text-foreground
								"
							>
								{programme.degree}
							</p>

						</div>




						<div class="py-6">

							<p
								class="
								text-[9px]
								font-bold uppercase
								tracking-[0.14em]
								text-muted-foreground
								"
							>
								Faculty
							</p>


							<p
								class="
								mt-3 text-sm
								font-medium
								text-foreground
								"
							>
								{programme.faculty}
							</p>

						</div>




						<div class="py-6">

							<p
								class="
								text-[9px]
								font-bold uppercase
								tracking-[0.14em]
								text-muted-foreground
								"
							>
								Duration
							</p>


							<p
								class="
								mt-3 font-mono
								text-sm
								text-foreground
								"
							>
								{programme.duration}
							</p>

						</div>



					</div>




					<a
						href="/admissions/how-to-apply"
						class="
						group mt-6 flex h-12
						items-center justify-between
						border border-primary
						px-5
						text-[10px]
						font-bold uppercase
						tracking-[0.12em]
						text-primary
						transition-colors
						hover:bg-primary
						hover:text-primary-foreground
						"
					>

						Apply to this programme


						<ArrowUpRight
							class="
							size-4
							transition-transform
							group-hover:translate-x-1
							group-hover:-translate-y-1
							"
						/>


					</a>



				</div>


			</aside>


		</div>


	</div>


</section>
</main>