<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import FileText from '@lucide/svelte/icons/file-text';
	import ClipboardList from '@lucide/svelte/icons/clipboard-list';
	import HelpCircle from '@lucide/svelte/icons/help-circle';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
</script>

<svelte:head>
	<title>Admissions | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Find admission information, requirements, and application guidance at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Admissions"
	title="Start Your Journey"
	description="Find the information you need to understand the admission process and prepare your application."
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

<section class="container mx-auto px-4 py-16 md:py-20">
	<SectionHeading
		eyebrow="Your Next Step"
		title="Join MMU"
		description="Find the information you need to understand our admission process and prepare your application."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-3">
		<a
			href="/admissions/how-to-apply"
			class="group rounded-lg border border-border/60 bg-background p-6 transition-all hover:border-primary hover:bg-muted/30 hover:shadow-sm"
		>
			<div
				class="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
			>
				<FileText class="size-5" />
			</div>

			<h2 class="mt-5 text-lg font-semibold transition-colors group-hover:text-primary">
				How to Apply
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Follow the application process and learn what to prepare before
				submitting your application.
			</p>

			<div class="mt-5 flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
				Start Application Guide
				<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
			</div>
		</a>

		<a
			href="/admissions/requirements"
			class="group rounded-lg border border-border/60 bg-background p-6 transition-all hover:border-primary hover:bg-muted/30 hover:shadow-sm"
		>
			<div
				class="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
			>
				<ClipboardList class="size-5" />
			</div>

			<h2 class="mt-5 text-lg font-semibold transition-colors group-hover:text-primary">
				Admission Requirements
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Review the academic and application requirements for prospective
				students.
			</p>

			<div class="mt-5 flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
				View Requirements
				<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
			</div>
		</a>

		<a
			href="/contact"
			class="group rounded-lg border border-border/60 bg-background p-6 transition-all hover:border-primary hover:bg-muted/30 hover:shadow-sm"
		>
			<div
				class="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
			>
				<HelpCircle class="size-5" />
			</div>

			<h2 class="mt-5 text-lg font-semibold transition-colors group-hover:text-primary">
				Need Help?
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Contact the university if you need assistance with admissions or
				have questions about the application process.
			</p>

			<div class="mt-5 flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
				Contact Us
				<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
			</div>
		</a>
	</div>
</section>

<section class="border-y border-border/60 bg-muted/40">
	<div class="container mx-auto px-4 py-16 md:py-20">
		<SectionHeading
			align="center"
			eyebrow="Plan Your Application"
			title="Choose your next step"
			description="Explore our academic programmes, review admission requirements, and learn how to apply."
		/>

		<div class="mt-8 flex flex-wrap justify-center gap-3">
			<a
				href="/academics/programmes"
				class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-accent"
			>
				Explore Programmes
				<ArrowRight class="ml-2 size-4" />
			</a>

			<a
				href="/admissions/requirements"
				class="inline-flex h-10 items-center justify-center rounded-md border border-primary/30 bg-background px-4 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
			>
				View Requirements
			</a>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 py-16 md:py-20">
	<CTASection
		eyebrow="Have Questions?"
		title="We're here to help."
		description="If you need additional information about admissions, programmes, or the application process, get in touch with us."
		primaryAction={{
			label: 'Contact MMU',
			href: '/contact'
		}}
		secondaryAction={{
			label: 'View Programmes',
			href: '/academics/programmes'
		}}
	/>
</section>