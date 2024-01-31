<script lang="ts">
	export let properties: String = '';
</script>

<div class={'flex flex-col w-full gap-4' + ' ' + properties.valueOf()}>
	<slot />
</div>
