<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import { Button } from '$lib/components/ui/button';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';


	type CTAAction = {
		label: string;
		href: string;
	};


	let {
		eyebrow,
		title,
		description,
		primaryAction,
		secondaryAction,
		class: className,
		...rest
	}: {
		eyebrow?: string;
		title: string;
		description?: string;
		primaryAction: CTAAction;
		secondaryAction?: CTAAction;
	} & WithElementRef<HTMLAttributes<HTMLElement>> = $props();

</script>


<section
	class={[
		"border-y border-border/60 bg-primary text-primary-foreground",
		className
	]}
	{...rest}
>


	<div class="mx-auto max-w-[1440px] px-6 py-14 md:py-20">


		<div class="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">


			<div class="max-w-4xl">


				{#if eyebrow}

					<div
						class="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground/70"
					>

						<span class="h-px w-8 bg-accent"></span>

						{eyebrow}

					</div>

				{/if}



				<h2
					class="text-4xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-6xl"
				>

					{title}

				</h2>



				{#if description}

					<p
						class="mt-6 max-w-2xl text-sm leading-7 text-primary-foreground/80 md:text-base"
					>

						{description}

					</p>

				{/if}


			</div>



			<div
				class="flex flex-col gap-3 sm:flex-row lg:flex-col"
			>


				<Button
					href={primaryAction.href}
					variant="secondary"
					class="group h-11 rounded-none px-6 text-[10px] font-bold uppercase tracking-[0.12em]"
				>

					{primaryAction.label}

					<ArrowUpRight
						class="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					/>

				</Button>



				{#if secondaryAction}

					<Button
						href={secondaryAction.href}
						variant="outline"
						class="h-11 rounded-none border-primary-foreground/30 bg-transparent px-6 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
					>

						{secondaryAction.label}

					</Button>

				{/if}


			</div>


		</div>


	</div>


</section>