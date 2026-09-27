<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import FileText from '@lucide/svelte/icons/file-text';
	import ClipboardList from '@lucide/svelte/icons/clipboard-list';
	import HelpCircle from '@lucide/svelte/icons/help-circle';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
</script>

<svelte:head>
	<title>Admissions | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Explore admission requirements, application steps, and opportunities to join Multimedia University of Kenya."
	/>
</svelte:head>


<!-- HERO -->
<div class="relative">
	<div
		class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 overflow-hidden"
	>
		<div
			class="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
		></div>
	</div>


	<PageHero
		eyebrow="Admissions"
		title="Begin your journey at MMU."
		description="Discover programmes, understand admission requirements, and follow the steps needed to become part of Multimedia University of Kenya."
		actions={[
			{
				label: 'Explore Programmes',
				href: '/academics/programmes'
			},
			{
				label: 'How to Apply',
				href: '/admissions/how-to-apply',
				variant: 'outline'
			}
		]}
	/>
</div>


<!-- ADMISSION PATHWAY -->
<section class="border-y border-border/60">

	<div class="mx-auto max-w-[1440px] px-6 py-16 md:py-24">

		<div class="grid gap-10 lg:grid-cols-[280px_1fr]">

			<div>

				<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
					<span class="h-px w-4 bg-accent"></span>
					01 / Admission Guide
				</p>


				<h2 class="mt-5 text-4xl font-semibold tracking-[-0.05em]">
					Your path to MMU.
				</h2>


				<p class="mt-5 text-sm leading-6 text-muted-foreground">
					Everything you need from choosing a programme to submitting your application.
				</p>

			</div>


			<div class="border-y border-border/60">


				<a
					href="/admissions/how-to-apply"
					class="group grid gap-6 border-b border-border/60 p-6 transition-colors hover:bg-muted/40 md:grid-cols-[80px_1fr_auto] md:items-center"
				>

					<span class="font-mono text-sm text-muted-foreground">
						01
					</span>


					<div>

						<h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
							How to Apply
						</h3>


						<p class="mt-2 text-sm text-muted-foreground">
							Follow the application process and understand what documents you need before applying.
						</p>

					</div>


					<ArrowRight
						class="size-5 text-muted-foreground transition-transform group-hover:translate-x-1"
					/>

				</a>



				<a
					href="/admissions/requirements"
					class="group grid gap-6 border-b border-border/60 p-6 transition-colors hover:bg-muted/40 md:grid-cols-[80px_1fr_auto] md:items-center"
				>

					<span class="font-mono text-sm text-muted-foreground">
						02
					</span>


					<div>

						<h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
							Admission Requirements
						</h3>


						<p class="mt-2 text-sm text-muted-foreground">
							Review academic qualifications and entry requirements for different levels of study.
						</p>

					</div>


					<ArrowRight
						class="size-5 text-muted-foreground transition-transform group-hover:translate-x-1"
					/>

				</a>



				<a
					href="/contact"
					class="group grid gap-6 p-6 transition-colors hover:bg-muted/40 md:grid-cols-[80px_1fr_auto] md:items-center"
				>

					<span class="font-mono text-sm text-muted-foreground">
						03
					</span>


					<div>

						<h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
							Need Assistance?
						</h3>


						<p class="mt-2 text-sm text-muted-foreground">
							Connect with MMU admissions support for guidance and enquiries.
						</p>

					</div>


					<ArrowRight
						class="size-5 text-muted-foreground transition-transform group-hover:translate-x-1"
					/>

				</a>


			</div>


		</div>

	</div>

</section>



<!-- STUDENT TYPES -->
<section class="border-b border-border/60">

<div class="mx-auto max-w-[1440px] px-6 py-16 md:py-24">


<div class="grid gap-10 lg:grid-cols-[280px_1fr]">


<div>

<p class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
02 / Explore Admissions
</p>


<p class="mt-4 text-sm leading-6 text-muted-foreground">
Different applicants have different pathways into MMU.
</p>

</div>


<div class="grid border-y border-border/60 md:grid-cols-3">


<a
href="/academics/programmes"
class="group border-b border-border/60 p-7 hover:bg-muted/40 md:border-b-0 md:border-r"
>

<GraduationCap class="size-5 text-primary"/>


<h3 class="mt-12 text-lg font-semibold">
Undergraduate
</h3>


<p class="mt-3 text-sm text-muted-foreground">
Explore bachelor's programmes and entry pathways.
</p>

</a>



<a
href="/academics/programmes"
class="group border-b border-border/60 p-7 hover:bg-muted/40 md:border-b-0 md:border-r"
>

<FileText class="size-5 text-primary"/>


<h3 class="mt-12 text-lg font-semibold">
Postgraduate
</h3>


<p class="mt-3 text-sm text-muted-foreground">
Discover advanced study and research opportunities.
</p>

</a>



<a
href="/contact"
class="group p-7 hover:bg-muted/40"
>

<HelpCircle class="size-5 text-primary"/>


<h3 class="mt-12 text-lg font-semibold">
Need Help?
</h3>


<p class="mt-3 text-sm text-muted-foreground">
Speak with admissions for guidance.
</p>

</a>



</div>


</div>


</div>

</section>



<!-- CTA -->

<section class="mx-auto max-w-[1440px] px-6 py-16 md:py-24">

<CTASection
	eyebrow="Next Step"
	title="Ready to join MMU?"
	description="Explore programmes, review requirements, and begin your application journey."
	primaryAction={{
		label:'Start Application',
		href:'/admissions/how-to-apply'
	}}
	secondaryAction={{
		label:'Explore Programmes',
		href:'/academics/programmes'
	}}
/>

</section>