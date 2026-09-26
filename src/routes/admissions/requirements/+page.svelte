<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';

	import * as Card from '$lib/components/ui/card';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
</script>

<svelte:head>
	<title>Admission Requirements | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Review admission requirements for programmes at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Admissions"
	title="Before You Apply"
	description="Review the general admission requirements and programme-specific criteria before beginning your application."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Admissions', href: '/admissions' },
		{ label: 'Requirements' }
	]}
	actions={[
		{
			label: 'How to Apply',
			href: '/admissions/how-to-apply'
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
			eyebrow="Undergraduate Admissions"
			title="General Admission Requirements"
			description="Review the general academic requirements before beginning your application."
		/>

		<div class="mt-10">
			<Card.Root>
				<Card.Header>
					<div class="flex items-start gap-4">
						<div
							class="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
						>
							<GraduationCap class="size-5" />
						</div>

						<div>
							<Card.Title>Degree Programmes</Card.Title>
							<Card.Description>
								General entry requirement
							</Card.Description>
						</div>
					</div>
				</Card.Header>

				<Card.Content>
					<div class="flex items-center gap-3">
						<Check class="size-5 text-primary" aria-hidden="true" />

						<span class="text-lg font-semibold">
							C+ and above
						</span>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</section>

<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-16 md:py-20">
		<SectionHeading
			eyebrow="Important"
			title="Programme-Specific Requirements"
			description="Some programmes may have additional subject, grade, or professional requirements beyond the general admission criteria."
		/>

		<Card.Root class="mx-auto mt-8 max-w-3xl">
			<Card.Header>
				<Card.Title>Check Your Programme</Card.Title>
				<Card.Description>
					Requirements may vary by course of study.
				</Card.Description>
			</Card.Header>

			<Card.Content>
				<p class="text-sm leading-6 text-muted-foreground">
					Applicants should review the requirements for their specific
					programme before submitting an application. Programme requirements
					may differ depending on the course of study.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</section>

<section class="container mx-auto px-4 py-16 md:py-20">
	<CTASection
		eyebrow="Next Step"
		title="Ready to apply?"
		description="Once you've confirmed that you meet the requirements, learn how to complete your application."
		primaryAction={{
			label: 'How to Apply',
			href: '/admissions/how-to-apply'
		}}
		secondaryAction={{
			label: 'Explore Programmes',
			href: '/academics/programmes'
		}}
	/>
</section>