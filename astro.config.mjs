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
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				
				{
					label: 'Usuarios',
					items: [
						{ label: 'Añadir Usuario', slug: 'usuarios/crearUsuario' },
						{ label: 'Carga masiva de usuarios', slug: 'usuarios/subirMasivo' },
						{ label: 'Modos de busqueda', slug: 'usuarios/filtros' },
					],
				},
			],
		}),
	],
});
