<script>
	import UserCard from "./UserCard.svelte";
	export let users;
</script>

{#each users as user (user.id)}
	<UserCard {user} />
{:else}
	<p>No hay usuarios</p>
{/each}
