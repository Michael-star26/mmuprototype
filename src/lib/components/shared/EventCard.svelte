<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import Clock from '@lucide/svelte/icons/clock';
	import MapPin from '@lucide/svelte/icons/map-pin';

	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import type { EventItem } from '$lib/types';

	let { event }: { event: EventItem } = $props();
</script>

<Card.Root class="h-full transition-shadow hover:shadow-md">
	<Card.Header>
		<div class="flex items-start justify-between gap-4">
			<div class="space-y-1">
				<Card.Title>
					<a
						href={`/events/${event.slug}`}
						class="transition-colors hover:text-primary"
					>
						{event.title}
					</a>
				</Card.Title>

				<Card.Description>
					{event.description}
				</Card.Description>
			</div>

			<Badge variant="secondary" class="shrink-0">
				{event.category}
			</Badge>
		</div>
	</Card.Header>

	<Card.Content>
		<div class="space-y-3 text-sm text-muted-foreground">
			<div class="flex items-center gap-2">
				<CalendarDays class="size-4 shrink-0" />
				<span>{event.date}</span>
			</div>

			<div class="flex items-center gap-2">
				<Clock class="size-4 shrink-0" />
				<span>{event.time}</span>
			</div>

			<div class="flex items-center gap-2">
				<MapPin class="size-4 shrink-0" />
				<span>{event.location}</span>
			</div>
		</div>
	</Card.Content>

	<Card.Footer>
		<Button href={`/events/${event.slug}`} variant="outline">
			View Event
		</Button>
	</Card.Footer>
</Card.Root>