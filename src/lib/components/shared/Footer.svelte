<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';

	import { Separator } from '$lib/components/ui/separator';

	const footerSections = [
		{
			title: 'University',
			links: [
				{ label: 'About MMU', href: '/about' },
				{ label: 'Leadership', href: '/about/leadership' },
				{ label: 'Research', href: '/research' },
				{ label: 'News', href: '/news' },
				{ label: 'Events', href: '/events' }
			]
		},
		{
			title: 'Academics',
			links: [
				{ label: 'Programmes', href: '/academics/programmes' },
				{ label: 'Faculties', href: '/academics/faculties' },
				{ label: 'Admissions', href: '/admissions' },
				{ label: 'Student Portal', href: '#' }
			]
		},
		{
			title: 'Information',
			links: [
				{ label: 'Contact Us', href: '/contact' },
				{ label: 'Library', href: '#' },
				{ label: 'Downloads', href: '#' },
				{ label: 'FAQs', href: '#' }
			]
		}
	];
</script>

<footer class="border-t bg-muted/40">
	<div class="container mx-auto px-4 py-12">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
			<!-- Brand / Contact -->
			<div class="lg:col-span-2">
				<a href="/" class="inline-flex items-center gap-3">
					<div
						class="flex size-10 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground"
					>
						MMU
					</div>

					<div>
						<div class="font-bold">Multimedia University</div>
						<div class="text-sm text-muted-foreground">of Kenya</div>
					</div>
				</a>

				<p class="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
					A modern university committed to education, research, innovation,
					and the development of future-ready graduates.
				</p>

				<div class="mt-6 space-y-3 text-sm text-muted-foreground">
					<div class="flex items-start gap-3">
						<MapPin class="mt-0.5 size-4 shrink-0" />
						<span>Nairobi, Kenya</span>
					</div>

					<div class="flex items-center gap-3">
						<Phone class="size-4 shrink-0" />
						<a href="tel:+254000000000" class="hover:text-foreground">
							+254 000 000 000
						</a>
					</div>

					<div class="flex items-center gap-3">
						<Mail class="size-4 shrink-0" />
						<a
							href="mailto:info@mmu.ac.ke"
							class="hover:text-foreground"
						>
							info@mmu.ac.ke
						</a>
					</div>
				</div>
			</div>

			<!-- Link groups -->
			{#each footerSections as section}
				<div>
					<h2 class="text-sm font-semibold">{section.title}</h2>

					<ul class="mt-4 space-y-3">
						{#each section.links as link}
							<li>
								<a
									href={link.href}
									class="text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<Separator class="my-8" />

		<div
			class="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"
		>
			<p>
				© {new Date().getFullYear()} Multimedia University of Kenya. All
				rights reserved.
			</p>

			<div class="flex gap-5">
				<a href="#" class="hover:text-foreground">Privacy Policy</a>
				<a href="#" class="hover:text-foreground">Terms of Use</a>
			</div>
		</div>
	</div>
</footer>