<script lang="ts">
	let {
		title,
		description,
		eyebrow,
		align = 'left'
	}: {
		title: string;
		description?: string;
		eyebrow?: string;
		align?: 'left' | 'center';
	} = $props();
</script>

<div
	class={align === 'center'
		? 'mx-auto max-w-2xl text-center'
		: 'max-w-2xl'}
>
	{#if eyebrow}
		<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
			{eyebrow}
		</p>
	{/if}

	<h2 class="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
		{title}
	</h2>

	{#if description}
		<p class="mt-3 text-base leading-7 text-muted-foreground">
			{description}
		</p>
	{/if}
</div>