<script>
	import EducationItem from './components/EducationItem.svelte';
	import SectionItem from '$lib/components/shared/section/section-item/SectionItem.svelte';
	import SectionColumnBody from '$lib/components/shared/section/section-body/SectionColumnBody.svelte';
</script>

<SectionItem title="Education" id="education">
	<SectionColumnBody>
		<EducationItem
			degree="Bachelor of Engineering"
			field="Computer Science"
			institution="Siddaganga Institute Of Technology"
			period="2016-2020"
			score="9.32 CGPA"
		/>
	</SectionColumnBody>
</SectionItem>
