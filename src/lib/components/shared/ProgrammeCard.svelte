<script lang="ts">
	import Clock3 from '@lucide/svelte/icons/clock-3';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';

	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import type { Programme } from '$lib/types';

	let { programme }: { programme: Programme } = $props();
</script>

<Card.Root class="h-full transition-shadow hover:shadow-md">
	<Card.Header>
		<Badge variant="secondary" class="w-fit">
			{programme.level}
		</Badge>

		<Card.Title class="mt-3">
			<a
				href={`/academics/programmes/${programme.slug}`}
				class="transition-colors hover:text-primary"
			>
				{programme.title}
			</a>
		</Card.Title>

		<Card.Description>
			{programme.faculty}
		</Card.Description>
	</Card.Header>

	<Card.Content>
		<div class="space-y-4">
			<p class="text-sm text-muted-foreground">
				{programme.description}
			</p>

			<div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
				<div class="flex items-center gap-2">
					<GraduationCap class="size-4 shrink-0" />
					<span>{programme.degree}</span>
				</div>

				<div class="flex items-center gap-2">
					<Clock3 class="size-4 shrink-0" />
					<span>{programme.duration}</span>
				</div>
			</div>
		</div>
	</Card.Content>

	<Card.Footer>
		<Button
			href={`/academics/programmes/${programme.slug}`}
			variant="outline"
		>
			View Programme
		</Button>
	</Card.Footer>
</Card.Root>