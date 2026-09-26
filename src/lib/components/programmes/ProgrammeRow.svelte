<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Button } from '$lib/components/ui/button';
	import type { Programme } from '$lib/types';

	let { programme }: { programme: Programme } = $props();
</script>

<div class="group relative border-b border-border/60 py-6 transition-colors hover:bg-muted/30 px-4 rounded-lg">
	<!-- Left red brand indicator accent line on hover -->
	<div class="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1 bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>

	<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<div class="min-w-0 space-y-2">
			<div class="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
				<span class="text-primary">{programme.level}</span>
				<span aria-hidden="true">·</span>
				<span>{programme.duration}</span>
			</div>

			<h3 class="text-lg font-bold tracking-tight">
				<a
					href={`/academics/programmes/${programme.slug}`}
					class="transition-colors group-hover:text-primary"
				>
					{programme.title}
				</a>
			</h3>

			<p class="text-xs font-medium text-muted-foreground">
				{programme.faculty}
			</p>

			<p class="max-w-3xl text-sm text-muted-foreground leading-relaxed">
				{programme.description}
			</p>
		</div>

		<Button
			href={`/academics/programmes/${programme.slug}`}
			variant="outline"
			class="w-fit shrink-0 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all"
		>
			View Programme
			<ArrowRight class="ml-2 size-4 transition-transform group-hover:translate-x-1" />
		</Button>
	</div>
</div>