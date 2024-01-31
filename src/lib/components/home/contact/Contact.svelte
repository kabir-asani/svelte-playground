<script>
	const now = new Date();
	const currentTime = now.toLocaleTimeString('en-US', {
		timeZone: 'Asia/Kolkata',
		timeStyle: 'short'
	});
	const currentDate = now.toLocaleDateString('en-US', {
		timeZone: 'Asia/Kolkata',
		dateStyle: 'long'
	});

	import Copy from '$lib/components/shared/copy/Copy.svelte';
	import SectionColumnBody from '$lib/components/shared/section/section-body/SectionColumnBody.svelte';
	import SectionItem from '$lib/components/shared/section/section-item/SectionItem.svelte';
</script>

<SectionItem title="Contact" id="contact">
	<SectionColumnBody>
		<p class="text-neutral">{currentTime} • {currentDate} IST</p>
		<div class="flex flex-row items-center gap-2">
			<p class="link text-neutral">iamkabirasani@gmail.com</p>
			<Copy text="iamkabirasani@gmail.com" />
		</div>
	</SectionColumnBody>
</SectionItem>
