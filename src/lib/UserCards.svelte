<script>
	import EachUsers from "./EachUsers.svelte";

	export let users = [];
</script>

<section class="wrapperUsers">
	<h1 class="title">Usuarios</h1>
	<div class="users">
		<EachUsers {users} />
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
