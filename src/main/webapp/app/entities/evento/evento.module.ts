import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectSharedModule } from 'app/shared';
import {
  EventoComponent,
  EventoDetailComponent,
  EventoUpdateComponent,
  EventoDeletePopupComponent,
  EventoDeleteDialogComponent,
  eventoRoute,
  eventoPopupRoute
} from './';

const ENTITY_STATES = [...eventoRoute, ...eventoPopupRoute];

@NgModule({
  imports: [ProyectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [EventoComponent, EventoDetailComponent, EventoUpdateComponent, EventoDeleteDialogComponent, EventoDeletePopupComponent],
  entryComponents: [EventoComponent, EventoUpdateComponent, EventoDeleteDialogComponent, EventoDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectEventoModule {}
