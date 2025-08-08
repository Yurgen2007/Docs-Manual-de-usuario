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

            {
              label: "Auth",
              items: [
                { label: "Inicio de sesion", slug: "usuarios/login" },
                { label: "Cerrar sesion", slug: "usuarios/logout" },
              ],
            },
            {
              label: "Areas",
              items: [
                { label: "registrar areas", slug: "areas/Registrar-area" },
              ],
            },
            {
              label: 'Usuarios',
              items: [
                { label: 'Listar Usuarios', slug: 'usuarios/listarUsuarios' },
                { label: 'Añadir Usuario', slug: 'usuarios/crearUsuario' },
                { label: 'Carga masiva de usuarios', slug: 'usuarios/subirMasivo' },
                { label: 'Editar usuario', slug: 'usuarios/editar' },
                { label: 'Cambiar estado del usuario', slug: 'usuarios/estado' },
                { label: 'Editar perfil de usuario', slug: 'usuarios/editarperfil' },
                { label: 'Olvide mi contraseña', slug: 'usuarios/forgotpass' },
              ],
            },
            {
              label: 'Centros',
              items: [
                { label: 'Listar centros', slug: 'centros/listar' },
                { label: 'Añadir centro', slug: 'centros/crear' },
                { label: 'Editar centro', slug: 'centros/actualizar' },
                { label: 'Cambiar estado del centro', slug: 'centros/estado' },
              ],
            },
            {
              label: 'Tipos de sitios',
              items: [
                { label: 'Listar tipos de sitio', slug: 'tipositio/listar' },
                { label: 'Añadir tipos de sitio', slug: 'tipositio/crear' },
                { label: 'Editar tipos de sitio', slug: 'tipositio/editar' },
                { label: 'Cambiar estado del tipos de sitio', slug: 'tipositio/estado' },
              ],
            },
            {
              label: 'Municipios',
              items: [
                { label: 'Listar Municipios', slug: 'municipio/listar' },
                { label: 'Añadir Municipios', slug: 'municipio/crear' },
                { label: 'Editar Municipios', slug: 'municipio/editar' },
                { label: 'Cambiar estado del Municipios', slug: 'municipio/estado' },
              ],
            },
            {
              label: 'Categorias',
              items: [
                { label: 'Listar categorias', slug: 'categorias/listar' },
                { label: 'Añadir categoria', slug: 'categorias/crear' },
                { label: 'Editar categoria', slug: 'categorias/editar' },
                { label: 'Cambiar estado de la categoria', slug: 'categorias/estado' },
              ],
            },
          ],
        },
      ],
    }),
  ],

});
