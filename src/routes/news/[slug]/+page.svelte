<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Button } from '$lib/components/ui/button';
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

<div class="space-y-0">
	<!-- =========================================================
	     ARTICLE METADATA BAR
	========================================================= -->
	<div class="border-y border-border/60 bg-muted/20">
		<div class="container mx-auto px-5 py-6 lg:px-6">
			<div class="flex flex-wrap items-center justify-between gap-6">
				<div class="flex flex-wrap items-center gap-x-8 gap-y-3">
					<div>
						<span class="text-[9px] font-bold uppercase tracking-[0.14em] text-accent block">
							Published Date
						</span>
						<span class="font-mono text-xs text-foreground mt-1 block">
							{article.date}
						</span>
					</div>

					<div class="h-6 w-px bg-border/60"></div>

					<div>
						<span class="text-[9px] font-bold uppercase tracking-[0.14em] text-accent block">
							Author / Source
						</span>
						<span class="text-xs font-semibold text-foreground mt-1 block uppercase tracking-wider">
							{article.author}
						</span>
					</div>

					<div class="h-6 w-px bg-border/60"></div>

					<div>
						<span class="text-[9px] font-bold uppercase tracking-[0.14em] text-accent block">
							Category
						</span>
						<span class="text-xs font-semibold text-foreground mt-1 block uppercase tracking-wider">
							{article.category}
						</span>
					</div>
				</div>

				<div>
					<span class="font-mono text-xs text-muted-foreground">
						Multimedia University Chronicle
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- =========================================================
	     ARTICLE BODY CONTENT
	========================================================= -->
	<main class="container mx-auto px-5 py-16 lg:px-6">
		<div class="grid gap-12 lg:grid-cols-12">
			<!-- Main content column -->
			<article class="lg:col-span-8 space-y-8">
				<div class="border-b border-border/60 pb-12">
					<h2 class="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl mb-6">
						Dispatch Details
					</h2>

					<div class="prose prose-neutral dark:prose-invert max-w-none">
						<p class="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
							{article.content}
						</p>
					</div>
				</div>
			</article>

			<!-- Sidebar side panel -->
			<aside class="lg:col-span-4">
				<div class="sticky top-24 rounded-xl border border-border/60 bg-muted/10 p-6 space-y-6">
					<div>
						<p class="text-[9px] font-bold uppercase tracking-[0.16em] text-accent flex items-center gap-2">
							<span class="h-px w-4 bg-accent"></span>
							Quick Overview
						</p>
						<h3 class="mt-3 text-lg font-semibold text-foreground">
							Article Summary
						</h3>
					</div>

					<div class="space-y-4 pt-4 border-t border-border/60 text-sm">
						<div>
							<span class="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">Title</span>
							<p class="font-medium text-foreground mt-1">{article.title}</p>
						</div>
						<div>
							<span class="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">Category</span>
							<p class="font-medium text-foreground mt-1 uppercase text-xs">{article.category}</p>
						</div>
						<div>
							<span class="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">Date</span>
							<p class="font-medium text-foreground mt-1 font-mono text-xs">{article.date}</p>
						</div>
					</div>
				</div>
			</aside>
		</div>
	</main>
</div>

<!-- =========================================================
     STAY INFORMED SECTION
========================================================= -->
<section class="border-t border-border/60 bg-muted/20">
	<div class="container mx-auto px-5 py-16 lg:px-6">
		<div class="grid gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
					<span class="h-px w-3 bg-accent"></span>
					Stay Informed
				</p>

				<h2 class="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					More from MMU.
				</h2>

				<p class="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xl">
					Explore the latest news, announcements, and stories from across the university.
				</p>
			</div>

			<div class="flex flex-wrap gap-3 lg:justify-end">
				<Button
					href="/news"
					variant="outline"
					class="border-border text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground h-11 px-6 text-xs font-bold uppercase tracking-wider"
				>
					View All News
					<ArrowUpRight class="ml-2 size-4" />
				</Button>

				<Button
					href="/contact"
					class="bg-primary text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground h-11 px-6 text-xs font-bold uppercase tracking-wider"
				>
					Contact Us
					<ArrowRight class="ml-2 size-4" />
				</Button>
			</div>
		</div>
	</div>
</section>