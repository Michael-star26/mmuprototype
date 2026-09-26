```svelte
<script lang="ts">
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
	import Breadcrumbs from '$lib/components/shared/Breadcrumbs.svelte';
	import ProgrammeList from '$lib/components/programmes/ProgrammeList.svelte';

	import { programmes } from '$lib/data/programmes';
</script>

<svelte:head>
	<title>Academic Programmes | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Explore academic programmes at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Academics"
	title="Academic Programmes"
	description="Explore undergraduate, postgraduate, diploma, certificate, and doctoral programmes at Multimedia University of Kenya."
	actions={[
		{
			label: 'Browse Programmes',
			href: '#programmes'
		},
		{
			label: 'Admissions',
			href: '/admissions',
			variant: 'outline'
		}
	]}
/>

<div class="container mx-auto px-4 pt-6">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/' },
			{ label: 'Academics', href: '/academics' },
			{ label: 'Programmes', href: '/academics/programmes' }
		]}
	/>
</div>

<section id="programmes" class="container mx-auto px-4 py-16 md:py-20">
	<SectionHeading
		eyebrow="Programme Catalogue"
		title="Find Your Programme"
		description="Search and filter programmes by study level, faculty, and duration."
	/>

	<div class="mt-10">
		<ProgrammeList {programmes} />
	</div>
</section>

<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-16 md:py-20">
		<SectionHeading
			eyebrow="Academic Community"
			title="More Than Classrooms"
			description="Explore the schools, research opportunities, and resources that support the student experience."
		/>

		<div class="mt-8 grid gap-6 md:grid-cols-3">
			<a
				href="/university/schools"
				class="rounded-lg border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/30"
			>
				<h3 class="font-semibold">Schools & Faculties</h3>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">
					Explore our academic schools, faculties, and areas of specialization.
				</p>
			</a>

			<a
				href="/research"
				class="rounded-lg border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/30"
			>
				<h3 class="font-semibold">Research</h3>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">
					Discover research, innovation, and opportunities to contribute to
					new knowledge.
				</p>
			</a>

			<a
				href="/admissions"
				class="rounded-lg border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/30"
			>
				<h3 class="font-semibold">Admissions</h3>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">
					Find admission information and take the next step toward joining
					the university.
				</p>
			</a>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 py-16 md:py-20">
	<CTASection
		eyebrow="Ready to Begin?"
		title="Find the programme that's right for you."
		description="Review our programmes and admission information to plan your next step."
		primaryAction={{
			label: 'View Admissions',
			href: '/admissions'
		}}
		secondaryAction={{
			label: 'Contact Us',
			href: '/contact'
		}}
	/>
</section>
```
