import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectSharedModule } from 'app/shared';
import {
  ModeloComponent,
  ModeloDetailComponent,
  ModeloUpdateComponent,
  ModeloDeletePopupComponent,
  ModeloDeleteDialogComponent,
  modeloRoute,
  modeloPopupRoute
} from './';

const ENTITY_STATES = [...modeloRoute, ...modeloPopupRoute];

@NgModule({
  imports: [ProyectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [ModeloComponent, ModeloDetailComponent, ModeloUpdateComponent, ModeloDeleteDialogComponent, ModeloDeletePopupComponent],
  entryComponents: [ModeloComponent, ModeloUpdateComponent, ModeloDeleteDialogComponent, ModeloDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectModeloModule {}
