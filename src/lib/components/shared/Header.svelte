<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import Menu from '@lucide/svelte/icons/menu';

	import { page } from '$app/state';

	import * as Sheet from '$lib/components/ui/sheet';

	import SearchModal from './SearchModal.svelte';

	const navItems = [
		{ label: 'Study', href: '/academics' },
		{ label: 'Research', href: '/research' },
		{ label: 'University', href: '/university' },
		{ label: 'Campus Life', href: '/campus-life' },
		{ label: 'News & Events', href: '/news' }
	];

	const quickLinks = [
		{ label: 'Students', href: '/portal' },
		{ label: 'Staff', href: '/staff' },
		{ label: 'Library', href: '/library' },
		{ label: 'Alumni', href: '/alumni' }
	];

	let mobileOpen = $state(false);

	function isActive(href: string) {
		return (
			page.url.pathname === href ||
			page.url.pathname.startsWith(`${href}/`)
		);
	}

	function closeMenu() {
		mobileOpen = false;
	}
</script>

<!-- Header locked to Deep Navy Blue with Light Text -->
<header class="sticky top-0 z-50 border-b border-primary-foreground/15 bg-primary text-primary-foreground shadow-sm">
	<!-- Desktop -->
	<div class="mx-auto hidden max-w-[1440px] px-6 lg:block">
		<div class="grid h-[88px] grid-cols-[300px_1fr_240px] items-center">
			
			<!-- Brand Logo -->
			<a
				href="/"
				class="group flex w-fit items-center gap-4"
				aria-label="Multimedia University of Kenya"
			>
				<div class="text-[30px] font-bold leading-none tracking-[-0.09em] transition-opacity group-hover:opacity-80">
					MMU
				</div>

				<div class="h-8 w-px bg-primary-foreground/20"></div>

				<div class="max-w-[145px] text-[9px] font-semibold uppercase leading-[1.45] tracking-[0.12em] text-primary-foreground/75">
					Multimedia University of Kenya
				</div>
			</a>

			<!-- Primary Navigation Links -->
			<nav class="flex h-full items-center justify-center" aria-label="Main navigation">
				{#each navItems as item}
					{@const active = isActive(item.href)}

					<a
						href={item.href}
						aria-current={active ? 'page' : undefined}
						class="group relative flex h-full items-center px-5 text-[13px] font-medium"
					>
						<span class={`whitespace-nowrap transition-colors duration-150 ${active ? 'text-primary-foreground font-semibold' : 'text-primary-foreground/75 group-hover:text-primary-foreground'}`}>
							{item.label}
						</span>

						<!-- Red Accent Line for Active State -->
						<span class={`absolute bottom-0 left-5 right-5 h-0.5 origin-center bg-accent transition-transform duration-200 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
					</a>
				{/each}
			</nav>

			<!-- Right Actions & Red Accent CTA -->
			<div class="flex items-center justify-end gap-3">
				<SearchModal />

				<a
					href="/admissions"
					class="group inline-flex h-10 items-center border border-accent bg-accent px-4 text-[10px] font-bold uppercase tracking-[0.1em] text-accent-foreground transition-opacity hover:opacity-90 shadow-sm"
				>
					Apply to MMU
					<ArrowUpRight class="ml-2 size-3.5 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
				</a>
			</div>
		</div>

		<!-- Utility Bar -->
		<div class="flex h-9 items-center justify-between border-t border-primary-foreground/15">
			<div class="flex items-center gap-4">
				<span class="text-[9px] font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">
					Multimedia University of Kenya
				</span>
				<span class="h-3 w-px bg-primary-foreground/20"></span>
				<span class="text-[9px] uppercase tracking-[0.12em] text-primary-foreground/70">
					Nairobi · Kenya
				</span>
			</div>

			<nav class="flex h-full items-center" aria-label="Utility navigation">
				{#each quickLinks as link}
					<a
						href={link.href}
						class="flex h-full items-center border-l border-primary-foreground/15 px-4 text-[9px] font-medium uppercase tracking-[0.1em] text-primary-foreground/75 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
					>
						{link.label}
					</a>
				{/each}
			</nav>
		</div>
	</div>

	<!-- Mobile Header View -->
	<div class="flex h-[72px] items-center justify-between px-5 lg:hidden">
		<a href="/" class="group flex items-center gap-3" aria-label="Multimedia University of Kenya">
			<div class="text-[27px] font-bold leading-none tracking-[-0.09em]">
				MMU
			</div>
			<div class="h-7 w-px bg-primary-foreground/20"></div>
			<div class="max-w-[130px] text-[8px] font-semibold uppercase leading-[1.4] tracking-[0.1em] text-primary-foreground/75">
				Multimedia University of Kenya
			</div>
		</a>

		<div class="flex items-center gap-2">
			<SearchModal />

			<Sheet.Root bind:open={mobileOpen}>
				<Sheet.Trigger
					class="inline-flex size-10 items-center justify-center rounded-sm border border-primary-foreground/20 bg-primary text-primary-foreground transition-colors hover:bg-primary-foreground/10"
					aria-label="Open navigation menu"
				>
					<Menu class="size-5" />
				</Sheet.Trigger>

				<Sheet.Content side="right" class="w-[min(90vw,400px)] p-0">
					<Sheet.Header class="border-b p-6 text-left">
						<div class="text-3xl font-bold tracking-[-0.09em]">MMU</div>
						<Sheet.Title class="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
							Multimedia University of Kenya
						</Sheet.Title>
					</Sheet.Header>

					<div class="overflow-y-auto">
						<nav class="border-b p-5" aria-label="Mobile navigation">
							{#each navItems as item}
								{@const active = isActive(item.href)}
								<a
									href={item.href}
									onclick={closeMenu}
									aria-current={active ? 'page' : undefined}
									class={`group flex items-center justify-between border-b py-5 text-lg tracking-tight last:border-b-0 ${active ? 'font-semibold text-primary' : 'text-foreground'}`}
								>
									<span>{item.label}</span>
									<ArrowUpRight class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
								</a>
							{/each}
						</nav>

						<!-- Quick access -->
						<div class="border-b p-5">
							<div class="mb-4 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
								Quick access
							</div>
							<div class="grid grid-cols-2 border">
								{#each quickLinks as link}
									<a
										href={link.href}
										onclick={closeMenu}
										class="border-b border-r p-4 text-[10px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-muted"
									>
										{link.label}
									</a>
								{/each}
							</div>
						</div>

						<!-- Admissions Callout -->
						<div class="p-5">
							<div class="border bg-muted/40 p-5">
								<div class="text-[9px] font-bold uppercase tracking-[0.14em] text-primary">
									Admissions
								</div>
								<h2 class="mt-2 text-xl font-semibold tracking-tight">
									Find your programme.
								</h2>
								<p class="mt-2 text-sm leading-6 text-muted-foreground">
									Explore programmes, entry requirements and application information.
								</p>
								<a
									href="/admissions"
									onclick={closeMenu}
									class="mt-5 inline-flex h-10 w-full items-center justify-center bg-accent px-4 text-[10px] font-bold uppercase tracking-[0.1em] text-accent-foreground transition-opacity hover:opacity-90"
								>
									Explore admissions
									<ArrowUpRight class="ml-2 size-3.5" />
								</a>
							</div>
						</div>
					</div>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>