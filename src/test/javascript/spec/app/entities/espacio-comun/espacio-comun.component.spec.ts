/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ProyectTestModule } from '../../../test.module';
import { EspacioComunComponent } from 'app/entities/espacio-comun/espacio-comun.component';
import { EspacioComunService } from 'app/entities/espacio-comun/espacio-comun.service';
import { EspacioComun } from 'app/shared/model/espacio-comun.model';

describe('Component Tests', () => {
  describe('EspacioComun Management Component', () => {
    let comp: EspacioComunComponent;
    let fixture: ComponentFixture<EspacioComunComponent>;
    let service: EspacioComunService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ProyectTestModule],
        declarations: [EspacioComunComponent],
        providers: []
      })
        .overrideTemplate(EspacioComunComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(EspacioComunComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(EspacioComunService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new EspacioComun(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.espacioComuns[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
