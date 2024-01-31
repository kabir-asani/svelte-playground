<script>
	import CreatorItem from './components/CreatorItem.svelte';
	import SectionItem from '$lib/components/shared/section/section-item/SectionItem.svelte';
	import SectionColumBody from '$lib/components/shared/section/section-body/SectionColumnBody.svelte';
</script>

<SectionItem title="Creator Links" id="creator">
	<SectionColumBody>
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
			url="https://www.youtube.com/channel/UCq4lb1t3uwb1UkFZO427ckw"
		/>
		<CreatorItem
			text="@kabirsasani"
			tag="Linguistics"
			image="/images/svgs/instagram.svg"
			url="https://instagram.com/kabirsasani"
		/>
	</SectionColumBody>
</SectionItem>
