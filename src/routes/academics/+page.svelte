<script lang="ts">
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';
	import Breadcrumbs from '$lib/components/shared/Breadcrumbs.svelte';
</script>

<svelte:head>
	<title>Academics | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Explore academic programmes, faculties, research, and learning opportunities at Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="Academics"
	title="Learn. Explore. Grow."
	description="Discover academic programmes, faculties, research opportunities, and the learning environment at Multimedia University of Kenya."
	actions={[
		{
			label: 'Explore Programmes',
			href: '/academics/programmes'
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
			{ label: 'Academics', href: '/academics' }
		]}
	/>
</div>

<!-- Academic Areas -->
<section class="container mx-auto px-4 py-16 md:py-20">
	<SectionHeading
		eyebrow="Academic Areas"
		title="Explore MMU Academics"
		description="Discover our programmes, academic schools, research opportunities, and resources for students."
	/>

	<div class="mt-10 grid gap-6 md:grid-cols-2">
		<a
			href="/academics/programmes"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/30"
		>
			<h3 class="font-semibold transition-colors group-hover:text-primary">
				Academic Programmes
			</h3>
			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Browse undergraduate, postgraduate, diploma, certificate, and doctoral
				programmes.
			</p>
			<span class="mt-4 inline-block text-sm font-medium">
				Explore Programmes →
			</span>
		</a>

		<a
			href="/university/schools"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/30"
		>
			<h3 class="font-semibold transition-colors group-hover:text-primary">
				Schools & Faculties
			</h3>
			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Explore our academic schools, faculties, departments, and areas of
				specialization.
			</p>
			<span class="mt-4 inline-block text-sm font-medium">
				Explore Schools →
			</span>
		</a>

		<a
			href="/research"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/30"
		>
			<h3 class="font-semibold transition-colors group-hover:text-primary">
				Research & Innovation
			</h3>
			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Discover research, innovation, and opportunities to contribute to new
				knowledge.
			</p>
			<span class="mt-4 inline-block text-sm font-medium">
				Explore Research →
			</span>
		</a>

		<a
			href="/admissions"
			class="group rounded-lg border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/30"
		>
			<h3 class="font-semibold transition-colors group-hover:text-primary">
				Admissions
			</h3>
			<p class="mt-2 text-sm leading-6 text-muted-foreground">
				Find admission information and take the next step toward joining the
				university.
			</p>
			<span class="mt-4 inline-block text-sm font-medium">
				View Admissions →
			</span>
		</a>
	</div>
</section>

<!-- Academic Community -->
<section class="border-y bg-muted/40">
	<div class="container mx-auto px-4 py-16 md:py-20">
		<SectionHeading
			eyebrow="More Than Classrooms"
			title="An Academic Community"
			description="Learning at MMU extends beyond the classroom through research, innovation, collaboration, and student development."
		/>

		<div class="mt-8 grid gap-6 md:grid-cols-3">
			<div class="rounded-lg border bg-background p-6">
				<h3 class="font-semibold">Learning</h3>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">
					Build practical knowledge and develop the skills needed for your
					academic and professional journey.
				</p>
			</div>

			<div class="rounded-lg border bg-background p-6">
				<h3 class="font-semibold">Research</h3>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">
					Engage with research and innovation across different academic
					disciplines.
				</p>
			</div>

			<div class="rounded-lg border bg-background p-6">
				<h3 class="font-semibold">Community</h3>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">
					Connect with students, faculty, researchers, and the wider university
					community.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="container mx-auto px-4 py-16 md:py-20">
	<CTASection
		eyebrow="Ready to Begin?"
		title="Find the programme that's right for you."
		description="Explore the programme catalogue and review admission information to plan your next step."
		primaryAction={{
			label: 'Explore Programmes',
			href: '/academics/programmes'
		}}
		secondaryAction={{
			label: 'View Admissions',
			href: '/admissions'
		}}
	/>
</section>

