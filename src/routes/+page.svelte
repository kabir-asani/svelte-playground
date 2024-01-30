<script>
	import Header from '$lib/components/home/header/Header.svelte';
	import About from '$lib/components/home/about/About.svelte';
	import KBR from '$lib/images/kbr(watermark).png';
	import Showcase from '$lib/components/home/showcase/Showcase.svelte';
	import Experience from '$lib/components/home/experience/Experience.svelte';
	import Entrepreneurship from '$lib/components/home/entrepreneurship/Extrepreneurship.svelte';
	import Education from '$lib/components/home/education/Education.svelte';
	import Creator from '$lib/components/home/creator/Creator.svelte';
	import Contact from '$lib/components/home/contact/Contact.svelte';
</script>

<div class="flex flex-col gap-16">
	<div class="p-16 border border-b border-neutral border-opacity-20">
		<div class="mx-6 md:mx-12 lg:mx-auto lg:max-w-3xl">
			<Header />
		</div>
	</div>
	<div class="flex flex-col mx-6 md:mx-12 lg:mx-auto lg:max-w-3xl gap-16">
		<About />
		<Showcase />
		<Entrepreneurship />
		<Experience />
		<!-- <Education /> -->
		<Creator />
		<Contact />
	</div>
</div>
