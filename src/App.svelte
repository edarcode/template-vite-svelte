<script>
	import FormCreateUser from "./lib/FormCreateUser.svelte";
	import UserCards from "./lib/UserCards.svelte";
	let users = [];

	const addUser = newUser => {
		users = [...users, newUser];
	};
</script>

<main>
	<FormCreateUser {addUser} />
	<UserCards {users} />
</main>

<style>
	main {
		font-family: sans-serif;
	}
</style>
