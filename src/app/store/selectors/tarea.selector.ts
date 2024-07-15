import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TareaState } from '../state/tarea.state';

const featureSelector = createFeatureSelector<TareaState>('tareas');

export const listaTareasSelector = createSelector(
  featureSelector,
  (tareaState: TareaState) => tareaState.listaTareas
);
