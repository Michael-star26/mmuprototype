<script lang="ts">
	import type { Component } from 'svelte';

	type StatBlockProps = {
		value: string | number;
		label: string;
		description?: string;
		icon?: Component;
	};

	let { value, label, description, icon: Icon }: StatBlockProps = $props();
</script>

<div class="space-y-2">
	{#if Icon}
		<div class="mb-3 text-primary">
			<Icon class="size-5" />
		</div>
	{/if}

	<div class="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
		{value}
	</div>

	<div class="font-medium">
		{label}
	</div>

	{#if description}
		<p class="text-sm text-muted-foreground">
			{description}
		</p>
	{/if}
</div>