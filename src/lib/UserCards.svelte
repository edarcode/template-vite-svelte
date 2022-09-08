<script>
	import Each from "./Each.svelte";
	import UserCard from "./UserCard.svelte";

	export let users = [];
</script>

<section class="wrapperUsers">
	<h1 class="title">Usuarios</h1>
	<div class="users">
		<Each array={users} component={UserCard} />
	</div>
</section>

<style>
	.title {
		text-align: center;
	}
	.wrapperUsers,
	.users {
		display: grid;
		gap: 16px;
	}
</style>
