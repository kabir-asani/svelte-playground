<script>
	import EntrepreneurshipItem from './components/EntrepreneurshipItem.svelte';
</script>

<div class="flex flex-col md:flex-row gap-4">
	<div>
		<p class="md:w-36 font-medium sticky top-10">Entrepreneur</p>
	</div>
	<div class="grow flex flex-col gap-4">
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
	</div>
</div>
