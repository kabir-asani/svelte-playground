<script>
	import Header from '$lib/components/home/header/Header.svelte';
	import About from '$lib/components/home/about/About.svelte';
	import Showcase from '$lib/components/home/showcase/Showcase.svelte';
	import Experience from '$lib/components/home/experience/Experience.svelte';
	import Education from '$lib/components/home/education/Education.svelte';
	import Contact from '$lib/components/home/contact/Contact.svelte';
</script>

<div class="flex flex-col gap-4 pt-44">
	<Header />
	<About />
	<Showcase />
	<Experience />
	<Education />
	<Contact />
</div>
