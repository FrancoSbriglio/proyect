import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectSharedModule } from 'app/shared';
import {
  BarrioComponent,
  BarrioDetailComponent,
  BarrioUpdateComponent,
  BarrioDeletePopupComponent,
  BarrioDeleteDialogComponent,
  barrioRoute,
  barrioPopupRoute
} from './';

const ENTITY_STATES = [...barrioRoute, ...barrioPopupRoute];

@NgModule({
  imports: [ProyectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [BarrioComponent, BarrioDetailComponent, BarrioUpdateComponent, BarrioDeleteDialogComponent, BarrioDeletePopupComponent],
  entryComponents: [BarrioComponent, BarrioUpdateComponent, BarrioDeleteDialogComponent, BarrioDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectBarrioModule {}
