import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProyectSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ProyectSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ProyectSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectSharedModule {
  static forRoot() {
    return {
      ngModule: ProyectSharedModule
    };
  }
}
