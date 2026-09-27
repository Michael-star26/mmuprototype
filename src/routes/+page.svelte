<script lang="ts">
    import ArrowRight from '@lucide/svelte/icons/arrow-right';
    import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
    import BookOpen from '@lucide/svelte/icons/book-open';
    import GraduationCap from '@lucide/svelte/icons/graduation-cap';
    import FlaskConical from '@lucide/svelte/icons/flask-conical';

    import CTASection from '$lib/components/shared/CTASection.svelte';

    import { news } from '$lib/data/news';
    import { events } from '$lib/data/events';
    import { programmes } from '$lib/data/programmes';

    const exploreLinks = [
        {
            number: '01',
            label: 'Study at MMU',
            href: '/academics/programmes'
        },
        {
            number: '02',
            label: 'Research & innovation',
            href: '/research'
        },
        {
            number: '03',
            label: 'Campus life',
            href: '/campus-life'
        }
    ];

    const studyLinks = [
        {
            number: '01',
            title: 'Academic programmes',
            description:
                "Explore undergraduate and postgraduate programmes across the university's schools and disciplines.",
            href: '/academics/programmes'
        },
        {
            number: '02',
            title: 'Admissions',
            description:
                'Understand entry requirements, applications, deadlines and what happens after you apply.',
            href: '/admissions'
        },
        {
            number: '03',
            title: 'Fees & funding',
            description:
                'Find the financial information and resources you need to plan for university.',
            href: '/resources'
        }
    ];

    const researchLinks = [
        {
            number: '01',
            title: 'Research centres',
            description:
                'Discover the research ecosystem across the university.',
            href: '/research'
        },
        {
            number: '02',
            title: 'Innovation',
            description:
                'Explore ideas moving from research into practice.',
            href: '/research'
        },
        {
            number: '03',
            title: 'Partnerships',
            description:
                'Connect research with industry, communities and collaborators.',
            href: '/research'
        }
    ];

    const campusLinks = [
        {
            title: 'Student life',
            description: 'Clubs, communities, events and experiences.',
            href: '/campus-life'
        },
        {
            title: 'Our campus',
            description: 'Spaces for learning, collaboration and connection.',
            href: '/campus-life'
        },
        {
            title: 'Community',
            description: 'Meet the people who make MMU what it is.',
            href: '/campus-life'
        }
    ];

    const programmeCount = programmes.length;

    const faculties = new Set(
        programmes.map((programme) => programme.faculty)
    ).size;

    const featuredProgrammes = programmes.slice(0, 5);
</script>

<svelte:head>
    <title>Multimedia University of Kenya</title>

    <meta
        name="description"
        content="Discover programmes, research, innovation, campus life and opportunities at Multimedia University of Kenya."
    />
</svelte:head>

<!-- hero section -->
<section
	class="relative isolate h-[calc(100svh-64px)] min-h-[680px] overflow-hidden bg-[#0b0b0b] text-white lg:h-[calc(100svh-72px)]"
>
	<!-- ============================================================
	     MASONRY IMAGE FIELD
	============================================================ -->

	<div class="absolute inset-0">
		<!-- ========================================================
		     PRIMARY LEFT PLANE
		========================================================= -->

		<div
			class="absolute left-0 top-0 h-[70%] w-[49%] overflow-hidden sm:h-[74%] sm:w-[44%] lg:h-[80%] lg:w-[39%]"
		>
			<div class="carousel-image absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=90"
					alt=""
					class="h-full w-full object-cover"
				/>
			</div>

			<div class="carousel-image carousel-image-2 absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1800&q=90"
					alt=""
					class="h-full w-full object-cover"
				/>
			</div>

			<div class="carousel-image carousel-image-3 absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1800&q=90"
					alt=""
					class="h-full w-full object-cover"
				/>
			</div>

			<div class="absolute inset-0 bg-black/20"></div>
		</div>

		<!-- ========================================================
		     UPPER RIGHT PLANE
		========================================================= -->

		<div
			class="absolute right-0 top-0 h-[49%] w-[47%] overflow-hidden sm:h-[54%] sm:w-[32%] lg:h-[58%] lg:w-[27%]"
		>
			<div class="carousel-image absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90"
					alt=""
					class="h-full w-full object-cover"
				/>
			</div>

			<div class="carousel-image carousel-image-2 absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=90"
					alt=""
					class="h-full w-full object-cover"
				/>
			</div>

			<div class="carousel-image carousel-image-3 absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1400&q=90"
					alt=""
					class="h-full w-full object-cover"
				/>
			</div>

			<div class="absolute inset-0 bg-black/25"></div>
		</div>

		<!-- ========================================================
		     CENTRAL MASONRY FRAGMENT
		========================================================= -->

		<div
			class="absolute bottom-[13%] left-[37%] hidden h-[38%] w-[18%] overflow-hidden sm:block lg:bottom-[13%] lg:left-[31%] lg:h-[44%] lg:w-[13%]"
		>
			<div class="carousel-image absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=90"
					alt=""
					class="h-full w-full object-cover grayscale-[15%]"
				/>
			</div>

			<div class="carousel-image carousel-image-2 absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=90"
					alt=""
					class="h-full w-full object-cover grayscale-[15%]"
				/>
			</div>

			<div class="carousel-image carousel-image-3 absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=90"
					alt=""
					class="h-full w-full object-cover grayscale-[15%]"
				/>
			</div>
		</div>

		<!-- ========================================================
		     LOWER RIGHT PLANE
		========================================================= -->

		<div
			class="absolute bottom-0 right-0 h-[43%] w-[45%] overflow-hidden sm:h-[40%] sm:w-[35%] lg:h-[43%] lg:w-[30%]"
		>
			<div class="carousel-image absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1500&q=90"
					alt=""
					class="h-full w-full object-cover"
				/>
			</div>

			<div class="carousel-image carousel-image-2 absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=90"
					alt=""
					class="h-full w-full object-cover"
				/>
			</div>

			<div class="carousel-image carousel-image-3 absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1500&q=90"
					alt=""
					class="h-full w-full object-cover"
				/>
			</div>

			<div class="absolute inset-0 bg-black/25"></div>
		</div>

		<!-- ========================================================
		     SMALL LOWER-LEFT FRAGMENT
		========================================================= -->

		<div
			class="absolute bottom-[4%] left-[16%] hidden h-[19%] w-[16%] overflow-hidden md:block lg:left-[18%] lg:h-[22%] lg:w-[10%]"
		>
			<div class="carousel-image absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=90"
					alt=""
					class="h-full w-full object-cover grayscale-[20%]"
				/>
			</div>

			<div class="carousel-image carousel-image-2 absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=90"
					alt=""
					class="h-full w-full object-cover grayscale-[20%]"
				/>
			</div>

			<div class="carousel-image carousel-image-3 absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=90"
					alt=""
					class="h-full w-full object-cover grayscale-[20%]"
				/>
			</div>
		</div>

		<!-- ========================================================
		     CINEMATIC WASH
		========================================================= -->

		<div
			class="absolute inset-0 bg-gradient-to-br from-black/[0.88] via-black/[0.34] to-black/[0.72]"
		></div>

		<div
			class="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black/25"
		></div>

		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_43%_47%,transparent_0%,rgba(0,0,0,.08)_30%,rgba(0,0,0,.7)_100%)]"
		></div>

		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(111,255,156,.07),transparent_28%)]"
		></div>
	</div>

	<!-- ============================================================
	     EDITORIAL FRAME
	============================================================ -->

	<div
		class="pointer-events-none absolute inset-4 sm:inset-6 lg:inset-8"
	>
		<div class="absolute -left-px top-0 h-16 w-px bg-accent"></div>

		<div class="absolute bottom-0 -right-px h-16 w-px bg-accent"></div>

		<div
			class="absolute right-0 top-[42%] hidden h-px w-16 bg-white/20 lg:block"
		></div>
	</div>

	<!-- ============================================================
	     HERO CONTENT
	============================================================ -->

	<div
		class="relative z-10 flex h-full flex-col px-5 sm:px-8 lg:px-12"
	>
		<!-- ========================================================
		     MICRO EDITORIAL RAIL
		     The header already carries the institution name.
		     This now carries contextual information instead.
		========================================================= -->

		<div
			class="flex shrink-0 items-center justify-between border-b border-white/15 py-4 sm:py-5"
		>
			<div class="flex items-center gap-3 sm:gap-4">
				<span class="h-px w-7 bg-accent sm:w-10"></span>

				<span
					class="font-mono text-[8px] uppercase tracking-[0.22em] text-white/50 sm:text-[9px]"
				>
					Nairobi · Kenya
				</span>

				<span class="hidden h-3 w-px bg-white/20 sm:block"></span>

				<span
					class="hidden text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35 sm:block"
				>
					Technology · Creativity · Research
				</span>
			</div>

			<div class="flex items-center gap-4">
				<span
					class="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-white/30 sm:block"
				>
					Est. 2008
				</span>

				<span class="h-3 w-px bg-white/20"></span>

				<span
					class="font-mono text-[8px] tracking-[0.18em] text-accent"
				>
					01 / 03
				</span>
			</div>
		</div>

		<!-- ========================================================
		     MAIN TYPOGRAPHIC COMPOSITION
		========================================================= -->

		<div class="relative flex min-h-0 flex-1 items-center">
			<div class="relative w-full">
				<!-- Vertical editorial annotation -->
				<div
					class="absolute -left-1 top-2 hidden -translate-x-full pr-6 lg:block"
				>
					<div
						class="writing-mode-vertical rotate-180 font-mono text-[8px] uppercase tracking-[0.25em] text-white/30"
					>
						Multimedia University of Kenya
					</div>
				</div>

				<!-- Small section identifier -->
				<div class="mb-5 flex items-center gap-3 sm:mb-7">
					<span
						class="font-mono text-[8px] font-semibold tracking-[0.2em] text-accent"
					>
						MMU / 01
					</span>

					<span class="h-px w-8 bg-white/20"></span>

					<span
						class="text-[8px] font-bold uppercase tracking-[0.25em] text-white/40"
					>
						The future is built here
					</span>
				</div>

				<!-- =================================================
				     SKEWED HERO TYPE
				================================================== -->

				<h1
					class="max-w-[1200px] text-[clamp(4rem,13vw,11rem)] font-semibold leading-[0.74] tracking-[-0.085em]"
				>
					<span class="relative inline-block">
						Shape

						<span
							class="absolute -bottom-[0.01em] left-[0.04em] h-[0.025em] w-[2.2em] -skew-x-12 bg-accent"
						></span>
					</span>

					<span class="relative ml-[7vw] inline-block">
						what

						<span
							class="absolute -right-4 top-[14%] hidden h-[0.55em] w-px bg-accent sm:block"
						></span>
					</span>

					<br />

					<span
						class="relative ml-[3vw] inline-block skew-x-[-4deg] text-white/90 sm:ml-[5vw]"
					>
						comes next.
					</span>
				</h1>

				<!-- =================================================
				     DESCRIPTION RAIL
				================================================== -->

				<div
					class="mt-8 grid max-w-4xl border-y border-white/20 sm:mt-10 sm:grid-cols-[1fr_auto]"
				>
					<div
						class="border-b border-white/15 py-5 pr-6 sm:py-6 sm:pr-10 lg:border-b-0 lg:border-r"
					>
						<p
							class="max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7 lg:text-[16px]"
						>
							A university built around technology, creativity,
							research and the people shaping tomorrow.
						</p>
					</div>

					<div class="flex items-center gap-4 py-4 sm:px-6">
						<div>
							<span
								class="block text-[8px] font-bold uppercase tracking-[0.2em] text-white/30"
							>
								Discover
							</span>

							<span
								class="mt-1 block font-mono text-[8px] text-accent"
							>
								01 — 03
							</span>
						</div>

						<a
							href="/academics/programmes"
							aria-label="Explore programmes"
							class="group flex size-10 items-center justify-center border-l border-white/20 pl-3 transition-colors hover:text-accent"
						>
							<ArrowUpRight
								class="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
							/>
						</a>
					</div>
				</div>

				<!-- =================================================
				     ACTIONS
				================================================== -->

				<div
					class="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4"
				>
					<a
						href="/academics/programmes"
						class="group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.12em]"
					>
						<span
							class="mr-3 h-px w-8 bg-accent transition-all duration-300 group-hover:w-12"
						></span>

						Explore programmes

						<ArrowUpRight
							class="ml-2 size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</a>

					<a
						href="/admissions"
						class="text-[10px] font-bold uppercase tracking-[0.12em] text-white/45 transition-colors hover:text-white"
					>
						Admissions
					</a>
				</div>
			</div>
		</div>

		<!-- ========================================================
		     BOTTOM INFORMATION TABLE
		========================================================= -->

		<div
			class="grid shrink-0 border-t border-white/20 lg:grid-cols-[150px_1fr_150px]"
		>
			<!-- Section label -->
			<div
				class="hidden items-center border-r border-white/15 pr-7 lg:flex"
			>
				<div>
					<span
						class="block font-mono text-[8px] font-semibold tracking-[0.2em] text-accent"
					>
						EXPLORE_M​MU
					</span>

					<span
						class="mt-1 block text-[8px] uppercase tracking-[0.15em] text-white/25"
					>
						Navigation
					</span>
				</div>
			</div>

			<!-- Navigation -->
			<div class="grid grid-cols-3">
				{#each exploreLinks as item}
					<a
						href={item.href}
						class="group relative flex min-h-[62px] items-center justify-between px-3 transition-colors duration-300 hover:bg-white/5 sm:min-h-[68px] sm:px-5 lg:px-6"
					>
						{#if item.number !== '01'}
							<span
								class="absolute left-0 top-1/2 h-7 -translate-y-1/2 border-l border-white/15"
							></span>
						{/if}

						<div>
							<span
								class="block font-mono text-[8px] text-accent"
							>
								{item.number}
							</span>

							<span
								class="mt-1 block max-w-[140px] text-[9px] font-medium leading-4 text-white/65 transition-colors group-hover:text-white sm:text-[10px]"
							>
								{item.label}
							</span>
						</div>

						<ArrowRight
							class="hidden size-3.5 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent sm:block"
						/>
					</a>
				{/each}
			</div>

			<!-- Carousel indicator -->
			<div
				class="hidden items-center justify-end gap-4 border-l border-white/15 pl-7 lg:flex"
			>
				<div class="flex items-center gap-1.5">
					<span class="h-px w-10 bg-accent"></span>
					<span class="h-px w-3 bg-white/25"></span>
					<span class="h-px w-3 bg-white/25"></span>
				</div>

				<span
					class="font-mono text-[8px] tracking-[0.15em] text-white/30"
				>
					01
				</span>
			</div>
		</div>
	</div>

	<!-- ============================================================
	     NATIVE AUTOPLAY
	============================================================ -->

	<style>
		.writing-mode-vertical {
			writing-mode: vertical-rl;
		}

		/*
		 * DEV:
		 * 2.4 seconds per composition.
		 *
		 * Production recommendation:
		 * change the three timing values to something slower,
		 * e.g. 7s / 14s / 21s.
		 */

		.carousel-image {
			opacity: 1;
			animation: masonry-carousel 7.2s infinite;
		}

		.carousel-image-2 {
			opacity: 0;
			animation-delay: 2.4s;
		}

		.carousel-image-3 {
			opacity: 0;
			animation-delay: 4.8s;
		}

		@keyframes masonry-carousel {
			0%,
			27% {
				opacity: 1;
			}

			33%,
			94% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@media (prefers-reduced-motion: reduce) {
			.carousel-image,
			.carousel-image-2,
			.carousel-image-3 {
				animation: none;
			}

			.carousel-image-2,
			.carousel-image-3 {
				opacity: 0;
			}
		}
	</style>
</section>


<!-- Study -->

<section class="relative overflow-hidden bg-surface-red">
	<div class="container mx-auto px-5 py-20 sm:py-28 lg:px-6 lg:py-36">
		<div class="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
			<!-- Intro -->
			<div class="relative lg:sticky lg:top-32 lg:self-start">
				<div class="flex items-center gap-3">
					<span class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent">
						01
					</span>

					<span class="h-px w-10 bg-foreground/20"></span>

					<span class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
						Study
					</span>
				</div>

				<h2
					class="mt-8 max-w-lg text-[clamp(4rem,7vw,7rem)] font-semibold leading-[0.78] tracking-[-0.085em]"
				>
					Find
					<br />
					<span class="ml-[0.18em] text-primary">
						a direction.
					</span>
				</h2>

				<p class="mt-8 max-w-sm text-sm leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">
					Whether you know exactly what you want to study or
					are still exploring, start with the information that
					matters.
				</p>

				<a
					href="/academics/programmes"
					class="group mt-9 inline-flex items-center border-b border-foreground/25 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:border-accent hover:text-accent"
				>
					View all programmes

					<ArrowRight
						class="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1"
					/>
				</a>

				<span
					class="pointer-events-none absolute -left-8 top-0 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground/35 lg:block"
					style="writing-mode: vertical-rl; transform: rotate(180deg);"
				>
					Academic pathways · MMU
				</span>
			</div>

			<!-- Programme index -->
			<div>
				<div class="flex items-end justify-between border-b border-foreground/15 pb-4">
					<div>
						<span class="font-mono text-[8px] font-semibold tracking-[0.2em] text-accent">
							EXPLORE
						</span>
						<p class="mt-1 text-xs text-muted-foreground">
							Start with what interests you
						</p>
					</div>

					<span class="font-mono text-[8px] text-muted-foreground/50">
						{String(studyLinks.length).padStart(2, '0')} PATHS
					</span>
				</div>

				<div>
					{#each studyLinks as item, index}
						<a
							href={item.href}
							class="group relative block border-b border-foreground/15 py-8 transition-colors duration-300 sm:py-10 lg:py-12"
						>
							<div
								class="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100"
							></div>

							<div class="grid gap-5 pl-4 sm:grid-cols-[72px_1fr_auto] sm:gap-7 sm:pl-5">
								<div>
									<span class="font-mono text-[10px] font-semibold tracking-[0.16em] text-accent">
										{item.number}
									</span>
								</div>

								<div>
									<h3
										class="text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-1"
									>
										{item.title}
									</h3>

									<p class="mt-4 max-w-xl text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
										{item.description}
									</p>
								</div>

								<div class="flex items-end sm:items-center">
									<ArrowUpRight
										class="size-5 text-foreground/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
									/>
								</div>
							</div>
						</a>
					{/each}
				</div>

				<!-- Small index footer -->
				<div class="mt-6 flex flex-wrap items-center justify-between gap-4">
					<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/45">
						MMU / Academic pathways
					</span>

					<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/45">
						{programmeCount} programmes · {faculties} schools
					</span>
				</div>
			</div>
		</div>

		<!-- Bottom metadata -->
		<div class="mt-16 grid border-t border-foreground/15 pt-5 sm:mt-20 sm:grid-cols-3 sm:pt-6">
			<div class="flex items-center gap-3">
				<span class="font-mono text-[9px] font-semibold text-accent">
					{String(programmeCount).padStart(2, '0')}
				</span>

				<span class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
					Programmes
				</span>
			</div>

			<div class="mt-4 flex items-center gap-3 border-t border-foreground/15 pt-4 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
				<span class="font-mono text-[9px] font-semibold text-accent">
					{String(faculties).padStart(2, '0')}
				</span>

				<span class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
					Faculties & schools
				</span>
			</div>

			<div class="mt-4 flex items-center gap-3 border-t border-foreground/15 pt-4 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
				<span class="font-mono text-[9px] font-semibold text-accent">
					01
				</span>

				<span class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
					Choose your path
				</span>
			</div>
		</div>
	</div>
</section>



<!-- MMU at a glance -->

<section class="relative overflow-hidden bg-surface-blue">
	<div class="container mx-auto px-5 py-20 sm:py-28 lg:px-6 lg:py-36">
		<div class="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
			<!-- Intro -->
			<div class="relative">
				<div class="flex items-center gap-3">
					<span class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent">
						02
					</span>

					<span class="h-px w-10 bg-foreground/20"></span>

					<span class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
						MMU at a glance
					</span>
				</div>

				<h2
					class="mt-8 max-w-lg text-[clamp(3.8rem,7vw,7rem)] font-semibold leading-[0.78] tracking-[-0.085em]"
				>
					A university
					<br />
					<span class="ml-[0.16em] text-primary">
						connected to
					</span>
					<br />
					<span class="ml-[0.42em] text-foreground/45">
						a changing world.
					</span>
				</h2>

				<div class="mt-10 flex items-center gap-3">
					<span class="h-px w-10 bg-accent"></span>

					<span class="font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground/50">
						MMU / 2008—2026
					</span>
				</div>
			</div>

			<!-- Numbers -->
			<div>
				<!-- Main figure -->
				<div class="relative border-t border-foreground/15 pt-7 sm:pt-9">
					<div class="flex flex-col">
						<div class="flex items-end gap-2">
							<span
								class="font-mono text-[clamp(5rem,14vw,11rem)] font-semibold leading-[0.72] tracking-[-0.1em] text-primary"
							>
								15,000
							</span>

							<span class="mb-1 font-mono text-4xl font-semibold leading-none text-accent sm:text-6xl">
								+
							</span>
						</div>

						<div class="mt-6 flex items-center gap-3">
							<span class="font-mono text-[8px] font-semibold tracking-[0.18em] text-accent">
								01
							</span>

							<span class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px]">
								Students enrolled
							</span>
						</div>
					</div>
				</div>

				<!-- Three figures -->
				<div class="mt-12 grid grid-cols-3 border-y border-foreground/15 sm:mt-16">
					<div class="py-7 pr-4 sm:py-9 sm:pr-7">
						<span class="font-mono text-[8px] font-semibold text-accent">
							02
						</span>

						<p class="mt-5 font-mono text-3xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
							{programmeCount}+
						</p>

						<p class="mt-3 max-w-[110px] text-[9px] leading-4 text-muted-foreground sm:text-[10px]">
							Academic programmes
						</p>
					</div>

					<div class="border-l border-foreground/15 px-4 py-7 sm:px-7 sm:py-9">
						<span class="font-mono text-[8px] font-semibold text-accent">
							03
						</span>

						<p class="mt-5 font-mono text-3xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
							10+
						</p>

						<p class="mt-3 max-w-[110px] text-[9px] leading-4 text-muted-foreground sm:text-[10px]">
							Research centres
						</p>
					</div>

					<div class="border-l border-foreground/15 pl-4 py-7 sm:pl-7 sm:py-9">
						<span class="font-mono text-[8px] font-semibold text-accent">
							04
						</span>

						<p class="mt-5 font-mono text-3xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
							30+
						</p>

						<p class="mt-3 max-w-[110px] text-[9px] leading-4 text-muted-foreground sm:text-[10px]">
							Years of service
						</p>
					</div>
				</div>

				<!-- Supporting figures -->
				<div class="grid grid-cols-2 border-b border-foreground/15">
					<div class="py-6 sm:py-8">
						<div class="flex items-baseline gap-3">
							<span class="font-mono text-[8px] font-semibold text-accent">
								05
							</span>

							<span class="font-mono text-3xl font-semibold tracking-[-0.06em] text-primary sm:text-4xl">
								{faculties}
							</span>
						</div>

						<p class="mt-2 text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px]">
							Academic faculties
						</p>
					</div>

					<div class="border-l border-foreground/15 py-6 pl-5 sm:py-8 sm:pl-7">
						<div class="flex items-baseline gap-3">
							<span class="font-mono text-[8px] font-semibold text-accent">
								06
							</span>

							<span class="font-mono text-3xl font-semibold tracking-[-0.06em] text-primary sm:text-4xl">
								01
							</span>
						</div>

						<p class="mt-2 text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px]">
							Main campus
						</p>
					</div>
				</div>

				<!-- Context -->
				<div class="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
					<p class="max-w-lg text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
						Technology, creativity and research meet in an
						institution built around the skills and ideas
						shaping Kenya's future.
					</p>

					<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/45">
						Nairobi · Kenya
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Quiet oversized section marker -->
	<span
		class="pointer-events-none absolute -bottom-16 -right-5 select-none font-mono text-[18rem] font-semibold leading-none tracking-[-0.12em] text-primary/[0.025]"
		aria-hidden="true"
	>
		02
	</span>
</section>




<!-- Programme finder -->

<section class="relative overflow-hidden bg-surface-paper">
	<div class="container mx-auto px-5 py-20 sm:py-28 lg:px-6 lg:py-36">
		<!-- Header -->
		<div class="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
			<div>
				<div class="flex items-center gap-3">
					<span class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent">
						03
					</span>

					<span class="h-px w-10 bg-foreground/20"></span>

					<span class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
						Academic programmes
					</span>
				</div>

				<h2
					class="mt-8 max-w-4xl text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.76] tracking-[-0.09em]"
				>
					Choose
					<br class="sm:hidden" />
					<span class="ml-[0.14em] text-primary">
						your path.
					</span>
				</h2>

				<p class="mt-8 max-w-lg text-sm leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">
					Start with a programme and discover where it can take you.
				</p>
			</div>

			<a
				href="/academics/programmes"
				class="group flex w-fit items-center border-b border-foreground/25 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:border-accent hover:text-accent sm:text-xs"
			>
				Open programme finder

				<ArrowUpRight
					class="ml-3 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
				/>
			</a>
		</div>

		<!-- Catalogue -->
		<div class="mt-14 sm:mt-20">
			<div class="flex flex-col gap-4 border-y border-foreground/15 py-5 sm:flex-row sm:items-center sm:justify-between">
				<div class="flex items-center gap-4">
					<span class="font-mono text-[8px] font-semibold tracking-[0.2em] text-accent">
						CATALOGUE_01
					</span>

					<span class="h-3 w-px bg-foreground/15"></span>

					<span class="text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
						Featured programmes
					</span>
				</div>

				<p class="font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground/50">
					{programmeCount} programmes · {faculties} faculties
				</p>
			</div>

			<div>
				{#each featuredProgrammes as programme, index}
					<a
						href={`/academics/programmes/${programme.slug}`}
						class="group relative grid gap-4 border-b border-foreground/15 py-7 transition-colors duration-300 sm:py-9 md:grid-cols-[80px_1fr_auto] md:items-center lg:py-10"
					>
						<!-- Hover rail -->
						<span
							class="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100"
						></span>

						<!-- Number -->
						<div class="flex items-center justify-between pl-3 sm:pl-4 md:block">
							<span class="font-mono text-[10px] font-semibold tracking-[0.15em] text-accent">
								{String(index + 1).padStart(2, '0')}
							</span>

							<span class="font-mono text-[8px] text-muted-foreground/35 md:hidden">
								MMU / PROGRAMME
							</span>
						</div>

						<!-- Programme -->
						<div class="pl-3 sm:pl-4">
							<h3
								class="max-w-4xl text-[clamp(1.7rem,3.2vw,3rem)] font-semibold leading-[0.92] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-primary"
							>
								{programme.title}
							</h3>

							<p class="mt-3 max-w-2xl text-[10px] leading-4 text-muted-foreground sm:text-xs sm:leading-5">
								{programme.faculty}
							</p>
						</div>

						<!-- Arrow -->
						<div class="flex items-center pl-3 sm:pl-4 md:pr-2">
							<ArrowUpRight
								class="size-5 text-foreground/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
							/>
						</div>
					</a>
				{/each}
			</div>

			<!-- Catalogue footer -->
			<div class="flex flex-col gap-6 pt-7 sm:flex-row sm:items-end sm:justify-between sm:pt-9">
				<div>
					<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/40">
						The complete catalogue
					</span>

					<p class="mt-3 max-w-lg text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
						Compare programmes, entry requirements and academic pathways
						across the university.
					</p>
				</div>

				<a
					href="/academics/programmes"
					class="group inline-flex w-fit items-center text-[9px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
				>
					View all programmes

					<ArrowRight
						class="ml-3 size-3.5 transition-transform duration-300 group-hover:translate-x-1"
					/>
				</a>
			</div>
		</div>
	</div>

	<!-- Background catalogue number -->
	<span
		class="pointer-events-none absolute -bottom-20 right-0 select-none font-mono text-[20rem] font-semibold leading-none tracking-[-0.14em] text-primary/[0.025]"
		aria-hidden="true"
	>
		03
	</span>
</section>



<!-- research & innovation -->

<section class="relative overflow-hidden bg-surface-blue">
	<div class="container mx-auto px-5 py-20 sm:py-28 lg:px-6 lg:py-36">
		<div
			class="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24"
		>
			<!-- Intro -->

			<div class="relative">
				<div class="flex items-center gap-3">
					<span
						class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent"
					>
						04
					</span>

					<span class="h-px w-8 bg-border"></span>

					<span
						class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
					>
						Research & innovation
					</span>
				</div>

				<h2
					class="mt-7 max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.78] tracking-[-0.085em]"
				>
					Ideas
					<br />
					<span class="ml-[0.55em] text-primary/80">
						become
					</span>
					<br />
					<span class="relative inline-block skew-x-[-4deg] text-primary">
						impact.
						<span
							class="absolute -bottom-[0.03em] left-[0.05em] h-[0.025em] w-[2.3em] -skew-x-12 bg-accent"
						></span>
					</span>
				</h2>

				<p
					class="mt-9 max-w-xl text-sm leading-6 text-muted-foreground sm:text-[15px] sm:leading-7"
				>
					Research at MMU connects technology, media, science
					and society to address real problems and create new
					possibilities.
				</p>

				<a
					href="/research"
					class="group mt-8 inline-flex items-center border-b border-foreground/20 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:border-accent hover:text-accent sm:mt-10 sm:text-xs"
				>
					Explore research

					<ArrowRight
						class="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1"
					/>
				</a>

				<span
					class="pointer-events-none absolute -right-2 top-0 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground/30 lg:block"
				>
					MMU / R&I / 04
				</span>
			</div>

			<!-- Research index -->

			<div class="lg:mt-24">
				<div class="border-t border-border">
					{#each researchLinks as item}
						<a
							href={item.href}
							class="group relative block border-b border-border py-7 transition-colors duration-300 sm:py-9"
						>
							<span
								class="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
							></span>

							<div class="flex items-start justify-between gap-6">
								<span
									class="font-mono text-[9px] font-semibold tracking-[0.14em] text-accent sm:text-[10px]"
								>
									{item.number}
								</span>

								<ArrowUpRight
									class="size-4 text-primary/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
								/>
							</div>

							<h3
								class="mt-7 max-w-md text-xl font-semibold tracking-[-0.025em] text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:mt-8 sm:text-2xl"
							>
								{item.title}
							</h3>

							<p
								class="mt-2 max-w-md text-xs leading-5 text-muted-foreground sm:mt-3 sm:text-sm sm:leading-6"
							>
								{item.description}
							</p>

							<div class="mt-6 flex items-center gap-3">
								<span
									class="h-px w-5 bg-border transition-all duration-300 group-hover:w-9 group-hover:bg-accent"
								></span>

								<span
									class="text-[8px] font-bold uppercase tracking-[0.16em] text-muted-foreground/40 transition-colors group-hover:text-muted-foreground"
								>
									Discover
								</span>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Research statement -->

		<div class="mt-16 border-t border-border pt-6 sm:mt-24 sm:pt-8">
			<div
				class="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10"
			>
				<span
					class="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-accent"
				>
					RESEARCH / 2026
				</span>

				<p
					class="max-w-3xl text-sm font-medium leading-6 tracking-tight text-foreground/75 sm:text-base sm:leading-7"
				>
					From emerging technologies to questions that shape
					society, research creates the knowledge, partnerships
					and ideas that move communities forward.
				</p>
			</div>
		</div>
	</div>
</section>


<!-- news / university life -->

<section class="relative overflow-hidden bg-surface-paper">
	<div class="container mx-auto px-5 py-20 sm:py-28 lg:px-6 lg:py-36">
		<!-- Editorial header -->

		<div class="relative">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<span
						class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent"
					>
						05
					</span>

					<span class="h-px w-8 bg-border"></span>

					<span
						class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
					>
						University life
					</span>
				</div>

				<span
					class="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/40 sm:block"
				>
					MMU / 2026
				</span>
			</div>

			<div
				class="mt-8 flex flex-col justify-between gap-8 sm:mt-10 lg:flex-row lg:items-end"
			>
				<h2
					class="max-w-4xl text-[clamp(3.5rem,9vw,8.5rem)] font-semibold leading-[0.76] tracking-[-0.09em]"
				>
					What's
					<span class="ml-[0.3em] text-primary/80">
						happening.
					</span>
				</h2>

				<a
					href="/news"
					class="group mb-1 inline-flex w-fit items-center border-b border-foreground/20 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:border-accent hover:text-accent sm:text-xs"
				>
					All news

					<ArrowUpRight
						class="ml-3 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
					/>
				</a>
			</div>
		</div>

		<!-- Newsroom -->

		<div class="mt-12 border-t border-border sm:mt-16">
			{#if news.length > 0}
				{@const lead = news[0]}
				{@const secondaryNews = news.slice(1, 4)}

				<!-- Lead story -->

				<a
					href={`/news/${lead.slug ?? lead.id}`}
					class="group relative block border-b border-border py-8 sm:py-10 lg:py-14"
				>
					<div class="grid gap-8 lg:grid-cols-[110px_1fr_auto] lg:gap-10">
						<div class="flex items-start justify-between lg:block">
							<div>
								<span
									class="font-mono text-[9px] font-semibold tracking-[0.15em] text-accent"
								>
									01
								</span>

								<span
									class="mt-2 hidden font-mono text-[8px] uppercase tracking-[0.15em] text-muted-foreground/40 lg:block"
								>
									Latest
								</span>
							</div>

							<span
								class="font-mono text-[8px] uppercase tracking-[0.15em] text-primary/40 lg:hidden"
							>
								Latest
							</span>
						</div>

						<div class="max-w-4xl">
							<div class="mb-4 flex items-center gap-3">
								<span class="h-px w-5 bg-accent"></span>

								<span
									class="text-[8px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
								>
									Featured story
								</span>
							</div>

							<h3
								class="text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-primary"
							>
								{lead.title}
							</h3>

							<p
								class="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-base sm:leading-7"
							>
								{lead.content || lead.summary}
							</p>
						</div>

						<div
							class="flex items-end justify-between gap-5 lg:block lg:min-w-[100px]"
						>
							<p
								class="font-mono text-[9px] text-muted-foreground sm:text-[10px]"
							>
								{lead.date}
							</p>

							<div
								class="mt-8 hidden size-12 items-center justify-center border border-border text-primary/40 transition-all duration-300 group-hover:border-accent group-hover:text-accent sm:flex lg:mt-16"
							>
								<ArrowUpRight
									class="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
								/>
							</div>

							<ArrowUpRight class="size-5 text-primary sm:hidden" />
						</div>
					</div>

					<span
						class="pointer-events-none absolute -right-2 bottom-[-0.22em] hidden select-none font-mono text-[9rem] font-semibold leading-none tracking-[-0.1em] text-foreground/[0.025] lg:block"
						aria-hidden="true"
					>
						01
					</span>
				</a>

				<!-- Secondary stories -->

				<div class="grid sm:grid-cols-2 lg:grid-cols-3">
					{#each secondaryNews as article, index}
						<a
							href={`/news/${article.slug ?? article.id}`}
							class={`group relative block py-7 sm:py-8 lg:px-7 lg:py-10 ${
								index > 0
									? 'border-t border-border sm:border-l lg:border-t-0'
									: ''
							}`}
						>
							<div class="flex items-center justify-between">
								<span
									class="font-mono text-[9px] font-semibold tracking-[0.15em] text-accent"
								>
									{String(index + 2).padStart(2, '0')}
								</span>

								<span class="font-mono text-[8px] text-muted-foreground/40">
									{article.date}
								</span>
							</div>

							<h3
								class="mt-8 max-w-sm text-lg font-semibold leading-[1.05] tracking-[-0.025em] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary sm:mt-10 sm:text-xl"
							>
								{article.title}
							</h3>

							<p
								class="mt-3 line-clamp-3 max-w-sm text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6"
							>
								{article.content || article.summary}
							</p>

							<div class="mt-7 flex items-center gap-3">
								<span
									class="h-px w-6 bg-border transition-all duration-300 group-hover:w-10 group-hover:bg-accent"
								></span>

								<span
									class="text-[8px] font-bold uppercase tracking-[0.16em] text-muted-foreground/50 transition-colors group-hover:text-primary"
								>
									Read story
								</span>

								<ArrowUpRight
									class="size-3 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
								/>
							</div>
						</a>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Newsroom footer -->

		<div
			class="mt-8 flex flex-col gap-5 border-t border-border pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between"
		>
			<div>
				<span
					class="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/40"
				>
					University newsroom
				</span>

				<p class="mt-1 text-xs text-muted-foreground">
					Stories, announcements and moments from MMU.
				</p>
			</div>

			<a
				href="/news"
				class="group inline-flex items-center text-[9px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
			>
				Enter newsroom

				<ArrowRight
					class="ml-3 size-3.5 transition-transform duration-300 group-hover:translate-x-1"
				/>
			</a>
		</div>
	</div>
</section>


<!-- Events -->

<section class="relative overflow-hidden bg-surface-red">
	<div class="container mx-auto px-5 py-20 sm:py-28 lg:px-6 lg:py-36">
		<div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
			<!-- Intro -->

			<div class="relative">
				<div class="flex items-center gap-3">
					<span class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent">
						06
					</span>

					<span class="h-px w-8 bg-border"></span>

					<span class="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
						Events
					</span>
				</div>

				<h2
					class="mt-8 max-w-xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.78] tracking-[-0.085em]"
				>
					Be part
					<span class="ml-[0.22em] text-primary/80">of it.</span>
				</h2>

				<p class="mt-8 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
					From academic gatherings to student life, there is always
					something happening across campus.
				</p>

				<a
					href="/events"
					class="group mt-8 inline-flex items-center border-b border-foreground/20 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:border-accent hover:text-accent sm:text-xs"
				>
					See the full calendar

					<ArrowUpRight
						class="ml-3 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
					/>
				</a>

				<span
					class="pointer-events-none absolute -bottom-10 left-0 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground/30 lg:block"
				>
					CAMPUS / CALENDAR / 2026
				</span>
			</div>

			<!-- Upcoming events -->

			<div>
				<div class="flex items-end justify-between border-b border-border pb-4">
					<div>
						<span class="font-mono text-[8px] font-semibold tracking-[0.18em] text-accent">
							UPCOMING
						</span>

						<p class="mt-1 text-xs text-muted-foreground">
							What's next on campus
						</p>
					</div>

					<span class="font-mono text-[8px] text-muted-foreground/40">
						{events.length.toString().padStart(2, '0')} EVENTS
					</span>
				</div>

				<div>
					{#each events.slice(0, 3) as event, index}
						<a
							href={`/events/${event.slug ?? event.id}`}
							class="group relative grid gap-5 border-b border-border py-7 transition-colors sm:grid-cols-[100px_1fr_auto] sm:gap-8 sm:py-9"
						>
							<div class="flex items-start gap-4 sm:block">
								<span class="block font-mono text-[9px] font-semibold tracking-[0.15em] text-accent">
									{String(index + 1).padStart(2, '0')}
								</span>

								<span class="font-mono text-[9px] text-muted-foreground sm:mt-3 sm:block">
									{event.date}
								</span>
							</div>

							<div class="min-w-0">
								<h3
									class="max-w-xl text-xl font-semibold leading-[1] tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary sm:text-2xl lg:text-3xl"
								>
									{event.title}
								</h3>

								<div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
									<span class="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
										{event.location || 'Main Campus'}
									</span>

									{#if event.time}
										<span class="h-3 w-px bg-border"></span>

										<span class="font-mono text-[9px] text-muted-foreground">
											{event.time}
										</span>
									{/if}
								</div>
							</div>

							<div class="hidden items-center sm:flex">
								<span
									class="flex size-11 items-center justify-center border border-border text-primary/40 transition-all duration-300 group-hover:border-accent group-hover:text-accent"
								>
									<ArrowUpRight
										class="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
									/>
								</span>
							</div>

							<ArrowUpRight
								class="absolute right-0 top-8 size-4 text-primary sm:hidden"
							/>
						</a>
					{/each}
				</div>

				<div class="mt-6 flex items-center justify-between">
					<span class="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/40">
						MMU / Events
					</span>

					<a
						href="/events"
						class="group inline-flex items-center text-[9px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
					>
						Open calendar

						<ArrowRight
							class="ml-3 size-3.5 transition-transform duration-300 group-hover:translate-x-1"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>


<!-- Campus stories -->

<div class="relative bg-surface-blue-deep">
	<div class="grid gap-px bg-foreground/15 sm:grid-cols-2">
		{#each campusLinks as item, index}
			<a
				href={item.href}
				class={`group relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-surface-blue-deep p-6 transition-all duration-500 hover:z-10 hover:-translate-y-1 sm:min-h-[320px] sm:p-8 lg:min-h-[360px] lg:p-10 ${
					index === 0 ? 'sm:col-span-2' : ''
				}`}
			>
				<div class="relative z-10 flex items-start justify-between">
					<span
						class="font-mono text-[9px] font-semibold tracking-[0.15em] text-accent"
					>
						{String(index + 1).padStart(2, '0')}
					</span>

					<ArrowUpRight
						class="size-5 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
					/>
				</div>

				<div class="relative z-10 mt-12">
					<h3
						class="max-w-lg text-3xl font-semibold leading-[0.92] tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl lg:text-5xl"
					>
						{item.title}
					</h3>

					<p
						class="mt-4 max-w-md text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6"
					>
						{item.description}
					</p>

					<div class="mt-6 flex items-center gap-3">
						<span
							class="h-px w-7 bg-accent transition-all duration-300 group-hover:w-12"
						></span>

						<span
							class="text-[8px] font-bold uppercase tracking-[0.16em] text-muted-foreground/50 transition-colors group-hover:text-primary"
						>
							Explore
						</span>
					</div>
				</div>

				<span
					class="pointer-events-none absolute -bottom-8 -right-2 select-none font-mono text-[9rem] font-semibold leading-none tracking-[-0.1em] text-foreground/[0.025]"
					aria-hidden="true"
				>
					{String(index + 1).padStart(2, '0')}
				</span>
			</a>
		{/each}
	</div>

	<div
		class="mt-6 flex flex-col gap-4 border-t border-foreground/15 pt-5 sm:flex-row sm:items-center sm:justify-between"
	>
		<p class="text-[9px] uppercase tracking-[0.14em] text-muted-foreground/50">
			People · Places · Community
		</p>

		<a
			href="/campus-life"
			class="group inline-flex items-center text-[9px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
		>
			Explore campus life

			<ArrowRight
				class="ml-3 size-3.5 transition-transform duration-300 group-hover:translate-x-1"
			/>
		</a>
	</div>
</div>


<!-- Final call to action -->

<section class="relative overflow-hidden bg-primary text-primary-foreground">
	<div class="container mx-auto px-5 py-20 sm:py-28 lg:px-6 lg:py-32">
		<div class="border-y border-primary-foreground/15">
			<div
				class="grid gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20 lg:py-16"
			>
				<div>
					<div class="flex items-center gap-3">
						<span class="h-px w-8 bg-accent"></span>

						<span class="font-mono text-[9px] uppercase tracking-[0.2em] text-primary-foreground/55">
							Your next step
						</span>
					</div>

					<h2
						class="mt-8 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.78] tracking-[-0.09em]"
					>
						Find your
						<br />
						<span class="ml-[0.12em] text-primary-foreground/60">
							place at MMU.
						</span>
					</h2>

					<p
						class="mt-8 max-w-xl text-sm leading-6 text-primary-foreground/60 sm:text-base sm:leading-7"
					>
						Explore programmes, discover opportunities and take
						the next step towards your future.
					</p>
				</div>

				<div
					class="flex flex-col border-t border-primary-foreground/15 lg:w-[300px] lg:border-t-0 lg:border-l lg:pl-8"
				>
					<a
						href="/academics/programmes"
						class="group flex items-center justify-between border-b border-primary-foreground/15 py-5 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors hover:text-accent"
					>
						Explore programmes

						<ArrowUpRight
							class="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
						/>
					</a>

					<a
						href="/admissions/how-to-apply"
						class="group flex items-center justify-between py-5 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors hover:text-accent"
					>
						How to apply

						<ArrowUpRight
							class="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>


