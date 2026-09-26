<script lang="ts">
	let {
		value,
		label,
		description
	}: {
		value: string;
		label: string;
		description?: string;
	} = $props();
</script>

<div class="rounded-lg border bg-card p-5">
	<div class="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
		{value}
	</div>

	<div class="mt-1 text-sm font-semibold text-foreground">
		{label}
	</div>

	{#if description}
		<p class="mt-2 text-sm leading-6 text-muted-foreground">
			{description}
		</p>
	{/if}
</div>