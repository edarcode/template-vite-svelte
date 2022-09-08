<script>
	export let addUser;

	const handleSubmitCreatePerson = e => {
		e.preventDefault();
		const name = e.target.name.value;
		const age = e.target.age.value;
		const country = e.target.country.value;

		const person = { id: crypto.randomUUID(), name, age, country };

		addUser(person);
	};
</script>

<form on:submit={handleSubmitCreatePerson}>
	<input placeholder="Nombre" name="name" />
	<input type="number" placeholder="Edad" name="age" />
	<input placeholder="País" name="country" />
	<button>Crear usuario</button>
</form>

<style>
	form {
		display: grid;
		gap: 8px;
		place-items: center;
	}
</style>
