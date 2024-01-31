<script lang="ts">
	export let text: String;
	export let tag: String;
	export let url: String;

	import Clickable from '$lib/components/shared/clickable/Clickable.svelte';
</script>

<div class="flex flex-row gap-4 items-center">
	<div class="flex flex-col gap-2 items-start">
		<Clickable href={url.valueOf()}>
			<div class="text-primary">{text}</div>
		</Clickable>
		<div class="text-neutral">{tag}</div>
	</div>
	<div class="grow border-b border-neutral opacity-20" />
	<div class="h-5 w-5 fill-base-content">
		<slot />
	</div>
</div>
