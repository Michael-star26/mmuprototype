<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	import Header from '$lib/components/shared/Header.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';

	let { children } = $props();
</script>

<!-- <ModeWatcher defaultMode="light" track={false} /> -->

<div class="flex min-h-screen flex-col">
	<Header />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>