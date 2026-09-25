<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import FileText from '@lucide/svelte/icons/file-text';
	import HelpCircle from '@lucide/svelte/icons/help-circle';
	import Library from '@lucide/svelte/icons/library';

	import { Button } from '$lib/components/ui/button';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<svelte:head>
	<title>University Resources | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Access university resources, information, services, and useful links."
	/>
</svelte:head>

<PageHero
	title="University Resources"
	subtitle="Information & Support"
/>

<section class="container mx-auto px-4 py-16">
	<SectionHeading
		eyebrow="Resources"
		title="Everything You Need"
		description="Access useful information, academic resources, and services that support the university community."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
		<a
			href="#"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary"
		>
			<Library class="size-8 text-primary" />

			<h2 class="mt-5 font-semibold group-hover:text-primary">
				Library
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Access library services, collections, and academic resources.
			</p>

			<span class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
				Explore
				<ArrowRight class="size-4" />
			</span>
		</a>

		<a
			href="#"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary"
		>
			<FileText class="size-8 text-primary" />

			<h2 class="mt-5 font-semibold group-hover:text-primary">
				Downloads
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Find forms, documents, publications, and other useful materials.
			</p>

			<span class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
				View Downloads
				<ArrowRight class="size-4" />
			</span>
		</a>

		<a
			href="#"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary"
		>
			<BookOpen class="size-8 text-primary" />

			<h2 class="mt-5 font-semibold group-hover:text-primary">
				Student Resources
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Find information and services designed to support students.
			</p>

			<span class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
				Explore
				<ArrowRight class="size-4" />
			</span>
		</a>

		<a
			href="#"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary"
		>
			<HelpCircle class="size-8 text-primary" />

			<h2 class="mt-5 font-semibold group-hover:text-primary">
				FAQs
			</h2>

			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Find answers to common questions about the university.
			</p>

			<span class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
				View FAQs
				<ArrowRight class="size-4" />
			</span>
		</a>
	</div>
</section>

<section class="container mx-auto px-4 pb-16">
	<CTASection
		eyebrow="Need Help?"
		title="Can't find what you're looking for?"
		description="Get in touch with the university for assistance or additional information."
		primaryAction={{ label: 'Contact Us', href: '/contact' }}
		secondaryAction={{ label: 'View Admissions', href: '/admissions' }}
	/>
</section>