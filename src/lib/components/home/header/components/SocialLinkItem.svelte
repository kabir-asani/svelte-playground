<script lang="ts">
	export let image: String;
	export let text: String;
	export let url: String;

	import Clickable from '$lib/components/shared/clickable/Clickable.svelte';
</script>

<Clickable href={url.valueOf()}>
	<div class="flex flex-row items-center gap-2">
		<img src={image.valueOf()} alt={text.valueOf()} class="h-5 w-5" />
		{text}
	</div>
</Clickable>
