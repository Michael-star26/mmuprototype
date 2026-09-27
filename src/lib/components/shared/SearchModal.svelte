<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';

	let open = $state(false);
	let query = $state('');

	function handleOpenChange(value: boolean) {
		open = value;

		if (!value) {
			query = '';
		}
	}
</script>

<Dialog.Root bind:open onOpenChange={handleOpenChange}>
	<Dialog.Trigger
		class="group inline-flex size-9 items-center justify-center border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
		aria-label="Search MMU"
	>
		<Search
			class="size-4 transition-transform duration-300 group-hover:scale-110"
		/>
	</Dialog.Trigger>

	<Dialog.Content
		class="border-primary-foreground/10 bg-primary text-primary-foreground shadow-2xl sm:max-w-2xl"
	>
		<Dialog.Header>
			<div class="flex items-center gap-3">
				<span class="h-px w-8 bg-accent"></span>

				<span
					class="font-mono text-[8px] uppercase tracking-[0.22em] text-primary-foreground/50"
				>
					MMU Search
				</span>
			</div>

			<Dialog.Title
				class="mt-5 text-3xl font-semibold tracking-[-0.05em]"
			>
				Find information.
			</Dialog.Title>

			<Dialog.Description
				class="mt-2 text-sm leading-6 text-primary-foreground/60"
			>
				Search programmes, research, news, events, and university
				resources.
			</Dialog.Description>
		</Dialog.Header>

		<div class="relative mt-6">
			<label for="site-search" class="sr-only">
				Search MMU
			</label>

			<Search
				class="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary-foreground/40"
			/>

			<Input
				id="site-search"
				type="search"
				bind:value={query}
				placeholder="Search programmes, news, events..."
				autofocus
				class="h-12 border-primary-foreground/15 bg-transparent pl-11 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus-visible:ring-accent"
			/>
		</div>

		{#if query.trim()}
			<div
				class="mt-6 flex items-center justify-between border-t border-primary-foreground/10 pt-5"
			>
				<span
					class="text-xs text-primary-foreground/50"
				>
					Searching for "{query}"
				</span>

				<ArrowUpRight class="size-4 text-accent" />
			</div>
		{:else}
			<div
				class="mt-6 border-t border-primary-foreground/10 pt-5"
			>
				<p
					class="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-foreground/40"
				>
					Start typing to search MMU
				</p>

				<div class="mt-4 flex flex-wrap gap-3">
					<span
						class="border border-primary-foreground/10 px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-primary-foreground/50"
					>
						Programmes
					</span>

					<span
						class="border border-primary-foreground/10 px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-primary-foreground/50"
					>
						Research
					</span>

					<span
						class="border border-primary-foreground/10 px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-primary-foreground/50"
					>
						News
					</span>
				</div>
			</div>
		{/if}
	</Dialog.Content>
</Dialog.Root>