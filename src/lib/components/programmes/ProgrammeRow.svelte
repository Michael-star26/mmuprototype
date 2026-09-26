<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { Button } from '$lib/components/ui/button';
	import type { Programme } from '$lib/types';

	let { programme }: { programme: Programme } = $props();
</script>

<div class="group border-b py-6">
	<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<div class="min-w-0 space-y-2">
			<div class="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
				<span>{programme.level}</span>
				<span aria-hidden="true">·</span>
				<span>{programme.duration}</span>
			</div>

			<h3 class="text-lg font-semibold">
				<a
					href={`/academics/programmes/${programme.slug}`}
					class="transition-colors group-hover:text-primary"
				>
					{programme.title}
				</a>
			</h3>

			<p class="text-sm text-muted-foreground">
				{programme.faculty}
			</p>

			<p class="max-w-3xl text-sm text-muted-foreground">
				{programme.description}
			</p>
		</div>

		<Button
			href={`/academics/programmes/${programme.slug}`}
			variant="ghost"
			class="w-fit shrink-0"
		>
			View Programme
			<ArrowRight class="ml-2 size-4" />
		</Button>
	</div>
</div>