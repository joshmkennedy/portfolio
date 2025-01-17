import { defineConfig, passthroughImageService } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	image: {
		service: passthroughImageService(),
	},
});
