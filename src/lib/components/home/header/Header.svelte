<script>
	import HighlightItem from './components/HighlightItem.svelte';
	import SocialLinkItem from './components/SocialLinkItem.svelte';
</script>

<div class="flex flex-col md:flex-row gap-8 items-stretch md:items-center">
	<div class="avatar self-center">
		<div class="w-32 rounded-full">
			<img src="/images/profile-picture.jpg" alt="Kabir Asani's close up shot" />
		</div>
	</div>

	<div class="grow flex flex-col gap-4 md:gap-2 items-center md:items-stretch justify-center">
		<h1 class="text-3xl font-semibold">Kabir Asani</h1>

		<div
			class="flex flex-wrap md:flex-row gap-4 md:gap-2 font-medium items-center justify-center md:justify-normal"
		>
			<HighlightItem text="Entrepreneur" />
			<HighlightItem text="Developer" />
			<HighlightItem text="Creator" />
		</div>

		<div
			class="flex flex-wrap md:flex-row gap-4 md:gap-4 font-medium items-center justify-center md:justify-normal"
		>
			<SocialLinkItem
				image="/images/svgs/github.svg"
				text="GitHub"
				url="https://github.com/kabir-asani"
			/>

			<SocialLinkItem
				image="/images/svgs/x.svg"
				text="X / Twitter"
				url="https://github.com/kabir-asani"
			/>

			<SocialLinkItem
				image="/images/svgs/instagram.svg"
				text="Instagram"
				url="https://instagram.com/kabir.asani"
			/>

			<SocialLinkItem
				image="/images/svgs/reddit.svg"
				text="Reddit"
				url="https://reddit.com/u/kabirasani"
			/>
		</div>
	</div>
</div>
