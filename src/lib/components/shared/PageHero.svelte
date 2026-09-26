<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

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

<section class="border-b border-border/60 bg-background">
	<div class="container mx-auto px-5 sm:px-6">
		{#if breadcrumbs.length > 0}
			<div class="border-b border-border/40 py-4 sm:py-5">
				<Breadcrumbs items={breadcrumbs} />
			</div>
		{/if}

		<div
			class="grid gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20"
		>
			<div class="max-w-4xl">
				{#if eyebrow}
					<div
						class="mb-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px]"
					>
						<!-- Accent Red indicator line matching MMU brand identity -->
						<span class="h-px w-7 bg-accent sm:w-10"></span>

						{eyebrow}
					</div>
				{/if}

				<h1
					class="max-w-4xl text-[clamp(3.2rem,11vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.065net] text-foreground"
				>
					{title}
				</h1>

				{#if description}
					<p
						class="mt-7 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-8 sm:text-base sm:leading-7 lg:text-lg"
					>
						{description}
					</p>
				{/if}

				{#if actions.length > 0}
					<div
						class="mt-8 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-3"
					>
						{#each actions as action, index}
							<Button
								href={action.href}
								variant={action.variant ?? (index === 0 ? 'default' : 'outline')}
								class={index === 0 
									? "group inline-flex h-11 w-full rounded-none px-5 text-[10px] font-bold uppercase tracking-[0.1em] bg-primary text-primary-foreground hover:bg-accent transition-colors sm:w-auto"
									: "group inline-flex h-11 w-full rounded-none px-5 text-[10px] font-bold uppercase tracking-[0.1em] border-primary/30 text-foreground hover:bg-primary/10 transition-colors sm:w-auto"}
							>
								{action.label}

								{#if index === 0}
									<ArrowUpRight
										class="ml-2 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
									/>
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