import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectSharedModule } from 'app/shared';
import {
  ListaAmigosComponent,
  ListaAmigosDetailComponent,
  ListaAmigosUpdateComponent,
  ListaAmigosDeletePopupComponent,
  ListaAmigosDeleteDialogComponent,
  listaAmigosRoute,
  listaAmigosPopupRoute
} from './';

const ENTITY_STATES = [...listaAmigosRoute, ...listaAmigosPopupRoute];

@NgModule({
  imports: [ProyectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ListaAmigosComponent,
    ListaAmigosDetailComponent,
    ListaAmigosUpdateComponent,
    ListaAmigosDeleteDialogComponent,
    ListaAmigosDeletePopupComponent
  ],
  entryComponents: [ListaAmigosComponent, ListaAmigosUpdateComponent, ListaAmigosDeleteDialogComponent, ListaAmigosDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectListaAmigosModule {}
