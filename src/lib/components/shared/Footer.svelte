<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import Globe from '@lucide/svelte/icons/globe';

	const footerSections = [
		{
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

<!-- Footer styled with the deep navy background to match the official MMU site -->
<footer class="border-t border-primary-foreground/15 bg-primary text-primary-foreground">
	<!-- ============================================================
		ADMISSIONS STRIP
	============================================================ -->

	<div class="border-b border-primary-foreground/15">
		<div class="container mx-auto px-5 py-7 lg:px-6 lg:py-8">
			<div
				class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
			>
				<div class="flex items-start gap-4 sm:items-center">
					<!-- Accent Red dot matching university brand -->
					<span class="mt-1.5 size-2 shrink-0 bg-accent sm:mt-0"></span>

					<p
						class="max-w-xl text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] sm:text-xs sm:leading-normal"
					>
						Admissions for the upcoming academic intake are open.
					</p>
				</div>

				<a
					href="/admissions/how-to-apply"
					class="group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.1em] text-primary-foreground transition-opacity hover:opacity-80 sm:text-xs"
				>
					Start your application

					<ArrowUpRight
						class="ml-2 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					/>
				</a>
			</div>
		</div>
	</div>

	<!-- ============================================================
		MAIN FOOTER
	============================================================ -->

	<div class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-24">
		<div
			class="grid gap-12 sm:gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12"
		>
			<!-- Brand / Contact -->

			<div class="space-y-7 sm:space-y-8">
				<a
					href="/"
					class="group inline-flex items-center gap-4"
					aria-label="Multimedia University of Kenya"
				>
					<div
						class="flex size-11 items-center justify-center border border-primary-foreground/20 bg-primary-foreground text-[11px] font-bold tracking-[-0.04em] text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-accent-foreground sm:size-12 sm:text-sm"
					>
						MMU
					</div>

					<div>
						<div class="text-sm font-semibold tracking-tight text-primary-foreground">
							Multimedia University
						</div>

						<div class="mt-0.5 text-xs text-primary-foreground/70">
							of Kenya
						</div>
					</div>
				</a>

				<p
					class="max-w-sm text-xs leading-6 text-primary-foreground/75 sm:text-sm"
				>
					A modern technological institution anchored in rigorous
					academic scholarship, applied research, and creative
					industry preparation.
				</p>

				<div class="grid gap-3 pt-1 text-xs text-primary-foreground/75">
					<div class="flex items-start gap-3">
						<MapPin
							class="mt-0.5 size-4 shrink-0 text-primary-foreground"
						/>

						<span>
							Magadi Road, Nairobi, Kenya
						</span>
					</div>

					<div class="flex items-center gap-3">
						<Phone
							class="size-4 shrink-0 text-primary-foreground"
						/>

						<a
							href="tel:+254700000000"
							class="transition-colors hover:text-primary-foreground"
						>
							+254 (0) 700 000 000
						</a>
					</div>

					<div class="flex items-center gap-3">
						<Mail
							class="size-4 shrink-0 text-primary-foreground"
						/>

						<a
							href="mailto:info@mmu.ac.ke"
							class="transition-colors hover:text-primary-foreground"
						>
							info@mmu.ac.ke
						</a>
					</div>
				</div>
			</div>

			<!-- Link columns -->

			{#each footerSections as section, sIdx}
				<div class="border-t border-primary-foreground/15 pt-5 lg:border-t-0 lg:pt-0">
					<div class="flex items-center justify-between">
						<h3
							class="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-foreground sm:text-[10px]"
						>
							{section.title}
						</h3>

						<span
							class="text-[9px] text-primary-foreground/50 lg:hidden"
						>
							0{sIdx + 1}
						</span>
					</div>

					<ul class="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5">
						{#each section.links as link}
							<li>
								<a
									href={link.href}
									class="group inline-flex items-center gap-2 text-xs text-primary-foreground/70 transition-colors hover:text-primary-foreground"
								>
									<span
										class="transition-transform duration-150 group-hover:translate-x-1"
									>
										{link.label}
									</span>

									{#if link.external}
										<ArrowUpRight
											class="size-3 opacity-40 transition-opacity duration-150 group-hover:opacity-100"
										/>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- ============================================================
			LOWER BAR
		============================================================ -->

		<div class="mt-14 border-t border-primary-foreground/15 pt-7 sm:mt-20 sm:pt-8">
			<div
				class="flex flex-col gap-5 text-[10px] text-primary-foreground/70 sm:text-[11px] md:flex-row md:items-center md:justify-between"
			>
				<div
					class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5"
				>
					<p>
						© {new Date().getFullYear()} Multimedia University of Kenya. All rights reserved.
					</p>

					<span class="hidden text-primary-foreground/30 sm:block">
						/
					</span>

					<div class="flex items-center gap-2">
						<Globe class="size-3" />

						<span>Nairobi, Kenya</span>
					</div>
				</div>

				<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
					<a
						href="#"
						class="transition-colors hover:text-primary-foreground"
					>
						Privacy
					</a>

					<span class="text-primary-foreground/40">·</span>

					<a
						href="#"
						class="transition-colors hover:text-primary-foreground"
					>
						Terms
					</a>

					<span class="text-primary-foreground/40">·</span>

					<a
						href="/contact"
						class="transition-colors hover:text-primary-foreground"
					>
						Contact
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>