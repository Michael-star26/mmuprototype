<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';

	type BreadcrumbItem = {
		label: string;
		href?: string;
	};

	let { items }: { items: BreadcrumbItem[] } = $props();
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		{#each items as item, i}
			{#if i > 0}
				<Breadcrumb.Separator />
			{/if}

			<Breadcrumb.Item>
				{#if i === items.length - 1}
					<Breadcrumb.Page>
						{item.label}
					</Breadcrumb.Page>
				{:else}
					<Breadcrumb.Link href={item.href}>
						{item.label}
					</Breadcrumb.Link>
				{/if}
			</Breadcrumb.Item>
		{/each}
	</Breadcrumb.List>
</Breadcrumb.Root>