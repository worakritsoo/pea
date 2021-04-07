// @ts-ignore
import App from './App.svelte';

// import { myRoutes as routes } from "./myRoutes.js";

// import { routes } from "@sveltech/routify/tmp/routes";
// import { routes } from "@roxi/routify";
// @ts-ignore
import { routes } from "./routes/routes";

const app = new App({
	// @ts-ignore
	target: document.body,
	props: {
		routes

	}
});



export default app;