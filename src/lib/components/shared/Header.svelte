<script lang="ts">
	import Menu from '@lucide/svelte/icons/menu';
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
	import Globe from '@lucide/svelte/icons/globe';

	import { page } from '$app/state';
	import { toggleMode, mode } from 'mode-watcher';

	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';

	import SearchModal from './SearchModal.svelte';

	let mobileOpen = $state(false);

	const topUtilityLinks = [
		{ label: 'Student Portal', href: '/portal' },
		{ label: 'Staff Mail', href: '/staff' },
		{ label: 'Library', href: '/library' },
		{ label: 'Alumni', href: '/alumni' }
	];

	const navItems = [
		{ label: 'University', href: '/university' },
		{ label: 'Academics', href: '/academics' },
		{ label: 'Admissions', href: '/admissions' },
		{ label: 'Research', href: '/research' },
		{ label: 'News', href: '/news' },
		{ label: 'Events', href: '/events' }
	];

	function isActive(href: string) {
		return page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
	}
</script>

<!-- Institutional Utility Bar -->
<div class="hidden border-b bg-slate-900 text-xs text-slate-300 md:block">
	<div class="container mx-auto flex h-8 items-center justify-between px-4">
		<div class="flex items-center gap-3 font-medium">
			<span class="inline-block size-2 animate-pulse rounded-full bg-red-600"></span>
			<span>Admissions for Academic Year are Open</span>
		</div>

		<div class="flex items-center gap-6">
			<div class="flex items-center gap-4">
				{#each topUtilityLinks as link}
					<a
						href={link.href}
						class="transition-colors hover:text-white"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<div
				class="flex items-center gap-1.5 border-l border-slate-700 pl-4 font-semibold text-white"
			>
				<Globe class="size-3 text-blue-400" />
				<span>KE</span>
			</div>
		</div>
	</div>
</div>

<!-- Main Header -->
<header
	class="sticky top-0 z-50 h-16 border-b bg-background/95 backdrop-blur-md"
>
	<div class="container mx-auto flex h-full items-center justify-between px-4">
		<!-- Brand -->
		<a href="/" class="group flex items-center gap-3">
			<div
				class="flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-black tracking-wider text-primary-foreground shadow-sm ring-2 ring-red-600/30"
			>
				<span class="mr-0.5 font-extrabold text-red-500">•</span>
				MMU
			</div>

			<div class="hidden leading-tight sm:block">
				<div
					class="text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-primary"
				>
					Multimedia University
				</div>

				<div
					class="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
				>
					of Kenya
					<span class="font-bold text-red-600">|</span>
					Excellence &amp; Technology
				</div>
			</div>
		</a>

		<!-- Desktop Navigation -->
		<nav
			class="hidden h-full items-center gap-1 lg:flex"
			aria-label="Main navigation"
		>
			{#each navItems as item}
				{@const active = isActive(item.href)}

				<a
					href={item.href}
					class={`group relative flex h-full items-center px-4 text-sm font-medium transition-colors ${
						active
							? 'font-semibold text-primary'
							: 'text-foreground/80 hover:bg-muted/40 hover:text-foreground'
					}`}
					aria-current={active ? 'page' : undefined}
				>
					<span>{item.label}</span>

					<span
						class={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary transition-all duration-200 ${
							active
								? 'scale-x-100 opacity-100'
								: 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
						}`}
					></span>
				</a>
			{/each}
		</nav>

		<!-- Actions -->
		<div class="flex items-center gap-2">
			<SearchModal />

			<!-- Theme Toggle -->
			<Button
				variant="ghost"
				size="icon"
				class="size-9 rounded-md"
				onclick={toggleMode}
				aria-label={mode.current === 'dark'
					? 'Switch to light mode'
					: 'Switch to dark mode'}
			>
				{#if mode.current === 'dark'}
					<Sun class="size-4 text-amber-400" />
				{:else}
					<Moon class="size-4 text-slate-700" />
				{/if}
			</Button>

			<!-- Apply -->
			<Button
				href="/admissions"
				class="hidden h-9 bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 sm:inline-flex"
			>
				Apply Now
			</Button>

			<!-- Mobile Navigation -->
			<Sheet.Root bind:open={mobileOpen}>
				<Sheet.Trigger
					class="inline-flex size-9 items-center justify-center rounded-md border border-input bg-background text-foreground hover:bg-muted lg:hidden"
					aria-label="Open navigation menu"
				>
					<Menu class="size-5" />
				</Sheet.Trigger>

				<Sheet.Content
					side="right"
					class="flex w-[300px] flex-col p-0 sm:w-[360px]"
				>
					<Sheet.Header class="border-b bg-muted/30 p-6 text-left">
						<div class="flex items-center gap-3">
							<div
								class="flex size-9 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground"
							>
								MMU
							</div>

							<div>
								<Sheet.Title class="text-sm font-bold">
									Multimedia University
								</Sheet.Title>

								<Sheet.Description class="text-xs">
									Of Kenya
								</Sheet.Description>
							</div>
						</div>
					</Sheet.Header>

					<div class="flex-1 space-y-6 overflow-y-auto p-6">
						<!-- Mobile Navigation -->
						<nav
							class="flex flex-col gap-1"
							aria-label="Mobile navigation"
						>
							{#each navItems as item}
								{@const active = isActive(item.href)}

								<a
									href={item.href}
									onclick={() => {
										mobileOpen = false;
									}}
									class={`flex h-10 items-center rounded-md px-3 text-sm font-medium transition-colors ${
										active
											? 'bg-primary/10 font-semibold text-primary'
											: 'text-foreground/80 hover:bg-muted hover:text-foreground'
									}`}
									aria-current={active ? 'page' : undefined}
								>
									{item.label}
								</a>
							{/each}
						</nav>

						<!-- Quick Portals -->
						<div class="space-y-2 border-t pt-4">
							<p
								class="px-2 text-xs font-semibold uppercase text-muted-foreground"
							>
								Quick Portals
							</p>

							<div class="grid grid-cols-2 gap-2">
								{#each topUtilityLinks as link}
									<a
										href={link.href}
										onclick={() => {
											mobileOpen = false;
										}}
										class="rounded-lg border bg-card p-2.5 text-center text-xs font-medium transition-colors hover:bg-muted"
									>
										{link.label}
									</a>
								{/each}
							</div>
						</div>

						<!-- Mobile CTA -->
						<Button
							href="/admissions"
							onclick={() => {
								mobileOpen = false;
							}}
							class="w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
						>
							Apply Now
						</Button>
					</div>

					<!-- Mobile Theme Toggle -->
					<div class="border-t bg-muted/20 p-4">
						<Button
							variant="outline"
							class="w-full justify-start text-xs font-medium"
							onclick={toggleMode}
							aria-label={mode.current === 'dark'
								? 'Switch to light mode'
								: 'Switch to dark mode'}
						>
							{#if mode.current === 'dark'}
								<Sun class="mr-2 size-4 text-amber-400" />
								Switch to Light Mode
							{:else}
								<Moon class="mr-2 size-4 text-slate-700" />
								Switch to Dark Mode
							{/if}
						</Button>
					</div>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>