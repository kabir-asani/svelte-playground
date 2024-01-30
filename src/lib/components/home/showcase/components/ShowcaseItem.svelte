<script lang="ts">
	export let name: String;
	export let url: String;
	export let emoji: String;
	export let onelineDescription: String;
	export let highlight: Boolean = false;

	import Clickable from '$lib/components/shared/clickable/Clickable.svelte';
</script>

<Clickable href={url}>
	<div class="card shadow-2xl border border-neutral border-opacity-20 bg-base-100">
		<div class="card-body">
			<h1 class="card-title">{emoji}</h1>

			<div class="flex flex-row gap-2 items-center">
				<h1 class="card-title">{name}</h1>
				{#if highlight}
					<div class="badge badge-accent text-sm">NEW</div>
				{/if}
			</div>

			<p>{onelineDescription}</p>
		</div>
	</div>
</Clickable>
