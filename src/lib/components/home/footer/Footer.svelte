<script>
	import Clickable from '$lib/components/shared/clickable/Clickable.svelte';
</script>

<footer class="footer items-center p-4 text-base-content bg-base-200">
	<aside class="items-center grid-flow-col">
		<p>Copyright © 2024 - All right reserved</p>
	</aside>
	<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<Clickable href="https://instagram.com/kabir.asani">
			<img src="/images/svgs/instagram.svg" class="h-5 w-5" alt="X" />
		</Clickable>

		<Clickable href="https://x.com/KabirAsani">
			<img src="/images/svgs/x.svg" class="h-5 w-5" alt="X" />
		</Clickable>

		<Clickable href="https://github.com/kabir-asani">
			<img src="/images/svgs/github.svg" class="h-5 w-5" alt="GitHub" />
		</Clickable>
	</nav>
</footer>
