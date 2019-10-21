import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectSharedModule } from 'app/shared';
import {
  NormaBarrioComponent,
  NormaBarrioDetailComponent,
  NormaBarrioUpdateComponent,
  NormaBarrioDeletePopupComponent,
  NormaBarrioDeleteDialogComponent,
  normaBarrioRoute,
  normaBarrioPopupRoute
} from './';

const ENTITY_STATES = [...normaBarrioRoute, ...normaBarrioPopupRoute];

@NgModule({
  imports: [ProyectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    NormaBarrioComponent,
    NormaBarrioDetailComponent,
    NormaBarrioUpdateComponent,
    NormaBarrioDeleteDialogComponent,
    NormaBarrioDeletePopupComponent
  ],
  entryComponents: [NormaBarrioComponent, NormaBarrioUpdateComponent, NormaBarrioDeleteDialogComponent, NormaBarrioDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectNormaBarrioModule {}
