import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'norma-barrio',
        loadChildren: () => import('./norma-barrio/norma-barrio.module').then(m => m.ProyectNormaBarrioModule)
      },
      {
        path: 'barrio',
        loadChildren: () => import('./barrio/barrio.module').then(m => m.ProyectBarrioModule)
      },
      {
        path: 'estado-persona',
        loadChildren: () => import('./estado-persona/estado-persona.module').then(m => m.ProyectEstadoPersonaModule)
      },
      {
        path: 'persona',
        loadChildren: () => import('./persona/persona.module').then(m => m.ProyectPersonaModule)
      },
      {
        path: 'domicilio',
        loadChildren: () => import('./domicilio/domicilio.module').then(m => m.ProyectDomicilioModule)
      },
      {
        path: 'lista-amigos',
        loadChildren: () => import('./lista-amigos/lista-amigos.module').then(m => m.ProyectListaAmigosModule)
      },
      {
        path: 'espacio-comun',
        loadChildren: () => import('./espacio-comun/espacio-comun.module').then(m => m.ProyectEspacioComunModule)
      },
      {
        path: 'periodo-espacio-comun',
        loadChildren: () => import('./periodo-espacio-comun/periodo-espacio-comun.module').then(m => m.ProyectPeriodoEspacioComunModule)
      },
      {
        path: 'carnet-de-conducir',
        loadChildren: () => import('./carnet-de-conducir/carnet-de-conducir.module').then(m => m.ProyectCarnetDeConducirModule)
      },
      {
        path: 'planilla-ingreso-egreso',
        loadChildren: () =>
          import('./planilla-ingreso-egreso/planilla-ingreso-egreso.module').then(m => m.ProyectPlanillaIngresoEgresoModule)
      },
      {
        path: 'qr',
        loadChildren: () => import('./qr/qr.module').then(m => m.ProyectQRModule)
      },
      {
        path: 'reporte',
        loadChildren: () => import('./reporte/reporte.module').then(m => m.ProyectReporteModule)
      },
      {
        path: 'evento',
        loadChildren: () => import('./evento/evento.module').then(m => m.ProyectEventoModule)
      },
      {
        path: 'detalle-evento',
        loadChildren: () => import('./detalle-evento/detalle-evento.module').then(m => m.ProyectDetalleEventoModule)
      },
      {
        path: 'estado-evento',
        loadChildren: () => import('./estado-evento/estado-evento.module').then(m => m.ProyectEstadoEventoModule)
      },
      {
        path: 'vehiculo',
        loadChildren: () => import('./vehiculo/vehiculo.module').then(m => m.ProyectVehiculoModule)
      },
      {
        path: 'color',
        loadChildren: () => import('./color/color.module').then(m => m.ProyectColorModule)
      },
      {
        path: 'seguro',
        loadChildren: () => import('./seguro/seguro.module').then(m => m.ProyectSeguroModule)
      },
      {
        path: 'aseguradora',
        loadChildren: () => import('./aseguradora/aseguradora.module').then(m => m.ProyectAseguradoraModule)
      },
      {
        path: 'marca',
        loadChildren: () => import('./marca/marca.module').then(m => m.ProyectMarcaModule)
      },
      {
        path: 'modelo',
        loadChildren: () => import('./modelo/modelo.module').then(m => m.ProyectModeloModule)
      },
      {
        path: 'art',
        loadChildren: () => import('./art/art.module').then(m => m.ProyectArtModule)
      },
      {
        path: 'mensaje',
        loadChildren: () => import('./mensaje/mensaje.module').then(m => m.ProyectMensajeModule)
      },
      {
        path: 'empresa',
        loadChildren: () => import('./empresa/empresa.module').then(m => m.ProyectEmpresaModule)
      },
      {
        path: 'novedades',
        loadChildren: () => import('./novedades/novedades.module').then(m => m.ProyectNovedadesModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectEntityModule {}
