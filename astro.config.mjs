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
                  label: "Modificar estado de areas",
                  slug: "areas/estado-areas",
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
