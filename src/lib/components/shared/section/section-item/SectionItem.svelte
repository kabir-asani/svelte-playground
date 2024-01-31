<script lang="ts">
	export let title: String;
	export let id: String;
</script>

<div class="flex flex-col md:flex-row gap-4" id={id.valueOf()}>
	<div>
		<h1 class="md:w-36 font-medium sticky top-10">{title}</h1>
	</div>

	<slot />
</div>
