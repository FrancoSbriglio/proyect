/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { QRService } from 'app/entities/qr/qr.service';
import { IQR, QR } from 'app/shared/model/qr.model';

describe('Service Tests', () => {
  describe('QR Service', () => {
    let injector: TestBed;
    let service: QRService;
    let httpMock: HttpTestingController;
    let elemDefault: IQR;
    let expectedResult;
    let currentDate: moment.Moment;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(QRService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new QR(0, 'AAAAAAA', currentDate, 'image/png', 'AAAAAAA', 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign(
          {
            fechaFinQR: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        service
          .find(123)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: elemDefault });
      });

      it('should create a QR', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            fechaFinQR: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            fechaFinQR: currentDate
          },
          returnedFromService
        );
        service
          .create(new QR(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a QR', async () => {
        const returnedFromService = Object.assign(
          {
            codigoQR: 'BBBBBB',
            fechaFinQR: currentDate.format(DATE_TIME_FORMAT),
            fotoQR: 'BBBBBB',
            tipoVisira: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            fechaFinQR: currentDate
          },
          returnedFromService
        );
        service
          .update(expected)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should return a list of QR', async () => {
        const returnedFromService = Object.assign(
          {
            codigoQR: 'BBBBBB',
            fechaFinQR: currentDate.format(DATE_TIME_FORMAT),
            fotoQR: 'BBBBBB',
            tipoVisira: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            fechaFinQR: currentDate
          },
          returnedFromService
        );
        service
          .query(expected)
          .pipe(
            take(1),
            map(resp => resp.body)
          )
          .subscribe(body => (expectedResult = body));
        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a QR', async () => {
        const rxPromise = service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
