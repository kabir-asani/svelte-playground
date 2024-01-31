<script lang="ts">
	export let degree: String;
	export let field: String;
	export let institution: String;
	export let period: String;
	export let score: String;
</script>

<div
	class="card shadow-2xl border border-neutral border-opacity-20 bg-base-200 md:sticky md:top-10"
>
	<div class="card-body">
		<div class="flex flex-col md:flex-row gap-2 items-start md:items-center">
			<h1 class="text-xl">
				{degree}
			</h1>

			<div class="flex flex-wrap items-center gap-2">
				<div class="badge badge-neutral text-sm">
					{field}
				</div>

				<div class="badge badge-neutral text-sm">
					{period}
				</div>
			</div>
		</div>

		<div class="text-neutral">
			{institution}
		</div>

		<p class="text-neutral">{score}</p>
	</div>
</div>
