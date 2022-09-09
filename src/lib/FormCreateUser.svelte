<script>
	export let addUser;
	const infoUser = { name: "", age: "", country: "" };

	const handleSubmitCreatePerson = e => {
		e.preventDefault();
		const { name, age, country } = infoUser;
		const person = { id: crypto.randomUUID(), name, age, country };

		addUser(person);
	};
</script>

<form on:submit={handleSubmitCreatePerson}>
	<input placeholder="Nombre" bind:value={infoUser.name} />
	<input type="number" placeholder="Edad" bind:value={infoUser.age} />
	<input placeholder="País" bind:value={infoUser.country} />
	<button>Crear usuario</button>
</form>

<style>
	form {
		display: grid;
		gap: 8px;
		place-items: center;
	}
</style>
