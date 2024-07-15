import { ActionReducerMap, createReducer } from '@ngrx/store';
import { State } from '../state/app.state';
import { usuarioReducer } from './usuario.reducer';
import { tareaReducer } from './tarea.reducer';

export const reducers: ActionReducerMap<State> = {
  usuario: usuarioReducer,
  tareas: tareaReducer,
};
