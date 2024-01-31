<script>
	import ShowcaseItem from './components/ShowcaseItem.svelte';
	import SectionItem from '$lib/components/shared/section/section-item/SectionItem.svelte';
</script>

<SectionItem title="Projects" id="projects">
	<div class="grow flex flex-col md:grid md:grid-cols-2 md:grid-flow-row gap-4">
		<ShowcaseItem
			emoji="🚀"
			name="Gravity"
			onelineDescription="Project Gravity"
			highlight={true}
			url="https://github.com/kabir-asani/gravity"
		/>

		<ShowcaseItem
			emoji="😇"
			name="Svelte"
			onelineDescription="Svelte Playground"
			url="https://github.com/kabir-asani/svelte-playground"
		/>

		<ShowcaseItem
			emoji="😎"
			name="Kabir Asani"
			onelineDescription="Special Repository"
			url="https://github.com/kabir-asani/kabir-asani"
		/>
	</div>
</SectionItem>
