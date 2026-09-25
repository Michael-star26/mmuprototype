<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';

	import { Badge } from '$lib/components/ui/badge';
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
	title="Admission Requirements"
	subtitle="Before You Apply"
/>

<section class="container mx-auto px-4 py-16">
	<div class="mx-auto max-w-3xl">
		<SectionHeading
			eyebrow="Undergraduate Admissions"
			title="General Admission Requirements"
			description="Review the general academic requirements before beginning your application."
		/>

		<div class="mt-10 space-y-6">
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
						<Check class="size-5 text-primary" />
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
	<div class="container mx-auto px-4 py-16">
		<SectionHeading
			eyebrow="Important"
			title="Programme-Specific Requirements"
			description="Some programmes may have additional subject, grade, or professional requirements beyond the general admission criteria."
		/>

		<div class="mx-auto mt-8 max-w-3xl rounded-lg border bg-background p-6">
			<Badge variant="secondary">Check Before Applying</Badge>

			<p class="mt-4 text-sm leading-6 text-muted-foreground">
				Applicants should review the requirements for their specific
				programme before submitting an application. Programme requirements
				may differ depending on the course of study.
			</p>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 py-16">
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