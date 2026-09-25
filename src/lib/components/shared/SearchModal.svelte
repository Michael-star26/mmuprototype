<script lang="ts">
	import Search from '@lucide/svelte/icons/search';

	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';

	let open = $state(false);
	let query = $state('');
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger
		class="inline-flex size-9 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
		aria-label="Search"
	>
		<Search class="size-5" />
	</Dialog.Trigger>

	<Dialog.Content class="sm:max-w-2xl">
		<Dialog.Header>
			<Dialog.Title>Search MMU</Dialog.Title>

			<Dialog.Description>
				Search programmes, news, events, and other university information.
			</Dialog.Description>
		</Dialog.Header>

		<div class="relative">
			<Search
				class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
			/>

			<Input
				bind:value={query}
				placeholder="Search..."
				class="pl-9"
				autofocus
			/>
		</div>

		{#if query.trim()}
			<div class="py-6 text-center text-sm text-muted-foreground">
				Search results will appear here.
			</div>
		{:else}
			<div class="py-6 text-center text-sm text-muted-foreground">
				Start typing to search the site.
			</div>
		{/if}
	</Dialog.Content>
</Dialog.Root>