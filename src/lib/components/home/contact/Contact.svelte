<script>
	const now = new Date();
	const currentTime = now.toLocaleTimeString('en-US', {
		timeZone: 'Asia/Kolkata',
		timeStyle: 'short'
	});
	const currentDate = now.toLocaleDateString('en-US', {
		timeZone: 'Asia/Kolkata',
		dateStyle: 'long'
	});

	import Clickable from '$lib/components/shared/clickable/Clickable.svelte';
</script>

<div class="flex flex-col md:flex-row gap-4 mb-40">
	<div>
		<p class="md:w-36 font-medium sticky top-10">Contact</p>
	</div>

	<div class="flex flex-col gap-4">
		<p class="text-neutral">{currentTime} • {currentDate} IST</p>

		<Clickable href="mailto:iamkabirasani@gmail.com">
			<p class="link text-neutral">iamkabirasani@gmail.com</p>
		</Clickable>
	</div>
</div>
