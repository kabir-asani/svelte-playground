<script>
	import GitHubIcon from '$lib/assets/svg/GitHubIcon.svelte';
	import InstagramIcon from '$lib/assets/svg/InstagramIcon.svelte';
	import XIcon from '$lib/assets/svg/XIcon.svelte';
	import Clickable from '$lib/components/shared/clickable/Clickable.svelte';
	import ThemeSwap from './components/ThemeSwap.svelte';
</script>

<footer class="footer items-center p-4 text-base-content bg-base-200">
	<aside class="items-center grid-flow-col">
		<p>Copyright © 2024 - All right reserved</p>
	</aside>
	<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<ThemeSwap />
		<Clickable href="https://instagram.com/kabir.asani">
			<InstagramIcon class="h-5 w-5 fill-base-content" />
		</Clickable>

		<Clickable href="https://x.com/KabirAsani">
			<XIcon class="h-5 w-5 fill-base-content" />
		</Clickable>

		<Clickable href="https://github.com/kabir-asani">
			<GitHubIcon class="h-5 w-5 fill-base-content" />
		</Clickable>
	</nav>
</footer>
