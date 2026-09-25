<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Check from '@lucide/svelte/icons/check';

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
	title="How to Apply"
	subtitle="Your Application Journey"
/>

<section class="container mx-auto px-4 py-16">
	<div class="mx-auto max-w-3xl">
		<SectionHeading
			eyebrow="Application Process"
			title="Apply in Five Steps"
			description="Follow these steps to begin your application to MMU."
		/>

		<div class="mt-12">
			{#each steps as step, i}
				<div class="relative flex gap-6 pb-10 last:pb-0">
					<!-- Connector -->
					{#if i < steps.length - 1}
						<div
							class="absolute left-5 top-11 h-[calc(100%-2rem)] w-px bg-border"
						></div>
					{/if}

					<!-- Step number -->
					<div
						class="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
					>
						{step.number}
					</div>

					<!-- Step content -->
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
	<div class="container mx-auto px-4 py-16">
		<SectionHeading
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
				<ArrowRight />
			</Button>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 py-16">
	<CTASection
		eyebrow="Ready?"
		title="Start your application."
		description="Once you've selected your programme and reviewed the requirements, you can begin the application process."
		primaryAction={{
			label: 'Apply Now',
			href: '#'
		}}
		secondaryAction={{
			label: 'Contact Us',
			href: '/contact'
		}}
	/>
</section>