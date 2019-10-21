/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ProyectTestModule } from '../../../test.module';
import { QRComponent } from 'app/entities/qr/qr.component';
import { QRService } from 'app/entities/qr/qr.service';
import { QR } from 'app/shared/model/qr.model';

describe('Component Tests', () => {
  describe('QR Management Component', () => {
    let comp: QRComponent;
    let fixture: ComponentFixture<QRComponent>;
    let service: QRService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ProyectTestModule],
        declarations: [QRComponent],
        providers: []
      })
        .overrideTemplate(QRComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(QRComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(QRService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new QR(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.qRS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
