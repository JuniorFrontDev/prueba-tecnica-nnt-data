import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/store/state/app.state';
import { CredencialesLogin } from '../models/credencialesLogin.model';
import { login } from 'src/app/store/actions/usuario.action';
import { Tarea } from '../models/tarea.model';
import {
  agregarTarea,
  completarTarea,
  eliminarTarea,
} from 'src/app/store/actions/tarea.action';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { usuarioSelector } from 'src/app/store/selectors/usuario.selector';
import { listaTareasSelector } from 'src/app/store/selectors/tarea.selector';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  usuarioLogeado$!: Observable<Usuario | null>;
  listaTareas$!: Observable<Tarea[]>;

  constructor(private store: Store<State>) {
    this.usuarioLogeado$ = this.store.pipe(select(usuarioSelector));
    this.listaTareas$ = this.store.pipe(select(listaTareasSelector));
  }

  login(usuario: CredencialesLogin): void {
    this.store.dispatch(login({ usuario }));
  }

  agregarTarea(tarea: Tarea): void {
    this.store.dispatch(agregarTarea({ tarea }));
  }

  eliminarTarea(idTarea: number): void {
    this.store.dispatch(eliminarTarea({ idTarea }));
  }

  completarTarea(idTarea: number): void {
    this.store.dispatch(completarTarea({ idTarea }));
  }
}
