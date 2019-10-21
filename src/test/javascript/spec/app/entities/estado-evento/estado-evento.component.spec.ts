/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ProyectTestModule } from '../../../test.module';
import { EstadoEventoComponent } from 'app/entities/estado-evento/estado-evento.component';
import { EstadoEventoService } from 'app/entities/estado-evento/estado-evento.service';
import { EstadoEvento } from 'app/shared/model/estado-evento.model';

describe('Component Tests', () => {
  describe('EstadoEvento Management Component', () => {
    let comp: EstadoEventoComponent;
    let fixture: ComponentFixture<EstadoEventoComponent>;
    let service: EstadoEventoService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ProyectTestModule],
        declarations: [EstadoEventoComponent],
        providers: []
      })
        .overrideTemplate(EstadoEventoComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(EstadoEventoComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(EstadoEventoService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new EstadoEvento(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.estadoEventos[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
