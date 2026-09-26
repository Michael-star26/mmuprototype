<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import User from '@lucide/svelte/icons/user';

	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';

	import CTASection from '$lib/components/shared/CTASection.svelte';
	import PageHero from '$lib/components/shared/PageHero.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { article } = data;
</script>

<svelte:head>
	<title>{article.title} | Multimedia University of Kenya</title>
	<meta name="description" content={article.summary} />
</svelte:head>

<PageHero
	eyebrow={article.category}
	title={article.title}
	description={article.summary}
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'News', href: '/news' },
		{ label: article.title }
	]}
/>

<main class="container mx-auto px-4 py-12">
	<div class="grid gap-12 lg:grid-cols-3">
		<article class="space-y-8 lg:col-span-2">
			<div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
				<div class="flex items-center gap-2">
					<CalendarDays class="size-4 shrink-0" />
					<span>{article.date}</span>
				</div>

				<div class="flex items-center gap-2">
					<User class="size-4 shrink-0" />
					<span>{article.author}</span>
				</div>
			</div>

			<div class="border-t pt-8">
				<Badge variant="secondary">{article.category}</Badge>

				<div class="mt-6">
					<p class="leading-8 text-muted-foreground">
						{article.content}
					</p>
				</div>
			</div>
		</article>

		<aside>
			<Card.Root class="lg:sticky lg:top-24">
				<Card.Header>
					<Card.Title>Article Information</Card.Title>
					<Card.Description>
						Details about this news article.
					</Card.Description>
				</Card.Header>

				<Card.Content class="space-y-5">
					<div>
						<p class="text-sm font-medium text-muted-foreground">
							Published
						</p>
						<p class="mt-1 font-medium">{article.date}</p>
					</div>

					<div>
						<p class="text-sm font-medium text-muted-foreground">
							Author
						</p>
						<p class="mt-1 font-medium">{article.author}</p>
					</div>

					<div>
						<p class="text-sm font-medium text-muted-foreground">
							Category
						</p>
						<p class="mt-1 font-medium">{article.category}</p>
					</div>
				</Card.Content>
			</Card.Root>
		</aside>
	</div>
</main>

<section class="container mx-auto px-4 pb-16">
	<CTASection
		eyebrow="More News"
		title="Stay up to date with MMU."
		description="Explore the latest news, announcements, and stories from across the university."
		primaryAction={{ label: 'View All News', href: '/news' }}
		secondaryAction={{ label: 'Contact Us', href: '/contact' }}
	/>
</section>