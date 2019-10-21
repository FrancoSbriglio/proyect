import { Moment } from 'moment';
import { IPersona } from 'app/shared/model/persona.model';
import { IDomicilio } from 'app/shared/model/domicilio.model';

export interface IQR {
  id?: number;
  codigoQR?: string;
  fechaFinQR?: Moment;
  fotoQRContentType?: string;
  fotoQR?: any;
  qrPersona?: IPersona;
  qrDomicilio?: IDomicilio;
}

export class QR implements IQR {
  constructor(
    public id?: number,
    public codigoQR?: string,
    public fechaFinQR?: Moment,
    public fotoQRContentType?: string,
    public fotoQR?: any,
    public qrPersona?: IPersona,
    public qrDomicilio?: IDomicilio
  ) {}
}
