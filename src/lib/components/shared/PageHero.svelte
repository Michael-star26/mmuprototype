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

	<div class="mx-auto max-w-[1440px] px-6">

		{#if breadcrumbs.length}

			<div class="border-b border-border/40 py-5">
				<Breadcrumbs items={breadcrumbs}/>
			</div>

		{/if}


		<div
			class="grid gap-12 py-16 lg:grid-cols-[1fr_320px] lg:items-end lg:py-24"
		>


			<div class="max-w-5xl">

				{#if eyebrow}

					<div
						class="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
					>

						<span class="h-px w-10 bg-accent"></span>

						{eyebrow}

					</div>

				{/if}



				<h1
					class="max-w-5xl text-[clamp(3rem,10vw,7rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-foreground"
				>

					{title}

				</h1>



				{#if description}

					<p
						class="mt-8 max-w-2xl text-base leading-7 text-muted-foreground lg:text-lg"
					>

						{description}

					</p>

				{/if}



				{#if actions.length}

					<div class="mt-10 flex flex-wrap gap-3">

						{#each actions as action,index}

							<Button
								href={action.href}
								variant={action.variant ?? (index === 0 ? 'default':'outline')}
								class={
									index===0
									?
									"rounded-none h-11 px-6 text-[10px] font-bold uppercase tracking-[0.12em] bg-primary text-primary-foreground hover:bg-accent"
									:
									"rounded-none h-11 px-6 text-[10px] font-bold uppercase tracking-[0.12em]"
								}
							>

								{action.label}


								{#if index===0}

									<ArrowUpRight
										class="ml-2 size-4"
									/>

								{/if}


							</Button>

						{/each}

					</div>

				{/if}

			</div>



			{#if children}

				<div
					class="border-l border-border/60 pl-8"
				>

					{@render children()}

				</div>

			{/if}


		</div>

	</div>

</section>