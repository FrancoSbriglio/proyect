import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IListaAmigos, ListaAmigos } from 'app/shared/model/lista-amigos.model';
import { ListaAmigosService } from './lista-amigos.service';
import { IPersona } from 'app/shared/model/persona.model';
import { PersonaService } from 'app/entities/persona';

@Component({
  selector: 'jhi-lista-amigos-update',
  templateUrl: './lista-amigos-update.component.html'
})
export class ListaAmigosUpdateComponent implements OnInit {
  isSaving: boolean;

  perteneces: IPersona[];

  personas: IPersona[];

  editForm = this.fb.group({
    id: [],
    nombreListaAmigos: [],
    pertenece: [],
    amigos: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected listaAmigosService: ListaAmigosService,
    protected personaService: PersonaService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ listaAmigos }) => {
      this.updateForm(listaAmigos);
    });
    this.personaService
      .query({ filter: 'listaamigos-is-null' })
      .pipe(
        filter((mayBeOk: HttpResponse<IPersona[]>) => mayBeOk.ok),
        map((response: HttpResponse<IPersona[]>) => response.body)
      )
      .subscribe(
        (res: IPersona[]) => {
          if (!this.editForm.get('pertenece').value || !this.editForm.get('pertenece').value.id) {
            this.perteneces = res;
          } else {
            this.personaService
              .find(this.editForm.get('pertenece').value.id)
              .pipe(
                filter((subResMayBeOk: HttpResponse<IPersona>) => subResMayBeOk.ok),
                map((subResponse: HttpResponse<IPersona>) => subResponse.body)
              )
              .subscribe(
                (subRes: IPersona) => (this.perteneces = [subRes].concat(res)),
                (subRes: HttpErrorResponse) => this.onError(subRes.message)
              );
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
    this.personaService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IPersona[]>) => mayBeOk.ok),
        map((response: HttpResponse<IPersona[]>) => response.body)
      )
      .subscribe((res: IPersona[]) => (this.personas = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(listaAmigos: IListaAmigos) {
    this.editForm.patchValue({
      id: listaAmigos.id,
      nombreListaAmigos: listaAmigos.nombreListaAmigos,
      pertenece: listaAmigos.pertenece,
      amigos: listaAmigos.amigos
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const listaAmigos = this.createFromForm();
    if (listaAmigos.id !== undefined) {
      this.subscribeToSaveResponse(this.listaAmigosService.update(listaAmigos));
    } else {
      this.subscribeToSaveResponse(this.listaAmigosService.create(listaAmigos));
    }
  }

  private createFromForm(): IListaAmigos {
    return {
      ...new ListaAmigos(),
      id: this.editForm.get(['id']).value,
      nombreListaAmigos: this.editForm.get(['nombreListaAmigos']).value,
      pertenece: this.editForm.get(['pertenece']).value,
      amigos: this.editForm.get(['amigos']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IListaAmigos>>) {
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

  trackPersonaById(index: number, item: IPersona) {
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
