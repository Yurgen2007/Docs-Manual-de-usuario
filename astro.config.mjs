// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Manual de Usuario",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Areas",
              items: [
                { label: "registrar areas", slug: "areas/Registrar-area" },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
