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
<section class="border-b bg-muted/20">
	<div class="container mx-auto px-5 py-12 sm:py-14 lg:px-6 lg:py-16">
		<div class="mb-8 flex items-end justify-between gap-6">
			<div>
				<p
					class="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
				>
					Contact directory
				</p>

				<h2
					class="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl"
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

		<div class="grid border border-border md:grid-cols-2 lg:grid-cols-4">
			{#each departments as dept, i}
				<div
					class={`group bg-background p-5 transition-colors hover:bg-muted/40 ${
						i > 0 ? 'border-t md:border-l lg:border-t-0' : ''
					} ${
						i === 2 ? 'md:border-t lg:border-l' : ''
					}`}
				>
					<div class="flex items-start justify-between gap-4">
						<div
							class="flex size-8 shrink-0 items-center justify-center border border-foreground bg-foreground text-background"
						>
							<Building2 class="size-3.5" />
						</div>

						<span
							class="text-[9px] text-muted-foreground"
						>
							0{i + 1}
						</span>
					</div>

					<h3
						class="mt-7 text-xs font-bold uppercase leading-5 tracking-[0.12em]"
					>
						{dept.name}
					</h3>

					<a
						href={`mailto:${dept.email}`}
						class="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
					>
						{dept.email}

						<ArrowUpRight
							class="size-3 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
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

			<div class="mt-10 divide-y border-t">
				<!-- Address -->
				<div class="flex gap-4 py-6">
					<div
						class="flex size-9 shrink-0 items-center justify-center border border-foreground bg-foreground text-background"
					>
						<MapPin class="size-3.5" />
					</div>

					<div>
						<h3
							class="text-[10px] font-bold uppercase tracking-[0.16em]"
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
						class="flex size-9 shrink-0 items-center justify-center border border-foreground bg-foreground text-background"
					>
						<Clock class="size-3.5" />
					</div>

					<div>
						<h3
							class="text-[10px] font-bold uppercase tracking-[0.16em]"
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
						class="flex size-9 shrink-0 items-center justify-center border border-foreground bg-foreground text-background"
					>
						<Mail class="size-3.5" />
					</div>

					<div>
						<h3
							class="text-[10px] font-bold uppercase tracking-[0.16em]"
						>
							General enquiries
						</h3>

						<a
							href="mailto:info@mmu.ac.ke"
							class="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							info@mmu.ac.ke
						</a>
					</div>
				</div>
			</div>

			<!-- Location note -->
			<div class="mt-8 border bg-muted/30 p-5 sm:p-6">
				<div class="flex items-center justify-between">
					<span
						class="text-[9px] font-bold uppercase tracking-[0.18em]"
					>
						Main campus
					</span>

					<MapPin class="size-3.5 text-muted-foreground" />
				</div>

				<p
					class="mt-4 text-xs leading-6 text-muted-foreground"
				>
					Multimedia University of Kenya is situated along
					Magadi Road in Rongai, Nairobi.
				</p>

				<a
					href="/contact"
					class="mt-4 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.12em]"
				>
					View campus information
					<ArrowUpRight class="ml-2 size-3.5" />
				</a>
			</div>
		</div>

		<!-- Form -->
		<div class="border bg-background p-6 sm:p-8 lg:p-10">
			<div class="border-b pb-6">
				<p
					class="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
				>
					Online enquiry
				</p>

				<h2
					class="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl"
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
							class="text-[9px] font-bold uppercase tracking-[0.15em]"
						>
							Full name <span class="text-primary">*</span>
						</label>

						<Input
							id="name"
							name="name"
							placeholder="Your full name"
							class="h-11 rounded-none text-sm"
						/>
					</div>

					<div class="space-y-2">
						<label
							for="email"
							class="text-[9px] font-bold uppercase tracking-[0.15em]"
						>
							Email address <span class="text-primary">*</span>
						</label>

						<Input
							id="email"
							name="email"
							type="email"
							placeholder="you@example.com"
							class="h-11 rounded-none text-sm"
						/>
					</div>
				</div>

				<div class="grid gap-6 sm:grid-cols-2">
					<div class="space-y-2">
						<label
							for="phone"
							class="text-[9px] font-bold uppercase tracking-[0.15em]"
						>
							Phone number
						</label>

						<Input
							id="phone"
							name="phone"
							type="tel"
							placeholder="+254 ..."
							class="h-11 rounded-none text-sm"
						/>
					</div>

					<div class="space-y-2">
						<label
							for="department"
							class="text-[9px] font-bold uppercase tracking-[0.15em]"
						>
							Department
						</label>

						<select
							id="department"
							name="department"
							class="flex h-11 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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
						class="text-[9px] font-bold uppercase tracking-[0.15em]"
					>
						Subject <span class="text-primary">*</span>
					</label>

					<Input
						id="subject"
						name="subject"
						placeholder="What is your enquiry about?"
						class="h-11 rounded-none text-sm"
					/>
				</div>

				<div class="space-y-2">
					<label
						for="message"
						class="text-[9px] font-bold uppercase tracking-[0.15em]"
					>
						Message <span class="text-primary">*</span>
					</label>

					<Textarea
						id="message"
						name="message"
						placeholder="Tell us how we can help..."
						class="min-h-40 resize-y rounded-none text-sm leading-6"
					/>
				</div>

				<div
					class="flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
				>
					<p class="max-w-sm text-[10px] leading-5 text-muted-foreground">
						Please provide accurate contact information so the
						relevant office can respond to your enquiry.
					</p>

					<Button
						type="submit"
						class="group inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-none bg-foreground px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-background transition-colors hover:bg-primary hover:text-primary-foreground sm:w-auto"
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