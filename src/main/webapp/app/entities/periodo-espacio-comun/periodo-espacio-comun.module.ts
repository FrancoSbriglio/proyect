import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectSharedModule } from 'app/shared';
import {
  PeriodoEspacioComunComponent,
  PeriodoEspacioComunDetailComponent,
  PeriodoEspacioComunUpdateComponent,
  PeriodoEspacioComunDeletePopupComponent,
  PeriodoEspacioComunDeleteDialogComponent,
  periodoEspacioComunRoute,
  periodoEspacioComunPopupRoute
} from './';

const ENTITY_STATES = [...periodoEspacioComunRoute, ...periodoEspacioComunPopupRoute];

@NgModule({
  imports: [ProyectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    PeriodoEspacioComunComponent,
    PeriodoEspacioComunDetailComponent,
    PeriodoEspacioComunUpdateComponent,
    PeriodoEspacioComunDeleteDialogComponent,
    PeriodoEspacioComunDeletePopupComponent
  ],
  entryComponents: [
    PeriodoEspacioComunComponent,
    PeriodoEspacioComunUpdateComponent,
    PeriodoEspacioComunDeleteDialogComponent,
    PeriodoEspacioComunDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectPeriodoEspacioComunModule {}
