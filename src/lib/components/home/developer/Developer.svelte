<script>
	import SectionItem from '$lib/components/shared/section/section-item/SectionItem.svelte';
	import SectionColumBody from '$lib/components/shared/section/section-body/SectionColumnBody.svelte';
	import DeveloperItem from './components/DeveloperItem.svelte';
</script>

<SectionItem title="Developer Experience" id="experience">
	<SectionColumBody>
		<DeveloperItem
			role="Senior Software Engineer"
			company="INDMoney"
			companyUrl="https://indmoney.com"
			period="2022 - 2023"
			onelineDescription="Developed key features of their flag-ship app and contributed across several verticals"
		/>
		<DeveloperItem
			role="Product Engineer"
			company="Qoohoo"
			companyUrl="https://qoohoo.in"
			period="2021 - 2022"
			onelineDescription="Developed flag-ship application ground up and led deployement efforts across the platforms"
		/>
		<DeveloperItem
			role="Software Engineer"
			company="Go Nuclei"
			companyUrl="https://gonuclei.com"
			period="2019 - 2021"
			onelineDescription="Developed several key frameworks that were critical to core business outcomes for the organisation"
		/>
	</SectionColumBody>
</SectionItem>
