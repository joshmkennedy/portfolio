import { defineConfig, passthroughImageService } from "astro/config";
import preact from "@astrojs/preact";

import imageUploadertoolbarIntegration from "image-uploader-astro-toolbar-integration";

// https://astro.build/config
export default defineConfig({
    integrations: [preact(), imageUploadertoolbarIntegration()],
    image: {
        service: passthroughImageService(),
    },
});