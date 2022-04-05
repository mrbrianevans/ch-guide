<script>
	import {HeaderSearch} from 'carbon-components-svelte';

	export let value;
	export let results;
	export let selectedHref = '';
</script>

<HeaderSearch
		bind:value
		on:select={(e) => {
		selectedHref = e.detail.selectedResult.href;
	}}
		placeholder="Search"
		{results}
/>
