<script>
	import CreatorItem from './components/CreatorItem.svelte';
</script>

<div class="flex flex-col md:flex-row gap-4">
	<div>
		<p class="md:w-36 font-medium sticky top-10">Creator</p>
	</div>

	<div class="flex flex-col w-full gap-4">
		<CreatorItem
			text="@kabirstack"
			tag="Computer Science"
			image="/images/svgs/instagram.svg"
			url="https://instagram.com/kabirstack"
		/>
		<CreatorItem
			text="@kabirstack"
			tag="Computer Science"
			image="/images/svgs/youtube.svg"
			url="https://www.youtube.com/channel/UC-EJVn89yVlH3n88VM3By6A"
		/>
		<CreatorItem
			text="@kabirsasani"
			tag="Linguistics"
			image="/images/svgs/instagram.svg"
			url="https://instagram.com/kabirsasani"
		/>
	</div>
</div>
