<script>
	import CreatorItem from './components/CreatorItem.svelte';
	import SectionItem from '$lib/components/shared/section/section-item/SectionItem.svelte';
	import SectionColumBody from '$lib/components/shared/section/section-body/SectionColumnBody.svelte';
	import InstagramIcon from '$lib/assets/svg/InstagramIcon.svelte';
	import YouTubeIcon from '$lib/assets/svg/YouTubeIcon.svelte';
</script>

<SectionItem title="Creator Links" id="creator">
	<SectionColumBody>
		<CreatorItem text="@kabirstack" tag="Computer Science" url="https://instagram.com/kabirstack">
			<InstagramIcon />
		</CreatorItem>

		<CreatorItem
			text="@kabirstack"
			tag="Computer Science"
			url="https://www.youtube.com/channel/UCq4lb1t3uwb1UkFZO427ckw"
		>
			<YouTubeIcon />
		</CreatorItem>
		<CreatorItem text="@kabirsasani" tag="Linguistics" url="https://instagram.com/kabirsasani">
			<InstagramIcon />
		</CreatorItem>
	</SectionColumBody>
</SectionItem>
