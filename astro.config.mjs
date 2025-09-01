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
            {
              label: "Usuarios",
              items: [
                { label: "Listar Usuarios", slug: "usuarios/listarUsuarios" },
                { label: "Añadir Usuario", slug: "usuarios/crearUsuario" },
                {
                  label: "Carga masiva de usuarios",
                  slug: "usuarios/subirMasivo",
                },
                { label: "Editar usuario", slug: "usuarios/editar" },
                {
                  label: "Cambiar estado del usuario",
                  slug: "usuarios/estado",
                },
                {
                  label: "Editar perfil de usuario",
                  slug: "usuarios/editarperfil",
                },
                { label: "Olvide mi contraseña", slug: "usuarios/forgotpass" },
              ],
            },
            {
              label: "Centros",
              items: [
                { label: "Listar centros", slug: "centros/listar" },
                { label: "Añadir centro", slug: "centros/crear" },
                { label: "Editar centro", slug: "centros/actualizar" },
                { label: "Cambiar estado del centro", slug: "centros/estado" },
              ],
            },
            {
              label: "Tipos de sitios",
              items: [
                { label: "Listar tipos de sitio", slug: "tipositio/listar" },
                { label: "Añadir tipos de sitio", slug: "tipositio/crear" },
                { label: "Editar tipos de sitio", slug: "tipositio/editar" },
                {
                  label: "Cambiar estado del tipos de sitio",
                  slug: "tipositio/estado",
                },
              ],
            },
            {
              label: "Municipios",
              items: [
                { label: "Listar Municipios", slug: "municipio/listar" },
                { label: "Añadir Municipios", slug: "municipio/crear" },
                { label: "Editar Municipios", slug: "municipio/editar" },
                {
                  label: "Cambiar estado del Municipios",
                  slug: "municipio/estado",
                },
              ],
            },
            {
              label: "Categorias",
              items: [
                { label: "Listar categorias", slug: "categorias/listar" },
                { label: "Añadir categoria", slug: "categorias/crear" },
                { label: "Editar categoria", slug: "categorias/editar" },
                {
                  label: "Cambiar estado de la categoria",
                  slug: "categorias/estado",
                },
              ],
            },
            {
              label: "Caracteristicas",
              items: [
                {
                  label: "Listar Caracteristicas",
                  slug: "Caracteristicas/ListarCaracteristicas",
                },
                {
                  label: "Crear Caracteristica",
                  slug: "Caracteristicas/CrearCaracteristica",
                },
                {
                  label: "Actualizar Caracteristica",
                  slug: "Caracteristicas/ActualizarCaracteristica",
                },
              ],
            },
            {
              label: "Elementos",
              items: [
                {
                  label: "Listar Elementos",
                  slug: "Elementos/ListarElementos",
                },
                { label: "Crear Elemento", slug: "Elementos/CrearElemento" },
                {
                  label: "Actualizar Elemento",
                  slug: "Elementos/ActualizarElemento",
                },
                {
                  label: "Cambiar Estado del Elemento",
                  slug: "Elementos/CambiarEstadoElemento",
                },
              ],
            },
            {
              label: "Inventario",
              items: [
                {
                  label: "Listar Inventario",
                  slug: "Inventario/ListarInventario",
                },
                {
                  label: "Agregar Stock Inventario",
                  slug: "Inventario/AgregarStockInventario",
                },
                {
                  label: "Cambiar Estado del Inventario",
                  slug: "Inventario/CambiarEstadoInventario",
                },
              ],
            },
            {
              label: "Tipos Movimiento",
              items: [
                {
                  label: "Listar TiposMovimiento",
                  slug: "TiposMovimiento/ListarTiposMovimientos",
                },
                {
                  label: "Crear Tipo Movimiento",
                  slug: "TiposMovimiento/CrearTipoMovimiento",
                },
                {
                  label: "Actualizar Tipo Movimiento",
                  slug: "TiposMovimiento/ActualizarTipoMovimiento",
                },
                {
                  label: "Cambiar Estado del Tipo Movimiento",
                  slug: "TiposMovimiento/CambiarEstadoTipoMovimiento",
                },
              ],
            },
            {
              label: "Unidades Medida",
              items: [
                {
                  label: "Listar Unidades",
                  slug: "UnidadesMedida/ListarUnidades",
                },
                { label: "Crear Unidad", slug: "UnidadesMedida/CrearUnidad" },
                {
                  label: "Actualizar Unidad",
                  slug: "UnidadesMedida/ActualizarUnidad",
                },
                {
                  label: "Cambiar Estado de la Unidad",
                  slug: "UnidadesMedida/CambiarEstadoUnidad",
                },
              ],
            },
            {
              label: "Roles",
              items: [
                {
                  label: "Listar Roles",
                  slug: "Roles/ListarRoles",
                },
                { label: "Crear Rol", slug: "Roles/CrearRol" },
                {
                  label: "Actualizar Rol",
                  slug: "Roles/ActualizarRol",
                },
                {
                  label: "Cambiar Estado del Rol",
                  slug: "Roles/CambiarEstadoRol",
                },
              ],
            },
            {
              label: "Codigo Inventario",
              items: [
                {
                  label: "Listar Codigos",
                  slug: "CodigoInventario/Listar",
                },
                {
                  label: "Actualizar Codigo",
                  slug: "CodigoInventario/Editar",
                },
              ],
            },
            {
              label: "Notificaciones",
              items: [
                {
                  label: "Ver Notificaciones",
                  slug: "Notificaciones/VerNotificaciones",
                },
                {
                  label: "Cambiar Estado",
                  slug: "Notificaciones/CambiarEstado",
                },
              ],
            },
            {
              label: "Movimientos",
              items: [
                {
                  label: "Listar Movimientos",
                  slug: "Movimientos/ListarMovimiento",
                },
                {
                  label: "Crear Movimiento",
                  slug: "Movimientos/CrearMovimiento",
                },
                {
                  label: "Actualizar Movimiento",
                  slug: "Movimientos/ActualizarMovimiento",
                },
                {
                  label: "Aceptar o Rechazar Movimiento",
                  slug: "Movimientos/AceptarYRechazarMovimiento",
                },
              ],
            },
            {
              label: "Reportes",
              items: [
                {
                  label: "Ver Reportes",
                  slug: "Reportes/Reportes",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  base: "/doc-manual/"
});
