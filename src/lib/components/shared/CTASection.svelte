<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	
	type CTAAction = {
		label: string;
		href: string;
	};

	type CTASectionProps = {
		eyebrow?: string;
		title: string;
		description?: string;
		primaryAction: CTAAction;
		secondaryAction?: CTAAction;
	};

	let {
		eyebrow,
		title,
		description,
		primaryAction,
		secondaryAction
	}: CTASectionProps = $props();
</script>

<section class="rounded-lg bg-primary px-6 py-12 text-primary-foreground md:px-10">
	<div class="mx-auto max-w-3xl text-center">
		{#if eyebrow}
			<p class="mb-3 text-sm font-medium uppercase tracking-wider opacity-80">
				{eyebrow}
			</p>
		{/if}

		<h2 class="text-3xl font-bold tracking-tight md:text-4xl">
			{title}
		</h2>

		{#if description}
			<p class="mx-auto mt-4 max-w-2xl text-base opacity-90 md:text-lg">
				{description}
			</p>
		{/if}

		<div class="mt-8 flex flex-wrap justify-center gap-3">
			<Button href={primaryAction.href} variant="secondary">
				{primaryAction.label}
			</Button>

			{#if secondaryAction}
				<Button
					href={secondaryAction.href}
					variant="outline"
					class="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
				>
					{secondaryAction.label}
				</Button>
			{/if}
		</div>
	</div>
</section>