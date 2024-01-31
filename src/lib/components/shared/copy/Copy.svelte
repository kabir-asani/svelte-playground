<script lang="ts">
	import { writable } from 'svelte/store';
	import CopyAfterIcon from '$lib/assets/svg/CopyAfterIcon.svelte';
	import CopyBeforeIcon from '$lib/assets/svg/CopyBeforeIcon.svelte';

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
			<CopyAfterIcon class="h-4 w-4 fill-neutral" />
		{:else}
			Copy
			<CopyBeforeIcon class="h-4 w-4 fill-neutral" />
		{/if}
	</dev>
</div>
