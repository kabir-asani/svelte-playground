<script lang="ts">
	export let text: String;
	export let url: String;

	import Clickable from '$lib/components/shared/clickable/Clickable.svelte';
</script>

<Clickable href={url.valueOf()}>
	<div class="flex flex-row items-center gap-2">
		<div class="h-54 w-5 fill-base-content">
			<slot />
		</div>
		{text}
	</div>
</Clickable>
