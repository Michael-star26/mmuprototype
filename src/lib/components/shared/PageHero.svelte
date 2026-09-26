<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import Breadcrumbs from './Breadcrumbs.svelte';
	import { Button } from '$lib/components/ui/button';

	type BreadcrumbItem = {
		label: string;
		href?: string;
	};

	type HeroAction = {
		label: string;
		href: string;
		variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
	};

	let {
		title,
		description,
		eyebrow,
		breadcrumbs = [],
		actions = [],
		children
	}: {
		title: string;
		description?: string;
		eyebrow?: string;
		breadcrumbs?: BreadcrumbItem[];
		actions?: HeroAction[];
		children?: import('svelte').Snippet;
	} = $props();
</script>

<section class="border-b bg-muted/30">
	<div class="container mx-auto px-4 py-12 md:py-16 lg:py-20">
		{#if breadcrumbs.length > 0}
			<div class="mb-8">
				<Breadcrumbs items={breadcrumbs} />
			</div>
		{/if}

		<div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:items-center">
			<div class="max-w-3xl">
				{#if eyebrow}
					<div class="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
						{eyebrow}
					</div>
				{/if}

				<h1
					class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
				>
					{title}
				</h1>

				{#if description}
					<p class="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
						{description}
					</p>
				{/if}

				{#if actions.length > 0}
					<div class="mt-8 flex flex-wrap gap-3">
						{#each actions as action, index}
							<Button
								href={action.href}
								variant={action.variant ?? (index === 0 ? 'default' : 'outline')}
							>
								{action.label}

								{#if index === 0}
									<ArrowRight class="ml-2 size-4" />
								{/if}
							</Button>
						{/each}
					</div>
				{/if}
			</div>

			{#if children}
				<div class="lg:justify-self-end">
					{@render children()}
				</div>
			{/if}
		</div>
	</div>
</section>