import { NgModule } from '@angular/core';

import { ProyectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ProyectSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ProyectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProyectSharedCommonModule {}
