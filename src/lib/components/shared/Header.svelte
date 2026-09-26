<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import { page } from '$app/state';
	import { fly } from 'svelte/transition';

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
	let reduceMotion = $state(false);

	$effect(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	});

	$effect(() => {
		document.body.style.overflow = mobileOpen ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	});

	$effect(() => {
		// Close the takeover automatically whenever the route changes.
		page.url.pathname;
		mobileOpen = false;
	});

	function isActive(href: string) {
		return (
			page.url.pathname === href ||
			page.url.pathname.startsWith(`${href}/`)
		);
	}

	function toggleMenu() {
		mobileOpen = !mobileOpen;
	}

	function closeMenu() {
		mobileOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') closeMenu();
	}

	function reveal(index: number) {
		return reduceMotion
			? { duration: 0 }
			: { y: 22, duration: 420, delay: 60 * index, opacity: 0 };
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#snippet signalMark(size: 'sm' | 'lg')}
	<div
		class={`group/mark flex items-end gap-[3px] ${size === 'lg' ? 'h-5' : 'h-4'}`}
		aria-hidden="true"
	>
		<span class="h-[55%] w-[3px] bg-accent transition-[height] duration-300 ease-out group-hover/mark:h-[45%]"></span>
		<span class="h-full w-[3px] bg-accent transition-[height] delay-75 duration-300 ease-out group-hover/mark:h-[70%]"></span>
		<span class="h-[35%] w-[3px] bg-accent transition-[height] delay-150 duration-300 ease-out group-hover/mark:h-full"></span>
	</div>
{/snippet}

<!-- Header locked to Deep Navy Blue with Light Text -->
<header class="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
	<!-- Masthead strip — desktop only -->
	<div class="mx-auto hidden max-w-[1440px] items-center justify-between border-b border-primary-foreground/15 px-6 lg:flex">
		<div class="flex h-9 items-center gap-4">
			<span class="text-[9px] font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">
				Multimedia University of Kenya
			</span>
			<span class="h-3 w-px bg-primary-foreground/20"></span>
			<span class="text-[9px] uppercase tracking-[0.12em] text-primary-foreground/70">
				Nairobi · Kenya
			</span>
		</div>

		<nav class="flex h-9 items-center" aria-label="Utility navigation">
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

	<!-- Primary bar — mobile-first: compact single row by default, expands into the desktop grid at lg -->
	<div class="mx-auto max-w-[1440px] px-5 lg:px-6">
		<div class="flex h-16 items-center justify-between lg:grid lg:h-20 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
			<!-- Brand -->
			<a href="/" class="group flex w-fit items-center gap-3" aria-label="Multimedia University of Kenya, home">
				{@render signalMark('sm')}

				<span class="text-2xl font-bold leading-none tracking-[-0.08em] transition-opacity group-hover:opacity-80 lg:text-[26px]">
					MMU
				</span>

				<span class="hidden max-w-[150px] text-[9px] font-semibold uppercase leading-[1.4] tracking-[0.12em] text-primary-foreground/75 lg:block">
					Multimedia University of Kenya
				</span>
			</a>

			<!-- Desktop navigation -->
			<nav class="hidden h-full items-center justify-center lg:flex" aria-label="Main navigation">
				{#each navItems as item}
					{@const active = isActive(item.href)}

					<a
						href={item.href}
						aria-current={active ? 'page' : undefined}
						class="group relative flex h-full items-center px-5 text-[13px] font-medium"
					>
						<span class={`whitespace-nowrap transition-colors duration-150 ${active ? 'font-semibold text-primary-foreground' : 'text-primary-foreground/75 group-hover:text-primary-foreground'}`}>
							{item.label}
						</span>

						<span class={`absolute bottom-0 left-5 right-5 h-0.5 origin-center bg-accent transition-transform duration-200 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
					</a>
				{/each}
			</nav>

			<!-- Actions -->
			<div class="flex items-center gap-2 lg:gap-3">
				<SearchModal />

				<a
					href="/admissions"
					class="group hidden h-10 items-center border border-accent bg-accent px-4 text-[10px] font-bold uppercase tracking-[0.1em] text-accent-foreground shadow-sm transition-opacity hover:opacity-90 lg:inline-flex"
				>
					Apply to MMU
					<ArrowUpRight class="ml-2 size-3.5 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
				</a>

				<!-- Custom two-bar trigger that morphs into a close mark -->
				<button
					type="button"
					onclick={toggleMenu}
					class="relative inline-flex size-10 items-center justify-center lg:hidden"
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={mobileOpen}
					aria-controls="mobile-menu"
				>
					<span
						class={`absolute h-[2px] w-5 bg-primary-foreground transition-all duration-300 ease-out ${mobileOpen ? 'translate-y-0 rotate-45' : '-translate-y-[5px] rotate-0'}`}
					></span>
					<span
						class={`absolute h-[2px] w-5 bg-primary-foreground transition-all duration-300 ease-out ${mobileOpen ? 'translate-y-0 -rotate-45' : 'translate-y-[5px] rotate-0'}`}
					></span>
				</button>
			</div>
		</div>
	</div>
</header>

<!-- Full-screen takeover menu — the mobile navigation is treated as its own moment, not a slide-in drawer -->
{#if mobileOpen}
	<div
		id="mobile-menu"
		role="dialog"
		aria-modal="true"
		aria-label="Main menu"
		class="fixed inset-0 z-40 flex flex-col overflow-hidden bg-primary text-primary-foreground lg:hidden"
	>
		<span
			class="pointer-events-none absolute -right-6 top-20 select-none text-[42vw] font-bold leading-none tracking-[-0.06em] text-primary-foreground/[0.04]"
			aria-hidden="true"
		>
			MMU
		</span>

		<div class="h-16 shrink-0"></div>

		<nav class="relative flex-1 overflow-y-auto px-5 pt-4" aria-label="Mobile navigation">
			{#each navItems as item, index}
				{@const active = isActive(item.href)}

				<a
					href={item.href}
					aria-current={active ? 'page' : undefined}
					class="group flex items-center justify-between border-b border-primary-foreground/15 py-5 first:pt-2 last:border-b-0"
					in:fly={reveal(index)}
				>
					<span class="flex items-baseline gap-4">
						<span class="font-mono text-[10px] font-semibold text-accent">
							{String(index + 1).padStart(2, '0')}
						</span>
						<span class={`text-4xl font-semibold leading-none tracking-[-0.04em] ${active ? 'text-primary-foreground' : 'text-primary-foreground/90'}`}>
							{item.label}
						</span>
					</span>

					<ArrowUpRight class="size-5 shrink-0 text-primary-foreground/50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
				</a>
			{/each}
		</nav>

		<div
			class="relative shrink-0 border-t border-primary-foreground/15 px-5 pb-8 pt-6"
			in:fly={reveal(navItems.length)}
		>
			<div class="flex flex-wrap gap-x-5 gap-y-3">
				{#each quickLinks as link}
					<a
						href={link.href}
						class="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground/70 transition-colors hover:text-primary-foreground"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<a
				href="/admissions"
				class="mt-6 flex h-12 items-center justify-center gap-2 bg-accent text-[11px] font-bold uppercase tracking-[0.12em] text-accent-foreground transition-opacity hover:opacity-90"
			>
				Apply to MMU
				<ArrowUpRight class="size-4" />
			</a>
		</div>
	</div>
{/if}