<script>
	export let array;
	export let component;
	const Component = component;
</script>

{#if !array || !component}
	<p>¡Error 😨!</p>
{:else if !array.length}
	<p>No hay usuarios</p>
{:else}
	{#each array as item (item.id)}
		<Component props={item} />
	{/each}
{/if}
