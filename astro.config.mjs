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
                { label: "Añadir Usuario", slug: "usuarios/crearUsuario" },
                {
                  label: "Carga masiva de usuarios",
                  slug: "usuarios/subirMasivo",
                },
                { label: "Modos de busqueda", slug: "usuarios/filtros" },
              ],
            },
            {
              label:"Caracteristicas",
              items: [
                {label:"Listar Caracteristicas", slug:"Caracteristicas/ListarCaracteristicas"},
                {label:"Crear Caracteristica", slug:"Caracteristicas/CrearCaracteristica"},
                {label:"Actualizar Caracteristica", slug:"Caracteristicas/ActualizarCaracteristica"}
              ]
            },
            {
              label:"Elementos",
              items:[
                {label:"Listar Elementos", slug:"Elementos/ListarElementos"},
                {label:"Crear Elemento", slug:"Elementos/CrearElemento"},
                {label:"Actualizar Elemento", slug:"Elementos/ActualizarElemento"},
                {label:"Cambiar Estado del Elemento", slug:"Elementos/CambiarEstadoElemento"}
              ]
            },
            {
              label:"Inventario",
              items:[
                {label:"Listar Inventario", slug:"Inventario/ListarInventario"},
                {label:"Gregar Stock Inventario", slug:"Inventario/AgregarStockInventario"},
                {label:"Cambiar Estado del Inventario", slug:"Inventario/CambiarEstadoInventario"}
              ]
            },
            {
              label:"Tipos Movimiento",
              items:[
                {label:"Listar TiposMovimiento", slug:"TiposMovimiento/ListarTiposMovimientos"},
                {label:"Crear Tipo Movimiento", slug:"TiposMovimiento/CrearTipoMovimiento"},
                {label:"Actualizar Tipo Movimiento", slug:"TiposMovimiento/ActualizarTipoMovimiento"},
                {label:"Cambiar Estado del Tipo Movimiento", slug:"TiposMovimiento/CambiarEstadoTipoMovimiento"}
              ]
            },
            {
              label:"Unidades Medida",
              items:[
                {label:"Listar Unidades", slug:"UnidadesMedida/ListarUnidades"},
                {label:"Crear Unidad", slug:"UnidadesMedida/CrearUnidad"},
                {label:"Actualizar Unidad", slug:"UnidadesMedida/ActualizarUnidad"},
                {label:"Cambiar Estado de la Unidad", slug:"UnidadesMedida/CambiarEstadoUnidad"}
              ]
            },
          ],
        },
      ],
    }),
  ],
});
