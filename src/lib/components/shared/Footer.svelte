<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';

	const footerSections = [
		{
			number: '01',
			title: 'University',
			links: [
				{ label: 'About MMU', href: '/university' },
				{ label: 'Leadership', href: '/university/leadership' },
				{ label: 'Schools & Faculties', href: '/university/schools' },
				{ label: 'Research Ecosystem', href: '/research' },
				{ label: 'News & Press', href: '/news' }
			]
		},
		{
			number: '02',
			title: 'Academics',
			links: [
				{ label: 'Programmes Directory', href: '/academics/programmes' },
				{ label: 'Admissions', href: '/admissions' },
				{ label: 'How to Apply', href: '/admissions/how-to-apply' },
				{ label: 'Entry Requirements', href: '/admissions/requirements' },
				{ label: 'Academic Calendar', href: '/events' }
			]
		},
		{
			number: '03',
			title: 'Resources',
			links: [
				{ label: 'Student Portal', href: '#', external: true },
				{ label: 'E-Learning', href: '#', external: true },
				{ label: 'Library Services', href: '/resources' },
				{ label: 'Campus Life', href: '/campus-life' },
				{ label: 'Help & FAQs', href: '/contact' }
			]
		}
	];
</script>

<footer class="relative overflow-hidden bg-foreground text-background">
	<!-- Admissions Banner -->
	<div class="border-b border-background/15">
		<div class="container mx-auto px-5 lg:px-6">
			<div class="grid gap-6 py-7 sm:grid-cols-[1fr_auto] sm:items-center sm:py-8">
				<div class="flex items-center gap-4">
					<span class="size-2 shrink-0 bg-accent"></span>
					<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
						<span class="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-accent">
							Admissions / 2026
						</span>
						<span class="hidden h-3 w-px bg-background/20 sm:block"></span>
						<p class="text-[10px] font-semibold uppercase tracking-[0.12em] opacity-80 sm:text-xs">
							Applications for the upcoming intake are open.
						</p>
					</div>
				</div>

				<a
					href="/admissions/how-to-apply"
					class="group inline-flex w-fit items-center text-[9px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-accent sm:text-[10px]"
				>
					Start your application
					<ArrowUpRight
						class="ml-3 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
					/>
				</a>
			</div>
		</div>
	</div>

	<!-- Main Footer -->
	<div class="container mx-auto px-5 py-20 sm:py-24 lg:px-6 lg:py-32">
		<div class="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
			<!-- Brand -->
			<div class="relative">
				<div class="flex items-center gap-3">
					<span class="font-mono text-[9px] font-semibold tracking-[0.2em] text-accent">
						08
					</span>
					<span class="h-px w-10 bg-background/25"></span>
					<span class="text-[9px] font-bold uppercase tracking-[0.2em] opacity-50">
						Stay connected
					</span>
				</div>

				<h2 class="mt-9 select-none text-[clamp(5rem,15vw,13rem)] font-semibold leading-[0.68] tracking-[-0.11em]">
					MMU
				</h2>

				<p class="mt-10 max-w-md text-sm leading-6 opacity-60 sm:text-base sm:leading-7">
					Multimedia University of Kenya — technology, creativity,
					research and people shaping what comes next.[cite: 2]
				</p>

				<div class="mt-9 grid gap-3 text-xs opacity-65">
					<div class="flex items-start gap-3">
						<MapPin class="mt-0.5 size-4 shrink-0 opacity-80" />
						<span>Magadi Road, Nairobi, Kenya</span>
					</div>

					<div class="flex items-center gap-3">
						<Phone class="size-4 shrink-0 opacity-80" />
						<a
							href="tel:+254700000000"
							class="transition-opacity hover:opacity-100"
						>
							+254 (0) 700 000 000
						</a>
					</div>

					<div class="flex items-center gap-3">
						<Mail class="size-4 shrink-0 opacity-80" />
						<a
							href="mailto:info@mmu.ac.ke"
							class="transition-opacity hover:opacity-100"
						>
							info@mmu.ac.ke
						</a>
					</div>
				</div>

				<span
					class="pointer-events-none absolute -bottom-8 -left-2 select-none font-mono text-[7rem] font-semibold leading-none tracking-[-0.12em] opacity-[0.025] sm:text-[10rem]"
					aria-hidden="true"
				>
					08
				</span>
			</div>

			<!-- Link Index -->
			<div class="border-t border-background/15 lg:border-t-0 lg:pt-0">
				<div class="grid sm:grid-cols-3 lg:gap-8">
					{#each footerSections as section}
						<div
							class="border-b border-background/15 py-7 first:pt-6 sm:border-b-0 sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0 sm:py-0 sm:first:pt-0"
						>
							<div class="flex items-center gap-3">
								<span class="font-mono text-[8px] font-semibold tracking-[0.16em] text-accent">
									{section.number}
								</span>
								<span class="text-[9px] font-bold uppercase tracking-[0.18em] opacity-75">
									{section.title}
								</span>
							</div>

							<ul class="mt-7 space-y-4">
								{#each section.links as link}
									<li>
										<a
											href={link.href}
											class="group flex items-start gap-2 text-xs opacity-55 transition-opacity hover:opacity-100"
										>
											<span class="transition-transform duration-200 group-hover:translate-x-1">
												{link.label}
											</span>
											{#if link.external}
												<ArrowUpRight
													class="mt-0.5 size-3 shrink-0 opacity-40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
												/>
											{/if}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Final Statement -->
		<div class="mt-20 border-t border-background/15 pt-8 sm:mt-28">
			<div class="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
				<div>
					<span class="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-accent">
						MMU / Nairobi / Kenya
					</span>

					<p class="mt-4 max-w-2xl text-[clamp(1.8rem,4vw,3.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] opacity-90">
						Shape what comes next.
					</p>

					<!-- Digital Partner -->
					<div class="mt-8 flex flex-col gap-2">
						<span class="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-accent">
							Digital Experience Partner
						</span>

						<a
							href="https://querygraph.dev"
							target="_blank"
							rel="noopener noreferrer"
							class="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-background/70 transition-colors hover:text-accent"
						>
							QueryGraph Codelabs
							<ArrowUpRight
								class="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					</div>
				</div>

				<div class="flex flex-wrap items-center gap-x-5 gap-y-3 text-[9px] uppercase tracking-[0.14em] opacity-45">
					<a href="#" class="transition-opacity hover:opacity-100">
						Privacy
					</a>
					<span>·</span>
					<a href="#" class="transition-opacity hover:opacity-100">
						Terms
					</a>
					<span>·</span>
					<a href="/contact" class="transition-opacity hover:opacity-100">
						Contact
					</a>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-8 flex flex-col gap-3 text-[8px] uppercase tracking-[0.14em] opacity-30 sm:flex-row sm:items-center sm:justify-between">
			<span>
				© {new Date().getFullYear()} Multimedia University of Kenya[cite: 2]
			</span>
			<span>
				All rights reserved
			</span>
		</div>
	</div>

	<!-- Oversized Editorial Mark -->
	<span
		class="pointer-events-none absolute -bottom-16 -right-6 select-none font-mono text-[20rem] font-semibold leading-none tracking-[-0.14em] opacity-[0.025] sm:text-[28rem]"
		aria-hidden="true"
	>
		MMU
	</span>
</footer>