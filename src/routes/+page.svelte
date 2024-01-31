<script>
	import Header from '$lib/components/home/header/Header.svelte';
	import About from '$lib/components/home/about/About.svelte';
	import Showcase from '$lib/components/home/showcase/Showcase.svelte';
	import Experience from '$lib/components/home/developer/Developer.svelte';
	import Entrepreneurship from '$lib/components/home/entrepreneurship/Extrepreneurship.svelte';
	import Education from '$lib/components/home/education/Education.svelte';
	import Creator from '$lib/components/home/creator/Creator.svelte';
	import Contact from '$lib/components/home/contact/Contact.svelte';
	import Footer from '$lib/components/home/footer/Footer.svelte';
</script>

<div class="flex flex-col gap-16">
	<div class="mt-16">
		<div class="mx-6 md:mx-12 lg:mx-auto lg:max-w-3xl">
			<Header />
		</div>
	</div>
	<div class="flex flex-col mx-6 md:mx-12 lg:mx-auto lg:max-w-3xl gap-16">
		<About />
		<Showcase />
		<Entrepreneurship />
		<Experience />
		<Creator />
		<Education />
		<Contact />
	</div>
	<Footer />
</div>
