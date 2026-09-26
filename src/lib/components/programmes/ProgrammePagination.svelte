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
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.Previous />
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
							>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}

				<Pagination.Item>
					<Pagination.Next />
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
{/if}