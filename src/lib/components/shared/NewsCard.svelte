<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import User from '@lucide/svelte/icons/user';

	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import type { NewsItem } from '$lib/types';

	let { news }: { news: NewsItem } = $props();
</script>

<Card.Root class="h-full transition-shadow hover:shadow-md">
	<Card.Header>
		<Badge variant="secondary">
			{news.category}
		</Badge>

		<Card.Title class="mt-3">
			<a
				href={`/news/${news.slug}`}
				class="transition-colors hover:text-primary"
			>
				{news.title}
			</a>
		</Card.Title>

		<Card.Description>
			{news.summary}
		</Card.Description>
	</Card.Header>

	<Card.Content>
		<div class="space-y-2 text-sm text-muted-foreground">
			<div class="flex items-center gap-2">
				<CalendarDays class="size-4 shrink-0" />
				<span>{news.date}</span>
			</div>

			<div class="flex items-center gap-2">
				<User class="size-4 shrink-0" />
				<span>{news.author}</span>
			</div>
		</div>
	</Card.Content>

	<Card.Footer>
		<Button href={`/news/${news.slug}`} variant="outline">
			Read More
		</Button>
	</Card.Footer>
</Card.Root>