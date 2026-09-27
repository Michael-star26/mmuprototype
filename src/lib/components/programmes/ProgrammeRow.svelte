<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import type { Programme } from '$lib/types';

	let { programme }: { programme: Programme } = $props();
</script>


<div
	class="group relative border-b border-border/60 py-8 transition-colors hover:bg-muted/20"
>
	<div
		class="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
	></div>


	<a
		href={`/academics/programmes/${programme.slug}`}
		class="grid gap-6 md:grid-cols-[1fr_auto] md:items-center"
	>

		<div class="min-w-0">

			<div class="mb-3 flex flex-wrap items-center gap-3">

				<span
					class="text-[9px] font-bold uppercase tracking-[0.14em] text-accent"
				>
					{programme.level}
				</span>

				<span class="h-1 w-1 bg-border"></span>

				<span
					class="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
				>
					{programme.duration}
				</span>

			</div>


			<h3
				class="max-w-3xl text-2xl font-semibold tracking-[-0.04em] text-foreground transition-colors group-hover:text-primary"
			>
				{programme.title}
			</h3>


			<p
				class="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground"
			>
				{programme.description}
			</p>


			<div class="mt-5">

				<span
					class="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
				>
					{programme.faculty}
				</span>

			</div>

		</div>



		<div class="hidden md:flex items-center gap-3">

			<span
				class="text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
			>
				View programme
			</span>


			<div
				class="flex size-9 items-center justify-center border border-border/60 transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
			>

				<ArrowUpRight class="size-4" />

			</div>

		</div>


	</a>
</div>