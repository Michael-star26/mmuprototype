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
		{
			value: 'admissions',
			label: 'Admissions Office'
		},
		{
			value: 'registrar',
			label: 'Academic Registrar'
		},
		{
			value: 'finance',
			label: 'Finance Office'
		},
		{
			value: 'ict',
			label: 'ICT Helpdesk'
		},
		{
			value: 'general',
			label: 'General Enquiries'
		}
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
	description="Find the right office, visit our campus, or send an enquiry directly to Multimedia University of Kenya."
	breadcrumbs={[
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Contact'
		}
	]}
/>


<main>

	<!-- CONTACT DIRECTORY -->
	<section class="border-b border-border/60 bg-muted/20">

		<div
			class="container mx-auto px-5 py-14 sm:py-16 lg:px-6 lg:py-20"
		>

			<div
				class="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
			>

				<div>

					<p
						class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent"
					>
						<span class="h-px w-6 bg-accent"></span>

						Contact directory
					</p>


					<h2
						class="mt-3 text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl"
					>
						Find the right office.
					</h2>

				</div>


				<p
					class="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
				>
					01 — 04
				</p>

			</div>



			<div
				class="grid gap-px border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-4"
			>

				{#each departments as department, index}

					<div
						class="group bg-background p-6 transition-colors hover:bg-muted/40"
					>

						<div
							class="flex items-start justify-between"
						>

							<div
								class="flex size-9 items-center justify-center border border-primary bg-primary text-primary-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
							>

								<Building2 class="size-4" />

							</div>


							<span
								class="font-mono text-[10px] font-bold text-primary"
							>
								0{index + 1}
							</span>

						</div>



						<h3
							class="mt-8 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-foreground transition-colors group-hover:text-primary"
						>
							{department.name}
						</h3>



						<a
							href={`mailto:${department.email}`}
							class="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
						>

							{department.email}


							<ArrowUpRight
								class="size-3 opacity-50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
							/>

						</a>


					</div>

				{/each}

			</div>


		</div>

	</section>
	<!-- CONTACT INFORMATION + FORM -->
	<section
	class="container mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-28"
>

		<div
			class="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
		>


			<!-- INFORMATION COLUMN -->
			<div>


				<SectionHeading
					eyebrow="Visit & contact"
					title="University coordinates."
					description="Reach the relevant office or visit Multimedia University of Kenya's main campus."
				/>



				<div
					class="mt-10 divide-y divide-border/60 border-t border-border/60"
				>


					<!-- ADDRESS -->

					<div class="flex gap-4 py-7">

						<div
							class="flex size-9 shrink-0 items-center justify-center border border-primary bg-primary text-primary-foreground"
						>

							<MapPin class="size-4" />

						</div>


						<div>

							<h3
								class="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground"
							>
								Physical address
							</h3>


							<p
								class="mt-2 text-sm leading-7 text-muted-foreground"
							>
								Magadi Road, Rongai<br />
								P.O. Box 15653 – 00503<br />
								Nairobi, Kenya
							</p>

						</div>

					</div>




					<!-- HOURS -->

					<div class="flex gap-4 py-7">

						<div
							class="flex size-9 shrink-0 items-center justify-center border border-primary bg-primary text-primary-foreground"
						>

							<Clock class="size-4" />

						</div>


						<div>

							<h3
								class="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground"
							>
								Office hours
							</h3>


							<p
								class="mt-2 text-sm leading-7 text-muted-foreground"
							>
								Monday – Friday<br />
								08:00 AM – 05:00 PM
							</p>

						</div>

					</div>




					<!-- EMAIL -->

					<div class="flex gap-4 py-7">

						<div
							class="flex size-9 shrink-0 items-center justify-center border border-primary bg-primary text-primary-foreground"
						>

							<Mail class="size-4" />

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




				<!-- CAMPUS CARD -->

				<div
					class="mt-8 border border-border/60 bg-muted/30 p-6"
				>

					<div
						class="flex items-center justify-between"
					>

						<span
							class="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground"
						>
							Main campus
						</span>


						<MapPin class="size-4 text-accent" />

					</div>



					<p
						class="mt-4 text-sm leading-7 text-muted-foreground"
					>
						Multimedia University of Kenya is located along
						Magadi Road in Rongai, Nairobi.
					</p>



					<a
						href="/about"
						class="group mt-5 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent"
					>

						View campus information


						<ArrowUpRight
							class="ml-2 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>

					</a>


				</div>


			</div>
						<!-- ENQUIRY FORM -->

						<div
						class="border border-border/60 bg-background p-6 sm:p-8 lg:p-10"
					>
		
						<div
							class="border-b border-border/60 pb-6"
						>
		
							<p
								class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent"
							>
								<span class="h-px w-6 bg-accent"></span>
		
								Online enquiry
							</p>
		
		
							<h2
								class="mt-3 text-2xl font-semibold tracking-[-0.045em] text-foreground sm:text-3xl"
							>
								Send us a message.
							</h2>
		
		
							<p
								class="mt-3 max-w-lg text-sm leading-7 text-muted-foreground"
							>
								Provide your details and choose the office that can
								best assist with your enquiry.
							</p>
		
						</div>
		
		
		
		
						<form class="mt-8 space-y-6">
		
		
							<div class="grid gap-6 sm:grid-cols-2">
		
		
								<div class="space-y-2">
		
									<label
										for="name"
										class="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground"
									>
										Full name
										<span class="text-accent">*</span>
									</label>
		
		
									<Input
										id="name"
										name="name"
										placeholder="Your full name"
										class="h-11 rounded-none border-border/60 text-sm focus-visible:ring-primary"
									/>
		
								</div>
		
		
		
		
								<div class="space-y-2">
		
									<label
										for="email"
										class="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground"
									>
										Email address
										<span class="text-accent">*</span>
									</label>
		
		
									<Input
										id="email"
										name="email"
										type="email"
										placeholder="you@example.com"
										class="h-11 rounded-none border-border/60 text-sm focus-visible:ring-primary"
									/>
		
								</div>
		
		
							</div>
		
		
		
		
		
							<div class="grid gap-6 sm:grid-cols-2">
		
		
								<div class="space-y-2">
		
									<label
										for="phone"
										class="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground"
									>
										Phone number
									</label>
		
		
									<Input
										id="phone"
										name="phone"
										type="tel"
										placeholder="+254 ..."
										class="h-11 rounded-none border-border/60 text-sm focus-visible:ring-primary"
									/>
		
								</div>
		
		
		
		
		
								<div class="space-y-2">
		
									<label
										for="department"
										class="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground"
									>
										Department
									</label>
		
		
									<select
										id="department"
										name="department"
										class="h-11 w-full rounded-none border border-border/60 bg-background px-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
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
									class="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground"
								>
									Subject
									<span class="text-accent">*</span>
								</label>
		
		
								<Input
									id="subject"
									name="subject"
									placeholder="What is your enquiry about?"
									class="h-11 rounded-none border-border/60 text-sm focus-visible:ring-primary"
								/>
		
							</div>
		
		
		
		
		
							<div class="space-y-2">
		
								<label
									for="message"
									class="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground"
								>
									Message
									<span class="text-accent">*</span>
								</label>
		
		
								<Textarea
									id="message"
									name="message"
									placeholder="Tell us how we can help..."
									class="min-h-44 resize-y rounded-none border-border/60 text-sm leading-7 focus-visible:ring-primary"
								/>
		
							</div>
		
		
		
		
		
		
							<div
								class="flex flex-col gap-5 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between"
							>
		
		
								<p
									class="max-w-sm text-[10px] leading-5 text-muted-foreground"
								>
									Please provide accurate information so the
									correct office can respond to your enquiry.
								</p>
		
		
		
		
								<Button
									type="submit"
									class="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-none bg-primary px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-accent sm:w-auto"
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
	

</main>