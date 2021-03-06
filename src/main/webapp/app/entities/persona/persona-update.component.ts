import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IPersona, Persona } from 'app/shared/model/persona.model';
import { PersonaService } from './persona.service';
import { IUser, UserService } from 'app/core';
import { IBarrio } from 'app/shared/model/barrio.model';
import { BarrioService } from 'app/entities/barrio';
import { IVehiculo } from 'app/shared/model/vehiculo.model';
import { VehiculoService } from 'app/entities/vehiculo';
import { IDomicilio } from 'app/shared/model/domicilio.model';
import { DomicilioService } from 'app/entities/domicilio';

@Component({
  selector: 'jhi-persona-update',
  templateUrl: './persona-update.component.html'
})
export class PersonaUpdateComponent implements OnInit {
  isSaving: boolean;

  users: IUser[];

  barrios: IBarrio[];

  vehiculos: IVehiculo[];

  domicilios: IDomicilio[];

  editForm = this.fb.group({
    id: [],
    nombrePersona: [],
    apellidoPersona: [],
    dniPersona: [],
    telefonoPersona: [],
    personaUser: [],
    personabarrio: [],
    vehiculos: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected personaService: PersonaService,
    protected userService: UserService,
    protected barrioService: BarrioService,
    protected vehiculoService: VehiculoService,
    protected domicilioService: DomicilioService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ persona }) => {
      this.updateForm(persona);
    });
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.barrioService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IBarrio[]>) => mayBeOk.ok),
        map((response: HttpResponse<IBarrio[]>) => response.body)
      )
      .subscribe((res: IBarrio[]) => (this.barrios = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.vehiculoService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IVehiculo[]>) => mayBeOk.ok),
        map((response: HttpResponse<IVehiculo[]>) => response.body)
      )
      .subscribe((res: IVehiculo[]) => (this.vehiculos = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.domicilioService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IDomicilio[]>) => mayBeOk.ok),
        map((response: HttpResponse<IDomicilio[]>) => response.body)
      )
      .subscribe((res: IDomicilio[]) => (this.domicilios = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(persona: IPersona) {
    this.editForm.patchValue({
      id: persona.id,
      nombrePersona: persona.nombrePersona,
      apellidoPersona: persona.apellidoPersona,
      dniPersona: persona.dniPersona,
      telefonoPersona: persona.telefonoPersona,
      personaUser: persona.personaUser,
      personabarrio: persona.personabarrio,
      vehiculos: persona.vehiculos
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const persona = this.createFromForm();
    if (persona.id !== undefined) {
      this.subscribeToSaveResponse(this.personaService.update(persona));
    } else {
      this.subscribeToSaveResponse(this.personaService.create(persona));
    }
  }

  private createFromForm(): IPersona {
    return {
      ...new Persona(),
      id: this.editForm.get(['id']).value,
      nombrePersona: this.editForm.get(['nombrePersona']).value,
      apellidoPersona: this.editForm.get(['apellidoPersona']).value,
      dniPersona: this.editForm.get(['dniPersona']).value,
      telefonoPersona: this.editForm.get(['telefonoPersona']).value,
      personaUser: this.editForm.get(['personaUser']).value,
      personabarrio: this.editForm.get(['personabarrio']).value,
      vehiculos: this.editForm.get(['vehiculos']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPersona>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackUserById(index: number, item: IUser) {
    return item.id;
  }

  trackBarrioById(index: number, item: IBarrio) {
    return item.id;
  }

  trackVehiculoById(index: number, item: IVehiculo) {
    return item.id;
  }

  trackDomicilioById(index: number, item: IDomicilio) {
    return item.id;
  }

  getSelected(selectedVals: Array<any>, option: any) {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }
}
