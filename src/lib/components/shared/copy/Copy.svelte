<script lang="ts">
	import { writable } from 'svelte/store';

	export let text: String;

	const copied = writable(false);

	const copyText = async () => {
		try {
			$copied = true;
			await navigator.clipboard.writeText(text.valueOf());
			setTimeout(() => ($copied = false), 2000);
		} catch (err) {
			// Do nothing
		}
	};
</script>

<div
	class="hover:opacity-50 hover:cursor-pointer py-1 px-2 rounded-lg bg-base-200 border border-neutral border-opacity-20"
	on:click={copyText}
	on:keypress={copyText}
>
	<dev class="flex flex-row gap-1 items-center text-sm text-neutral">
		{#if $copied}
			Copied
			<img src="/images/pngs/clipboard-tick.png" alt="Clipboard Ticked" class="h-4 w-4" />
		{:else}
			Copy
			<img src="/images/pngs/clipboard.png" alt="Clipboard" class="h-4 w-4" />
		{/if}
	</dev>
</div>
