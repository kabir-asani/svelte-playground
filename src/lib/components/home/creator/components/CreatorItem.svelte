<script lang="ts">
	export let text: String;
	export let tag: String;
	export let image: String;
	export let url: String;

	import Clickable from '$lib/components/shared/clickable/Clickable.svelte';
</script>

<Clickable href={url.valueOf()}>
	<div class="flex flex-row gap-4 items-center">
		<div class="flex flex-row gap-2 items-center">
			<div>{text}</div>
			<div class="text-neutral">{tag}</div>
		</div>
		<div class="grow border-b border-neutral opacity-20" />
		<img src={image.valueOf()} alt="" class="h-6 w-6" />
	</div>
</Clickable>
