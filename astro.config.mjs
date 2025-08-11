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
                { label: "Listar areas", slug: "areas/listar-areas" },
                { label: "Editar areas", slug: "areas/editar-areas" },
                {
                  label: "Modificar estado de una  area",
                  slug: "areas/estado-areas",
                },
              ],
            },
            {
              label: "Sedes",
              items: [
                { label: "listar sedes", slug: "sedes/listar-sedes" },
                { label: "Registrar sedes", slug: "sedes/Registrar-sede" },
                { label: "Editar sedes", slug: "sedes/editar-sede" },
                {
                  label: "Modificar estado de una  sede",
                  slug: "sedes/estado-sede",
                },
              ],
            },
            {
              label: "Fichas",
              items: [
                { label: "listar fichas", slug: "fichas/listar-fichas" },
                { label: "Registrar ficha", slug: "fichas/Registrar-fichas" },
                { label: "Editar ficha", slug: "fichas/editar-ficha" },
                {
                  label: "Modificae estado de una  ficha",
                  slug: "fichas/estado-ficha",
                },
              ],
            },
            {
              label: "Programas",
              items: [
                {
                  label: "listar programas",
                  slug: "programas/listar-programas",
                },
                {
                  label: "Registrar programas",
                  slug: "programas/Registrar-programas",
                },
                {
                  label: "Editar programa",
                  slug: "programas/editar-programa",
                },
                {
                  label: "Modificar estado de un programa",
                  slug: "programas/estado-programa",
                },
              ],
            },
            {
              label: "Sitios",
              items: [
                {
                  label: "listar sitio",
                  slug: "sitios/listar-sitios",
                },
                {
                  label: "Registrar sitio",
                  slug: "sitios/Registrar-sitio",
                },
                {
                  label: "Editar sitio",
                  slug: "sitios/editar-sitio",
                },
                {
                  label: "Modificar estado de un sitio",
                  slug: "sitios/estado-sitio",
                },
              ],
            },
            {
              label: "Permisos",
              items: [
                {
                  label: "Asignar pemisos",
                  slug: "permisos/Registrar-permisos",
                },
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
