import App from "./App/App.svelte";
import "./index.css";

const app = new App({
	target: document.querySelector("#app")
});

export default app;
