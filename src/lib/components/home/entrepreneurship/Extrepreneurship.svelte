<script>
	import SectionColumnBody from '$lib/components/shared/section/section-body/SectionColumnBody.svelte';
	import SectionItem from '$lib/components/shared/section/section-item/SectionItem.svelte';
	import EntrepreneurshipItem from './components/EntrepreneurshipItem.svelte';
</script>

<SectionItem title="Entrepreneur" id="entrepreneurship">
	<SectionColumnBody>
		<EntrepreneurshipItem
			role="Founder & CEO"
			company="Sarcasm Studio"
			period="2024 - Present"
			onelineDescription="Leading content creations efforts across channels with an aim to better people's life with qualitatively-dense content"
		/>

		<EntrepreneurshipItem
			role="Co-Founder"
			company="Async Bay"
			companyUrl="https://asyncbay.com"
			period="2023 - Present"
			onelineDescription="Leading a software studio being run ground up by engineers (frontend & backend) with over 5+ years of experience each"
		/>
	</SectionColumnBody>
</SectionItem>
