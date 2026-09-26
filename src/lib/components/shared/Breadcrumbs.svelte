<script lang="ts">
    import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
    import type { WithElementRef } from 'bits-ui';
    import type { HTMLAttributes } from 'svelte/elements';

    type BreadcrumbItem = {
        label: string;
        href?: string;
    };

    let { 
        items, 
        class: className,
        ...rest 
    }: { items: BreadcrumbItem[] } & WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<Breadcrumb.Root class={className} {...rest}>
    <Breadcrumb.List>
        {#each items as item, i}
            {#if i > 0}
                <Breadcrumb.Separator />
            {/if}

            <Breadcrumb.Item>
                {#if i === items.length - 1}
                    <Breadcrumb.Page class="text-foreground font-medium">
                        {item.label}
                    </Breadcrumb.Page>
                {:else}
                    <Breadcrumb.Link href={item.href} class="text-muted-foreground hover:text-foreground transition-colors">
                        {item.label}
                    </Breadcrumb.Link>
                {/if}
            </Breadcrumb.Item>
        {/each}
    </Breadcrumb.List>
</Breadcrumb.Root>