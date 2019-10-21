import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectSharedModule } from 'app/shared';
import {
  EstadoEventoComponent,
  EstadoEventoDetailComponent,
  EstadoEventoUpdateComponent,
  EstadoEventoDeletePopupComponent,
  EstadoEventoDeleteDialogComponent,
  estadoEventoRoute,
  estadoEventoPopupRoute
} from './';

const ENTITY_STATES = [...estadoEventoRoute, ...estadoEventoPopupRoute];

@NgModule({
  imports: [ProyectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    EstadoEventoComponent,
    EstadoEventoDetailComponent,
    EstadoEventoUpdateComponent,
    EstadoEventoDeleteDialogComponent,
    EstadoEventoDeletePopupComponent
  ],
  entryComponents: [
    EstadoEventoComponent,
    EstadoEventoUpdateComponent,
    EstadoEventoDeleteDialogComponent,
    EstadoEventoDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectEstadoEventoModule {}
