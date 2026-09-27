<script lang="ts">
	let {
		currentPage = $bindable(1),
		count = 0,
		perPage = 6
	}: {
		currentPage?: number;
		count?: number;
		perPage?: number;
	} = $props();


	const totalPages = $derived(
		Math.ceil(count / perPage)
	);


	const start = $derived(
		(currentPage - 1) * perPage + 1
	);


	const end = $derived(
		Math.min(currentPage * perPage, count)
	);


	const pages = $derived.by(() => {
		const items: (number | '...')[] = [];

		if (totalPages <= 7) {
			for(let i = 1; i <= totalPages; i++){
				items.push(i);
			}
		} else {

			items.push(1);

			if(currentPage > 3){
				items.push('...');
			}

			const from = Math.max(2, currentPage - 1);
			const to = Math.min(totalPages - 1, currentPage + 1);

			for(let i = from; i <= to; i++){
				items.push(i);
			}


			if(currentPage < totalPages - 2){
				items.push('...');
			}

			items.push(totalPages);
		}

		return items;
	});


	function previous(){
		if(currentPage > 1){
			currentPage--;
		}
	}


	function next(){
		if(currentPage < totalPages){
			currentPage++;
		}
	}

</script>



{#if totalPages > 1}

<div class="border-t border-border/60 py-10">


	<!-- top information -->
	<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">


		<div>

			<p class="font-mono text-sm tracking-tight text-foreground">

				PROGRAMMES

				<span class="text-primary">
					{start.toString().padStart(2,'0')}
				</span>

				—

				<span class="text-primary">
					{end.toString().padStart(2,'0')}
				</span>

				OF

				<span>
					{count}
				</span>

			</p>


			<p class="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
				Academic catalogue
			</p>

		</div>



		<div class="flex gap-8">

			<button
				onclick={previous}
				disabled={currentPage === 1}
				class="
				group flex items-center gap-2
				text-[10px] font-bold uppercase tracking-[0.15em]
				text-muted-foreground
				transition-colors
				hover:text-primary
				disabled:opacity-30
				"
			>

				<span class="transition-transform group-hover:-translate-x-1">
					←
				</span>

				Previous

			</button>



			<button
				onclick={next}
				disabled={currentPage === totalPages}
				class="
				group flex items-center gap-2
				text-[10px] font-bold uppercase tracking-[0.15em]
				text-muted-foreground
				transition-colors
				hover:text-primary
				disabled:opacity-30
				"
			>

				Next

				<span class="transition-transform group-hover:translate-x-1">
					→
				</span>

			</button>


		</div>


	</div>



	<!-- page index -->

	<div class="mt-10 flex justify-center">


		<div class="relative flex items-center gap-6 border-b border-border/60 pb-3">


			{#each pages as page}


				{#if page === '...'}

					<span class="font-mono text-xs text-muted-foreground">
						...
					</span>


				{:else}


					<button
						onclick={() => currentPage = page}
						class="
						relative
						font-mono text-sm
						transition-colors
						${
							currentPage === page
							? 'text-primary'
							: 'text-muted-foreground hover:text-foreground'
						}
						"
					>

						{page.toString().padStart(2,'0')}


						{#if currentPage === page}

							<span
								class="
								absolute
								-left-1
								- bottom-4
								left-1/2
								h-2
								w-px
								-translate-x-1/2
								bg-accent
								"
							></span>

						{/if}

					</button>


				{/if}


			{/each}


		</div>


	</div>


</div>

{/if}