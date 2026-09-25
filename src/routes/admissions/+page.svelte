<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import FileText from '@lucide/svelte/icons/file-text';
	import ClipboardList from '@lucide/svelte/icons/clipboard-list';
	import HelpCircle from '@lucide/svelte/icons/help-circle';

	import { Button } from '$lib/components/ui/button';

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
	title="Admissions"
	subtitle="Start Your Journey"
/>

<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="Your Next Step"
		title="Join MMU"
		description="Find the information you need to understand our admission process and prepare your application."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-3">
		<a
			href="/admissions/how-to-apply"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary"
		>
			<div
				class="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary"
			>
				<FileText class="size-5" />
			</div>

			<h2 class="mt-5 text-lg font-semibold group-hover:text-primary">
				How to Apply
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Follow the application process and learn what to prepare before
				submitting your application.
			</p>

			<div class="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
				Start Application Guide
				<ArrowRight class="size-4" />
			</div>
		</a>

		<a
			href="/admissions/requirements"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary"
		>
			<div
				class="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary"
			>
				<ClipboardList class="size-5" />
			</div>

			<h2 class="mt-5 text-lg font-semibold group-hover:text-primary">
				Admission Requirements
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Review the academic and application requirements for prospective
				students.
			</p>

			<div class="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
				View Requirements
				<ArrowRight class="size-4" />
			</div>
		</a>

		<a
			href="/contact"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary"
		>
			<div
				class="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary"
			>
				<HelpCircle class="size-5" />
			</div>

			<h2 class="mt-5 text-lg font-semibold group-hover:text-primary">
				Need Help?
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Contact the university if you need assistance with admissions or
				have questions about the application process.
			</p>

			<div class="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
				Contact Us
				<ArrowRight class="size-4" />
			</div>
		</a>
	</div>
</section>

<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-16">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-2xl font-bold tracking-tight md:text-3xl">
				Ready to get started?
			</h2>

			<p class="mt-4 text-muted-foreground">
				Explore our academic programmes first, then review the requirements
				for your chosen programme.
			</p>

			<div class="mt-7 flex flex-wrap justify-center gap-3">
				<Button href="/academics/programmes">
					Explore Programmes
					<ArrowRight />
				</Button>

				<Button href="/admissions/how-to-apply" variant="outline">
					How to Apply
				</Button>
			</div>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 py-16">
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