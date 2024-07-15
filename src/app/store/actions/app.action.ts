import { createAction, props } from '@ngrx/store';
import { State } from '../state/app.state';

export const resetState = createAction('[App] resetear estado inicial');

export const loadState = createAction(
  '[App] cargar estado del localstorage',
  props<{ stateLocalStorage: State }>()
);
