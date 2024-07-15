import { Action, createReducer, on } from '@ngrx/store';
import {
  agregarTarea,
  completarTarea,
  eliminarTarea,
} from '../actions/tarea.action';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { initialTareaState, TareaState } from '../state/tarea.state';
import { loadState, resetState } from '../actions/app.action';

const reducer = createReducer(
  initialTareaState,
  on(
    agregarTarea,
    (state, { tarea }): TareaState => ({
      ...state,
      listaTareas: [...state.listaTareas, tarea],
    })
  ),
  on(
    eliminarTarea,
    (state, { idTarea }): TareaState => ({
      ...state,
      listaTareas: state.listaTareas.filter(
        (tarea) => tarea.idTarea !== idTarea
      ),
    })
  ),
  on(
    completarTarea,
    (state, { idTarea }): TareaState => ({
      ...state,
      listaTareas: state.listaTareas.reduce((tareas, tarea) => {
        if (tarea.idTarea === idTarea) {
          const tareaCompletada: Tarea = {
            ...tarea,
            completado: !tarea.completado,
          };

          return [...tareas, tareaCompletada];
        }

        return [...tareas, tarea];
      }, [] as Tarea[]),
    })
  ),
  on(
    resetState,
    (): TareaState => ({
      ...initialTareaState,
    })
  ),
  on(
    loadState,
    (state, { stateLocalStorage }): TareaState => ({
      ...stateLocalStorage.tareas,
    })
  )
);

export function tareaReducer(
  state: TareaState = initialTareaState,
  action: Action
) {
  return reducer(state, action);
}
