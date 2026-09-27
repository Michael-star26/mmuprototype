<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import Clock from '@lucide/svelte/icons/clock';
	import MapPin from '@lucide/svelte/icons/map-pin';

	import { Button } from '$lib/components/ui/button';
	import PageHero from '$lib/components/shared/PageHero.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let { event } = data;
</script>


<svelte:head>
	<title>{event.title} | Multimedia University of Kenya</title>

	<meta
		name="description"
		content={event.description}
	/>
</svelte:head>



<PageHero
	eyebrow={event.category ?? 'University Event'}
	title={event.title}
	description={event.description}
	breadcrumbs={[
		{ label: 'Home', href: '/' },
		{ label: 'Events', href: '/events' },
		{ label: event.title }
	]}
/>



<main>


<!-- META STRIP -->
<section class="border-y border-border/60 bg-muted/20">

	<div
		class="container mx-auto grid gap-8 px-5 py-8 sm:grid-cols-3 lg:px-6"
	>


		<div class="flex gap-4">

			<CalendarDays
				class="size-4 shrink-0 text-accent"
			/>

			<div>

				<p
					class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
				>
					Date
				</p>

				<p
					class="mt-2 font-mono text-xs text-foreground"
				>
					{event.date}
				</p>

			</div>

		</div>



		<div class="flex gap-4">

			<Clock
				class="size-4 shrink-0 text-accent"
			/>

			<div>

				<p
					class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
				>
					Time
				</p>

				<p
					class="mt-2 font-mono text-xs text-foreground"
				>
					{event.time ?? 'To be announced'}
				</p>

			</div>

		</div>



		<div class="flex gap-4">

			<MapPin
				class="size-4 shrink-0 text-accent"
			/>

			<div>

				<p
					class="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
				>
					Venue
				</p>

				<p
					class="mt-2 text-xs font-semibold uppercase tracking-wide text-foreground"
				>
					{event.location ?? 'Main Campus'}
				</p>

			</div>

		</div>


	</div>

</section>





<!-- CONTENT -->

<section>

<div
	class="container mx-auto grid gap-12 px-5 py-16 lg:grid-cols-[1fr_280px] lg:px-6 lg:py-24"
>



<article>


	<p
		class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent flex items-center gap-2"
	>
		<span class="h-px w-5 bg-accent"></span>
		Event Overview
	</p>



	<h2
		class="mt-5 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl"
	>
		About this event
	</h2>



	<p
		class="mt-6 max-w-3xl text-base leading-8 text-muted-foreground"
	>
		{event.description}
	</p>




	{#if event.content}

	<div
		class="mt-12 border-t border-border/60 pt-10"
	>

		<h3
			class="text-xl font-semibold tracking-tight text-foreground"
		>
			Event details
		</h3>


		<p
			class="mt-5 whitespace-pre-line text-sm leading-8 text-muted-foreground"
		>
			{event.content}
		</p>


	</div>

	{/if}



</article>






<!-- SIDE INFO -->

<aside>


<div
	class="sticky top-24 border-l border-border/60 pl-6"
>


<p
	class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent"
>
	Quick information
</p>



<div
	class="mt-6 space-y-6"
>


<div>

<p
class="text-[9px] uppercase tracking-[0.14em] text-muted-foreground"
>
Category
</p>

<p
class="mt-2 text-xs font-semibold uppercase tracking-wide text-foreground"
>
{event.category}
</p>

</div>




<div>

<p
class="text-[9px] uppercase tracking-[0.14em] text-muted-foreground"
>
Schedule
</p>

<p
class="mt-2 font-mono text-xs text-foreground"
>
{event.date}
<br/>
{event.time}
</p>

</div>




<div>

<p
class="text-[9px] uppercase tracking-[0.14em] text-muted-foreground"
>
Location
</p>

<p
class="mt-2 text-xs font-semibold uppercase tracking-wide text-foreground"
>
{event.location}
</p>

</div>



</div>




<div
class="mt-8 border-t border-border/60 pt-6"
>

<Button
	href="/contact"
	variant="outline"
	class="w-full rounded-none text-[10px] font-bold uppercase tracking-[0.14em]"
>
	Contact University
</Button>

</div>



</div>


</aside>




</div>

</section>





<!-- CTA -->

<section class="border-t border-border/60 bg-muted/20">

<div
class="container mx-auto px-5 py-16 lg:px-6 lg:py-24"
>


<div
class="grid gap-8 lg:grid-cols-2 lg:items-center"
>


<div>

<p
class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent"
>
More Events
</p>


<h2
class="mt-3 text-3xl font-semibold tracking-[-0.05em]"
>
Explore university activities.
</h2>


<p
class="mt-4 max-w-xl text-sm leading-7 text-muted-foreground"
>
Discover upcoming events, activities and opportunities happening across MMU.
</p>


</div>




<div
class="flex gap-3 lg:justify-end"
>

<Button
href="/events"
variant="outline"
class="rounded-none uppercase text-[10px] font-bold tracking-[0.14em]"
>
View events

<ArrowUpRight class="ml-2 size-4"/>

</Button>



<Button
href="/contact"
class="rounded-none uppercase text-[10px] font-bold tracking-[0.14em]"
>
Contact us
</Button>


</div>


</div>


</div>

</section>


</main>