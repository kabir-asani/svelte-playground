<script>
	import ShowcaseItem from './components/ShowcaseItem.svelte';
	import Clickable from '$lib/components/shared/clickable/Clickable.svelte';
</script>

<div class="flex flex-col md:flex-row gap-4">
	<div>
		<p class="md:w-36 font-medium sticky top-10">Projects</p>
	</div>
	<div class="grow flex flex-col md:grid md:grid-cols-2 md:grid-flow-row gap-4">
		<ShowcaseItem
			emoji="😇"
			name="Svelte"
			onelineDescription="Svelte Playground"
			highlight={true}
			url="https://github.com/kabir-asani/svelte-playground"
		/>

		<ShowcaseItem
			emoji="😎"
			name="Kabir Asani"
			onelineDescription="Special Repository"
			url="https://github.com/kabir-asani/kabir-asani"
		/>
	</div>
</div>
