<script lang="ts">
	let { title, subtitle }: { title: string; subtitle?: string } = $props();
</script>

<section class="border-b bg-muted/40">
	<div class="container mx-auto px-4 py-12 md:py-16">
		{#if subtitle}
			<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
				{subtitle}
			</p>
		{/if}

		<h1 class="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
			{title}
		</h1>
	</div>
</section>