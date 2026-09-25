<script lang="ts">
	type SectionHeadingProps = {
		title: string;
		description?: string;
		eyebrow?: string;
		align?: 'left' | 'center';
	};

	let {
		title,
		description,
		eyebrow,
		align = 'left'
	}: SectionHeadingProps = $props();
</script>

<div
	class:text-center={align === 'center'}
	class="space-y-2"
>
	{#if eyebrow}
		<p class="text-sm font-semibold uppercase tracking-wider text-primary">
			{eyebrow}
		</p>
	{/if}

	<h2 class="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
		{title}
	</h2>

	{#if description}
		<p
			class="max-w-2xl text-muted-foreground"
			class:mx-auto={align === 'center'}
		>
			{description}
		</p>
	{/if}
</div>