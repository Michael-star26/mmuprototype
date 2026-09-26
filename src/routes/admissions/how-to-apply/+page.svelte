<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Button } from '$lib/components/ui/button';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';

	const steps = [
		{
			number: '01',
			title: 'Create an Account',
			description:
				'Create an applicant account to begin your application and provide your basic information.'
		},
		{
			number: '02',
			title: 'Choose Your Level of Study',
			description:
				'Select the level of study you are applying for, such as undergraduate or postgraduate study.'
		},
		{
			number: '03',
			title: 'Select Your Programme',
			description:
				'Browse the available programmes and select the course you would like to apply for.'
		},
		{
			number: '04',
			title: 'Choose Your Funding Mode',
			description:
				'Provide information about how you intend to finance your studies.'
		},
		{
			number: '05',
			title: 'Complete Your Application',
			description:
				'Review the information you have provided and complete your application.'
		}
	];
</script>

<svelte:head>
	<title>How to Apply | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Learn how to apply for programmes at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Admissions"
	title="Your Application Journey"
	description="Follow the application process and prepare the information you need before submitting your application to MMU."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Admissions', href: '/admissions' },
		{ label: 'How to Apply' }
	]}
	actions={[
		{
			label: 'View Requirements',
			href: '/admissions/requirements'
		},
		{
			label: 'Explore Programmes',
			href: '/academics/programmes',
			variant: 'outline'
		}
	]}
/>

<section class="container mx-auto px-4 py-16 md:py-20">
	<div class="mx-auto max-w-3xl">
		<SectionHeading
			eyebrow="Application Process"
			title="Apply in Five Steps"
			description="Follow these steps to begin your application to MMU."
		/>

		<div class="mt-12">
			{#each steps as step, i}
				<div class="relative flex gap-6 pb-10 last:pb-0">
					{#if i < steps.length - 1}
						<div
							class="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border"
							aria-hidden="true"
						></div>
					{/if}

					<div
						class="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
					>
						{step.number}
					</div>

					<div class="pt-1">
						<h2 class="text-lg font-semibold">
							{step.title}
						</h2>

						<p class="mt-2 leading-6 text-muted-foreground">
							{step.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-16 md:py-20">
		<SectionHeading
			align="center"
			eyebrow="Before You Begin"
			title="Have Everything Ready?"
			description="Make sure you've reviewed the programme requirements before starting your application."
		/>

		<div class="mt-8 flex flex-wrap justify-center gap-3">
			<Button href="/admissions/requirements" variant="outline">
				View Requirements
			</Button>

			<Button href="/academics/programmes">
				Explore Programmes
				<ArrowRight class="ml-2 size-4" />
			</Button>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 py-16 md:py-20">
	<CTASection
		eyebrow="Ready?"
		title="Start your application."
		description="Once you've selected your programme and reviewed the requirements, you can begin the application process."
		primaryAction={{
			label: 'Begin Application',
			href: '/admissions'
		}}
		secondaryAction={{
			label: 'Contact Us',
			href: '/contact'
		}}
	/>
</section>