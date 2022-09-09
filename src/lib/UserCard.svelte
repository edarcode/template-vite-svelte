<script>
	export let user;
	const { name, age, country } = user;
</script>

<article class="card">
	<div>Nombre: {name}</div>
	<div>Edad: {age}</div>
	<div>País: {country}</div>
	<button class="btn"> Eliminar usuario </button>
</article>

<style>
	.card {
		display: grid;
		gap: 8px;
		padding: 16px;
		box-shadow: 0px 0px 12px rgba(69, 69, 69, 0.5);
		border-radius: 16px;
	}
	.btn {
		justify-self: end;
	}
</style>
