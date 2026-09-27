<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { Button } from '$lib/components/ui/button';
	import PageHero from '$lib/components/shared/PageHero.svelte';
	import CTASection from '$lib/components/shared/CTASection.svelte';

	import { news } from '$lib/data/news';


	let { news: newsItems = news }: { news: any[] } = $props();


	const [highlightArticle, ...allArticles] = newsItems;


	const pageSize = 6;


	let currentPage = $state(1);


	let totalPages = $derived(
		Math.ceil(allArticles.length / pageSize)
	);


	let paginatedArticles = $derived(
		allArticles.slice(
			(currentPage - 1) * pageSize,
			currentPage * pageSize
		)
	);



	function goToPage(page:number)
	{
		if(page < 1 || page > totalPages)
			return;


		currentPage = page;


		window.scrollTo({
			top:500,
			behavior:'smooth'
		});
	}

</script>

<svelte:head>
	<title>News & Announcements | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Read the latest news, announcements, achievements, and stories from Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	eyebrow="News & Updates"
	title="What's Happening at MMU"
	description="Stay informed about the latest developments, achievements, announcements, and stories from across the university."
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'News' }
	]}
/>

<div class="space-y-0">

	<!-- =========================================================
	     HIGHLIGHTS SECTION
	========================================================= -->
	{#if highlightArticle}

		<div class="border-b border-border/60 bg-muted/20">

			<div class="grid lg:grid-cols-[1fr_320px] lg:min-h-[320px]">

				<div class="flex flex-col justify-between border-b border-border/60 p-6 lg:border-b-0 lg:border-r lg:border-border/60 lg:p-12">

					<div>

						<div class="flex items-center gap-3">

							<span class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">

								<span class="h-px w-5 bg-accent"></span>

								Featured Story

							</span>


							<span class="h-px w-8 bg-border/60"></span>


							{#if highlightArticle.date}

								<span class="font-mono text-[10px] text-muted-foreground">
									{highlightArticle.date}
								</span>

							{/if}

						</div>


						<h2 class="mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">

							{highlightArticle.title}

						</h2>


						<p class="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">

							{highlightArticle.description ??
								highlightArticle.summary ??
								'Read the latest update from Multimedia University of Kenya.'}

						</p>


					</div>


					<div class="mt-8">

						<a
							href="/news/{highlightArticle.slug ?? highlightArticle.id ?? '0'}"
							class="group inline-flex h-12 items-center gap-6 bg-primary px-6 text-[10px] font-bold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
						>

							Read Article

							<ArrowUpRight
								class="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>

						</a>

					</div>


				</div>



				<div class="flex flex-col justify-between p-7 lg:p-8">

					<div>

						<p class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-accent">

							<span class="h-px w-4 bg-accent"></span>

							Spotlight Focus

						</p>


						<p class="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">

							{highlightArticle.category ?? 'Institutional Story'}

						</p>


					</div>


					<div class="mt-6 border-t border-border/60 pt-6">

						<span class="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">

							Multimedia University Chronicle

						</span>

					</div>


				</div>

			</div>

		</div>

	{/if}



	<!-- =========================================================
	     RESULT HEADER
	========================================================= -->

	<div class="grid border-b border-border/60 px-6 py-4 md:grid-cols-[80px_1fr_220px_120px_48px] md:items-center md:gap-5 lg:px-10">

		<div class="hidden md:block">
			<span class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
				No.
			</span>
		</div>


		<div>
			<span class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
				Article
			</span>
		</div>


		<div class="hidden md:block">
			<span class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
				Category
			</span>
		</div>


		<div class="hidden md:block">
			<span class="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
				Date
			</span>
		</div>

	</div>



	<!-- =========================================================
	     ARTICLES
	========================================================= -->

	{#if paginatedArticles.length > 0}

		<div class="px-6 lg:px-10">


			{#each paginatedArticles as article, index}


				<a
					href="/news/{article.slug ?? article.id ?? index + 1}"
					class="group relative grid border-b border-border/60 py-7 transition-colors hover:bg-muted/30 md:grid-cols-[80px_1fr_220px_120px_48px] md:items-center md:gap-5 md:py-8"
				>


					<!-- Number -->

					<div class="hidden md:block">

						<span class="font-mono text-sm text-muted-foreground group-hover:text-primary">

							{(
								((currentPage - 1) * pageSize) + index + 1
							).toString().padStart(2,'0')}

						</span>

					</div>



					<div class="min-w-0">


						<div class="mb-3 flex items-center gap-3">


							<span class="font-mono text-[9px] text-muted-foreground md:hidden">

								{(
									((currentPage - 1) * pageSize) + index + 1
								).toString().padStart(2,'0')}

							</span>


							{#if article.category}

								<span class="text-[9px] font-bold uppercase tracking-[0.12em] text-accent">

									{article.category}

								</span>

							{/if}


						</div>



						<h3 class="text-xl font-semibold tracking-[-0.03em] text-foreground transition-colors group-hover:text-primary md:text-2xl">

							{article.title}

						</h3>


						<p class="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground line-clamp-2">

							{article.description ??
								article.summary ??
								'Read the complete update from MMU.'}

						</p>


					</div>



					<div class="hidden md:block">

						<p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">

							{article.category ?? 'General'}

						</p>

					</div>



					<div class="hidden md:block">

						<p class="font-mono text-xs text-foreground">

							{article.date ?? 'Recent'}

						</p>

					</div>



					<div class="hidden md:flex md:justify-end">

						<div class="flex size-9 items-center justify-center border border-border/60 transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">

							<ArrowUpRight class="size-4"/>

						</div>

					</div>


					<div class="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"></div>


				</a>


			{/each}


		</div>



		<!-- =====================================================
		     PAGINATION
		===================================================== -->


		{#if totalPages >= 1}

			<div class="flex flex-col gap-6 border-b border-border/60 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">


				<button
					type="button"
					onclick={() => goToPage(currentPage - 1)}
					disabled={currentPage === 1}
					class="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground hover:text-primary disabled:opacity-30"
				>

					← Previous

				</button>



				<div class="flex items-center gap-2">


					{#each Array(totalPages) as _, page}


						<button
							type="button"
							onclick={() => goToPage(page + 1)}
							class="flex size-9 items-center justify-center border text-[10px] font-bold transition-colors
							{currentPage === page + 1
								? 'border-primary bg-primary text-primary-foreground'
								: 'border-border/60 text-muted-foreground hover:border-primary hover:text-primary'}"
						>

							{page + 1}

						</button>


					{/each}


				</div>



				<div class="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground sm:block">

					Page {currentPage} of {totalPages}

				</div>



				<button
					type="button"
					onclick={() => goToPage(currentPage + 1)}
					disabled={currentPage === totalPages}
					class="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground hover:text-primary disabled:opacity-30"
				>

					Next →

				</button>


			</div>

		{/if}


	{:else}


		<div class="border-b border-border/60 py-24 text-center">

			<p class="font-mono text-5xl text-muted-foreground/40">
				00
			</p>

			<h3 class="mt-5 text-xl font-semibold">
				No articles found.
			</h3>

		</div>


	{/if}

</div>

<!-- =========================================================
     STAY INFORMED SECTION
========================================================= -->
<section class="border-b border-border/60 bg-muted/20">
	<div class="container mx-auto px-5 py-16 lg:px-6 lg:py-20">

		<div class="grid gap-8 lg:grid-cols-2 lg:items-center">

			<div>
				<p
					class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-accent"
				>
					<span class="h-px w-3 bg-accent"></span>
					Stay Informed
				</p>


				<h2
					class="mt-3 text-3xl font-semibold tracking-[-0.05em] text-foreground md:text-4xl"
				>
					More from MMU.
				</h2>


				<p
					class="mt-4 max-w-xl text-sm leading-7 text-muted-foreground"
				>
					Explore upcoming university events, campus activities, and connect with the Multimedia University community.
				</p>

			</div>



			<div
				class="flex flex-wrap gap-3 lg:justify-end"
			>

			<Button
			href="/events"
			variant="outline"
			class="h-11 rounded-none border-border/60 px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
			>
			Upcoming Events
			<CalendarDays class="ml-2 size-4" />
			</Button>


			<Button
			href="/contact"
			class="h-11 rounded-none bg-primary px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
			>
			Contact Us
			<ArrowRight class="ml-2 size-4" />
			</Button>
			</div>


		</div>

	</div>
</section>