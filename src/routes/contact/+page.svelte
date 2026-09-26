<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock from '@lucide/svelte/icons/clock';
	import Building2 from '@lucide/svelte/icons/building-2';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';

	const departments = [
		{
			name: 'Admissions Office',
			email: 'admissions@mmu.ac.ke'
		},
		{
			name: 'Academic Registrar',
			email: 'registrar.aa@mmu.ac.ke'
		},
		{
			name: 'Finance Office',
			email: 'finance@mmu.ac.ke'
		},
		{
			name: 'ICT Helpdesk',
			email: 'support@mmu.ac.ke'
		}
	];

	const departmentOptions = [
		{ value: 'admissions', label: 'Admissions Office' },
		{ value: 'registrar', label: 'Academic Registrar' },
		{ value: 'finance', label: 'Finance Office' },
		{ value: 'ict', label: 'ICT Helpdesk' },
		{ value: 'general', label: 'General Enquiries' }
	];
</script>

<svelte:head>
	<title>Contact Us | Multimedia University of Kenya</title>

	<meta
		name="description"
		content="Contact Multimedia University of Kenya for admissions, academic, financial, ICT and general enquiries."
	/>
</svelte:head>

<PageHero
	eyebrow="Contact"
	title="Get in touch."
	description="Find the right office, visit the university, or send an enquiry directly through our contact form."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Contact' }
	]}
/>

<!-- Department directory -->
<section class="border-b border-border/60 bg-muted/20">
	<div class="container mx-auto px-5 py-12 sm:py-14 lg:px-6 lg:py-16">
		<div class="mb-8 flex items-end justify-between gap-6">
			<div>
				<p
					class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent flex items-center gap-2"
				>
					<span class="h-px w-5 bg-accent"></span>
					Contact directory
				</p>

				<h2
					class="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl text-foreground"
				>
					Find the right office.
				</h2>
			</div>

			<span
				class="hidden text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:block"
			>
				01 — 04
			</span>
		</div>

		<div class="grid border border-border/60 md:grid-cols-2 lg:grid-cols-4 bg-border/60 gap-px">
			{#each departments as dept, i}
				<div
					class="group bg-background p-5 transition-colors hover:bg-muted/40"
				>
					<div class="flex items-start justify-between gap-4">
						<div
							class="flex size-8 shrink-0 items-center justify-center border border-primary bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground"
						>
							<Building2 class="size-3.5" />
						</div>

						<span
							class="text-[9px] font-bold text-primary"
						>
							0{i + 1}
						</span>
					</div>

					<h3
						class="mt-7 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-foreground group-hover:text-primary transition-colors"
					>
						{dept.name}
					</h3>

					<a
						href={`mailto:${dept.email}`}
						class="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
					>
						{dept.email}

						<ArrowUpRight
							class="size-3 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-accent"
						/>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Contact information + form -->
<section class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28">
	<div class="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

		<!-- Information -->
		<div>
			<SectionHeading
				eyebrow="Visit & contact"
				title="University coordinates."
				description="Our main campus is located along Magadi Road in Nairobi."
			/>

			<div class="mt-10 divide-y divide-border/60 border-t border-border/60">
				<!-- Address -->
				<div class="flex gap-4 py-6">
					<div
						class="flex size-9 shrink-0 items-center justify-center border border-primary bg-primary text-primary-foreground"
					>
						<MapPin class="size-3.5" />
					</div>

					<div>
						<h3
							class="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground"
						>
							Physical address
						</h3>

						<p
							class="mt-2 text-sm leading-6 text-muted-foreground"
						>
							Magadi Road, Rongai<br />
							P.O. Box 15653 – 00503<br />
							Nairobi, Kenya
						</p>
					</div>
				</div>

				<!-- Hours -->
				<div class="flex gap-4 py-6">
					<div
						class="flex size-9 shrink-0 items-center justify-center border border-primary bg-primary text-primary-foreground"
					>
						<Clock class="size-3.5" />
					</div>

					<div>
						<h3
							class="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground"
						>
							Office hours
						</h3>

						<p
							class="mt-2 text-sm leading-6 text-muted-foreground"
						>
							Monday – Friday<br />
							08:00 AM – 05:00 PM
						</p>
					</div>
				</div>

				<!-- General -->
				<div class="flex gap-4 py-6">
					<div
						class="flex size-9 shrink-0 items-center justify-center border border-primary bg-primary text-primary-foreground"
					>
						<Mail class="size-3.5" />
					</div>

					<div>
						<h3
							class="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground"
						>
							General enquiries
						</h3>

						<a
							href="mailto:info@mmu.ac.ke"
							class="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
						>
							info@mmu.ac.ke
						</a>
					</div>
				</div>
			</div>

			<!-- Location note -->
			<div class="mt-8 border border-border/60 bg-muted/30 p-5 sm:p-6">
				<div class="flex items-center justify-between">
					<span
						class="text-[9px] font-bold uppercase tracking-[0.18em] text-foreground"
					>
						Main campus
					</span>

					<MapPin class="size-3.5 text-accent" />
				</div>

				<p
					class="mt-4 text-xs leading-6 text-muted-foreground"
				>
					Multimedia University of Kenya is situated along
					Magadi Road in Rongai, Nairobi.
				</p>

				<a
					href="/contact"
					class="mt-4 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.12em] text-primary hover:text-accent transition-colors"
				>
					View campus information
					<ArrowUpRight class="ml-2 size-3.5" />
				</a>
			</div>
		</div>

		<!-- Form -->
		<div class="border border-border/60 bg-background p-6 sm:p-8 lg:p-10">
			<div class="border-b border-border/60 pb-6">
				<p
					class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent flex items-center gap-2"
				>
					<span class="h-px w-5 bg-accent"></span>
					Online enquiry
				</p>

				<h2
					class="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl text-foreground"
				>
					Send us a message.
				</h2>

				<p
					class="mt-3 max-w-lg text-sm leading-6 text-muted-foreground"
				>
					Choose the office that best matches your enquiry and
					provide the details below.
				</p>
			</div>

			<form class="mt-8 space-y-6">
				<div class="grid gap-6 sm:grid-cols-2">
					<div class="space-y-2">
						<label
							for="name"
							class="text-[9px] font-bold uppercase tracking-[0.15em] text-foreground"
						>
							Full name <span class="text-accent">*</span>
						</label>

						<Input
							id="name"
							name="name"
							placeholder="Your full name"
							class="h-11 rounded-none text-sm border-border/60 focus-visible:ring-primary"
						/>
					</div>

					<div class="space-y-2">
						<label
							for="email"
							class="text-[9px] font-bold uppercase tracking-[0.15em] text-foreground"
						>
							Email address <span class="text-accent">*</span>
						</label>

						<Input
							id="email"
							name="email"
							type="email"
							placeholder="you@example.com"
							class="h-11 rounded-none text-sm border-border/60 focus-visible:ring-primary"
						/>
					</div>
				</div>

				<div class="grid gap-6 sm:grid-cols-2">
					<div class="space-y-2">
						<label
							for="phone"
							class="text-[9px] font-bold uppercase tracking-[0.15em] text-foreground"
						>
							Phone number
						</label>

						<Input
							id="phone"
							name="phone"
							type="tel"
							placeholder="+254 ..."
							class="h-11 rounded-none text-sm border-border/60 focus-visible:ring-primary"
						/>
					</div>

					<div class="space-y-2">
						<label
							for="department"
							class="text-[9px] font-bold uppercase tracking-[0.15em] text-foreground"
						>
							Department
						</label>

						<select
							id="department"
							name="department"
							class="flex h-11 w-full rounded-none border border-border/60 bg-background px-3 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
						>
							{#each departmentOptions as option}
								<option value={option.value}>
									{option.label}
								</option>
							{/each}
						</select>
					</div>
				</div>

				<div class="space-y-2">
					<label
						for="subject"
						class="text-[9px] font-bold uppercase tracking-[0.15em] text-foreground"
					>
						Subject <span class="text-accent">*</span>
					</label>

					<Input
						id="subject"
						name="subject"
						placeholder="What is your enquiry about?"
						class="h-11 rounded-none text-sm border-border/60 focus-visible:ring-primary"
					/>
				</div>

				<div class="space-y-2">
					<label
						for="message"
						class="text-[9px] font-bold uppercase tracking-[0.15em] text-foreground"
					>
						Message <span class="text-accent">*</span>
					</label>

					<Textarea
						id="message"
						name="message"
						placeholder="Tell us how we can help..."
						class="min-h-40 resize-y rounded-none text-sm leading-6 border-border/60 focus-visible:ring-primary"
					/>
				</div>

				<div
					class="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between"
				>
					<p class="max-w-sm text-[10px] leading-5 text-muted-foreground">
						Please provide accurate contact information so the
						relevant office can respond to your enquiry.
					</p>

					<Button
						type="submit"
						class="group inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-none bg-primary px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-accent sm:w-auto"
					>
						Send enquiry

						<ArrowUpRight
							class="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</Button>
				</div>
			</form>
		</div>
	</div>
</section>