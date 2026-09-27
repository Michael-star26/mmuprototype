<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Users from '@lucide/svelte/icons/users';
	import Trophy from '@lucide/svelte/icons/trophy';
	import Building2 from '@lucide/svelte/icons/building-2';
	import Sparkles from '@lucide/svelte/icons/sparkles';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
</script>

<svelte:head>
	<title>Campus Life | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Discover student experiences, clubs, societies, facilities and opportunities that shape life at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Campus Life"
	title="Beyond the Classroom"
	description="University is more than lectures and examinations. Discover the communities, activities and experiences that make MMU student life memorable."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Campus Life' }
	]}
	actions={[
		{
			label: 'Explore Student Activities',
			href: '/campus-life/clubs-and-societies'
		},
		{
			label: 'Contact MMU',
			href: '/contact',
			variant: 'outline'
		}
	]}
/>


<main>

	<!-- Introduction -->
	<section class="border-b border-border/60">
		<div class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28">

			<div class="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">

				<div>
					<p
						class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent"
					>
						<span class="h-px w-5 bg-accent"></span>
						01 / Student experience
					</p>

					<h2
						class="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl"
					>
						Learn. Connect. Create.
					</h2>
				</div>


				<div class="max-w-3xl">

					<p
						class="text-lg leading-8 text-muted-foreground"
					>
						At Multimedia University of Kenya, campus life provides
						students with opportunities to discover new interests,
						develop leadership skills and build meaningful
						connections beyond academic programmes.
					</p>

					<div
						class="mt-10 grid gap-px border border-border/60 bg-border/60 sm:grid-cols-3"
					>

						<div class="bg-background p-6">
							<div
								class="flex size-10 items-center justify-center border border-primary bg-primary text-primary-foreground"
							>
								<Users class="size-4" />
							</div>

							<h3
								class="mt-6 text-sm font-bold uppercase tracking-[0.12em]"
							>
								Student Community
							</h3>

							<p
								class="mt-3 text-sm leading-6 text-muted-foreground"
							>
								Connect through societies, clubs and shared
								student interests.
							</p>
						</div>


						<div class="bg-background p-6">

							<div
								class="flex size-10 items-center justify-center border border-primary bg-primary text-primary-foreground"
							>
								<Trophy class="size-4" />
							</div>

							<h3
								class="mt-6 text-sm font-bold uppercase tracking-[0.12em]"
							>
								Sports & Recreation
							</h3>

							<p
								class="mt-3 text-sm leading-6 text-muted-foreground"
							>
								Participate in sporting activities and
								recreational programmes.
							</p>

						</div>


						<div class="bg-background p-6">

							<div
								class="flex size-10 items-center justify-center border border-primary bg-primary text-primary-foreground"
							>
								<Building2 class="size-4" />
							</div>

							<h3
								class="mt-6 text-sm font-bold uppercase tracking-[0.12em]"
							>
								Campus Spaces
							</h3>

							<p
								class="mt-3 text-sm leading-6 text-muted-foreground"
							>
								Explore facilities designed for learning,
								collaboration and creativity.
							</p>

						</div>

					</div>

				</div>

			</div>

		</div>
	</section>
		<!-- STUDENT ACTIVITIES -->
		<section class="border-b border-border/60">

			<div
				class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28"
			>
	
				<div
					class="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20"
				>
	
	
					<div>
	
						<p
							class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent"
						>
							<span class="h-px w-5 bg-accent"></span>
	
							02 / Student activities
						</p>
	
	
						<h2
							class="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl"
						>
							Find your community.
						</h2>
	
	
						<p
							class="mt-5 max-w-[240px] text-sm leading-7 text-muted-foreground"
						>
							Engage with communities that support creativity,
							leadership and collaboration.
						</p>
	
	
					</div>
	
	
	
	
					<div>
	
	
						<div
							class="border-t border-border/60"
						>
	
	
							<!-- Clubs -->
	
							<a
								href="/campus-life/clubs-and-societies"
								class="group grid gap-5 border-b border-border/60 py-8 sm:grid-cols-[72px_1fr_32px] sm:items-start sm:gap-8"
							>
	
								<span
									class="font-mono text-xs font-bold text-primary"
								>
									01
								</span>
	
	
								<div>
	
									<h3
										class="text-xl font-semibold tracking-[-0.03em] text-foreground transition-colors group-hover:text-primary sm:text-2xl"
									>
										Clubs & Societies
									</h3>
	
	
									<p
										class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground"
									>
										Join student-led communities, pursue
										shared interests and develop skills
										through collaboration outside the
										classroom.
									</p>
	
	
								</div>
	
	
								<ArrowRight
									class="mt-1 size-5 text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary"
								/>
	
	
							</a>
	
	
	
	
	
							<!-- Sports -->
	
							<div
								class="group grid gap-5 border-b border-border/60 py-8 sm:grid-cols-[72px_1fr_32px] sm:items-start sm:gap-8"
							>
	
								<span
									class="font-mono text-xs font-bold text-primary"
								>
									02
								</span>
	
	
								<div>
	
									<h3
										class="text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl"
									>
										Sports & Recreation
									</h3>
	
	
									<p
										class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground"
									>
										Stay active through sporting activities,
										competitions and recreational programmes
										that encourage teamwork and wellbeing.
									</p>
	
	
								</div>
	
	
								<Trophy
									class="mt-1 size-5 text-muted-foreground transition-colors group-hover:text-primary"
								/>
	
	
							</div>
	
	
	
	
	
	
							<!-- Facilities -->
	
							<div
								class="group grid gap-5 py-8 sm:grid-cols-[72px_1fr_32px] sm:items-start sm:gap-8"
							>
	
								<span
									class="font-mono text-xs font-bold text-primary"
								>
									03
								</span>
	
	
								<div>
	
									<h3
										class="text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl"
									>
										Campus Facilities
									</h3>
	
	
									<p
										class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground"
									>
										Discover spaces designed for academic
										success, innovation, recreation and
										student interaction.
									</p>
	
	
								</div>
	
	
								<Building2
									class="mt-1 size-5 text-muted-foreground transition-colors group-hover:text-primary"
								/>
	
	
							</div>
	
	
						</div>
	
	
	
	
						<div
							class="mt-10 flex flex-col gap-5 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between"
						>
	
							<div>
	
								<p
									class="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground"
								>
									Get involved
								</p>
	
	
								<p
									class="mt-2 text-sm font-medium text-foreground"
								>
									Discover activities that match your interests.
								</p>
	
							</div>
	
	
	
							<a
								href="/campus-life/clubs-and-societies"
								class="group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent"
							>
	
								View student activities
	
	
								<ArrowUpRight
									class="ml-2 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								/>
	
							</a>
	
	
						</div>
	
	
					</div>
	
	
				</div>
	
			</div>
	
		</section>
			<!-- COMMUNITY SECTION -->
	<section class="border-b border-border/60">

		<div
			class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28"
		>

			<div
				class="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20"
			>


				<div>

					<p
						class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent"
					>
						<span class="h-px w-5 bg-accent"></span>

						03 / Community
					</p>

				</div>



				<div
					class="border-l border-border/60 pl-6 sm:pl-10"
				>

					<Users
						class="size-5 text-accent"
					/>


					<h2
						class="mt-6 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-5xl"
					>
						A campus experience shaped by people,
						ideas and connections.
					</h2>



					<p
						class="mt-6 max-w-2xl text-base leading-8 text-muted-foreground"
					>
						Life at MMU extends beyond academic programmes.
						Students have opportunities to collaborate,
						participate in activities, develop leadership
						abilities and create lasting relationships.
					</p>




					<div
						class="mt-10 grid gap-6 sm:grid-cols-2"
					>

						<div
							class="border-t border-border/60 pt-6"
						>

							<h3
								class="text-sm font-bold uppercase tracking-[0.12em] text-foreground"
							>
								Creative environment
							</h3>


							<p
								class="mt-3 text-sm leading-7 text-muted-foreground"
							>
								A space where students can explore
								technology, media, innovation and
								creative expression.
							</p>


						</div>



						<div
							class="border-t border-border/60 pt-6"
						>

							<h3
								class="text-sm font-bold uppercase tracking-[0.12em] text-foreground"
							>
								Student growth
							</h3>


							<p
								class="mt-3 text-sm leading-7 text-muted-foreground"
							>
								Opportunities to build confidence,
								leadership skills and professional
								connections.
							</p>


						</div>


					</div>


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
				eyebrow="04 / Student life"
				title="Discover your place at MMU."
				description="Explore student activities, connect with communities and experience university life beyond the classroom."
				primaryAction={{
					label: 'Explore clubs & societies',
					href: '/campus-life/clubs-and-societies'
				}}
				secondaryAction={{
					label: 'Contact MMU',
					href: '/contact'
				}}
			/>

		</div>

	</section>


</main>