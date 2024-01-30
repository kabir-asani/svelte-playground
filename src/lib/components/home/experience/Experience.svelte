<script>
	import ExperienceItem from './components/ExperienceItem.svelte';
</script>

<div class="flex flex-col md:flex-row gap-4">
	<div>
		<p class="md:w-36 font-medium sticky top-10">Experience</p>
	</div>
	<div class="grow flex flex-col gap-4">
		<ExperienceItem
			role="Senior Software Engineer"
			company="INDMoney"
			companyUrl="https://indmoney.com"
			period="2022 - 2023"
			onelineDescription="Developed key features of their flag-ship app and contributed across several verticals"
		/>
		<ExperienceItem
			role="Product Engineer"
			company="Qoohoo"
			companyUrl="https://qoohoo.in"
			period="2021 - 2022"
			onelineDescription="Developed flag-ship application ground up and led deployement efforts across the platforms"
		/>
		<ExperienceItem
			role="Software Engineer"
			company="Go Nuclei"
			companyUrl="https://gonuclei.com"
			period="2019 - 2021"
			onelineDescription="Developed several key frameworks that were critical to core business outcomes for the organisation"
		/>
	</div>
</div>
