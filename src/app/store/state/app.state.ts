import { initialUsuarioState, UsuarioState } from './usuario.state';
import { initialTareaState, TareaState } from './tarea.state';

export interface State {
  usuario: UsuarioState;
  tareas: TareaState;
}

export const initialState: State = {
  usuario: initialUsuarioState,
  tareas: initialTareaState,
};

export function getInitialState(): State {
  return initialState;
}
