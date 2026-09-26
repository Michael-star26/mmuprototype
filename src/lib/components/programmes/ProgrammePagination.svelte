<script lang="ts">
	import * as Pagination from '$lib/components/ui/pagination/index.js';

	let {
		currentPage = $bindable(1),
		count = 0,
		perPage = 6
	}: {
		currentPage?: number;
		count?: number;
		perPage?: number;
	} = $props();
</script>

{#if count > perPage}
	<Pagination.Root
		{count}
		{perPage}
		bind:page={currentPage}
	>
		{#snippet children({ pages, currentPage: activePage })}
			<Pagination.Content class="gap-1.5">
				<Pagination.Item>
					<Pagination.Previous class="border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" />
				</Pagination.Item>

				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link
								{page}
								isActive={activePage === page.value}
								class={activePage === page.value
									? 'bg-primary text-primary-foreground font-bold shadow-sm'
									: 'border-border/60 text-foreground hover:bg-primary/10 hover:text-primary transition-colors'}
							>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}

				<Pagination.Item>
					<Pagination.Next class="border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" />
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
{/if}