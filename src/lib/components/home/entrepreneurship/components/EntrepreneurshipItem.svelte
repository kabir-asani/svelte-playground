<script lang="ts">
	export let role: String;

	export let company: String;
	export let companyUrl: String | undefined | null = undefined;
	export let period: String;
	export let onelineDescription: String;

	import Clickable from '$lib/components/shared/clickable/Clickable.svelte';
</script>

<div
	class="card shadow-2xl border border-neutral border-opacity-20 bg-base-200 md:sticky md:top-10"
>
	<div class="card-body">
		<div class="flex flex-col md:flex-row gap-2 items-start md:items-center">
			<h1 class="text-xl">
				{role}
			</h1>

			<div class="flex flex-wrap items-center gap-2">
				<Clickable
					href={companyUrl || '/'}
					external={companyUrl !== undefined && companyUrl !== null}
				>
					<div class="badge badge-primary text-sm">
						{company}
					</div>
				</Clickable>

				<div class="badge badge-neutral text-sm">
					{period}
				</div>
			</div>
		</div>

		<p class="text-neutral">{onelineDescription}</p>
	</div>
</div>
