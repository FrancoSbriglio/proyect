import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectSharedModule } from 'app/shared';
import {
  ColorComponent,
  ColorDetailComponent,
  ColorUpdateComponent,
  ColorDeletePopupComponent,
  ColorDeleteDialogComponent,
  colorRoute,
  colorPopupRoute
} from './';

const ENTITY_STATES = [...colorRoute, ...colorPopupRoute];

@NgModule({
  imports: [ProyectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [ColorComponent, ColorDetailComponent, ColorUpdateComponent, ColorDeleteDialogComponent, ColorDeletePopupComponent],
  entryComponents: [ColorComponent, ColorUpdateComponent, ColorDeleteDialogComponent, ColorDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectColorModule {}
