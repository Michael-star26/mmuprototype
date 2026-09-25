<script lang="ts">
	import Menu from '@lucide/svelte/icons/menu';
	import Search from '@lucide/svelte/icons/search';

	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';

	import SearchModal from './SearchModal.svelte';

	const navItems = [
		{ label: 'About', href: '/about' },
		{ label: 'Academics', href: '/academics' },
		{ label: 'Admissions', href: '/admissions' },
		{ label: 'Research', href: '/research' },
		{ label: 'News', href: '/news' },
		{ label: 'Events', href: '/events' }
	];
</script>

<header class="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
	<div class="container mx-auto flex h-16 items-center justify-between px-4">
		<!-- Brand -->
		<a href="/" class="flex items-center gap-3">
			<div
				class="flex size-9 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground"
			>
				MMU
			</div>

			<div class="hidden sm:block">
				<div class="text-sm font-bold leading-none">
					Multimedia University
				</div>
				<div class="mt-1 text-xs text-muted-foreground">
					of Kenya
				</div>
			</div>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
			{#each navItems as item}
				<Button href={item.href} variant="ghost">
					{item.label}
				</Button>
			{/each}
		</nav>

		<!-- Actions -->
		<div class="flex items-center gap-2">
			<SearchModal />

			<Button href="/admissions" class="hidden sm:inline-flex">
				Apply Now
			</Button>

			<!-- Mobile Navigation -->
			<Sheet.Root>
				<Sheet.Trigger
					class="inline-flex size-9 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground lg:hidden"
					aria-label="Open navigation menu"
				>
					<Menu class="size-5" />
				</Sheet.Trigger>

				<Sheet.Content side="right" class="w-[300px] sm:w-[360px]">
					<Sheet.Header>
						<Sheet.Title>MMU</Sheet.Title>
						<Sheet.Description>
							Multimedia University of Kenya
						</Sheet.Description>
					</Sheet.Header>

					<nav
						class="mt-8 flex flex-col gap-1"
						aria-label="Mobile navigation"
					>
						{#each navItems as item}
							<Button
								href={item.href}
								variant="ghost"
								class="justify-start"
							>
								{item.label}
							</Button>
						{/each}

						<Button href="/admissions" class="mt-4">
							Apply Now
						</Button>
					</nav>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>