import { Action, createReducer, on } from '@ngrx/store';
import { login } from '../actions/usuario.action';
import { initialUsuarioState, UsuarioState } from '../state/usuario.state';
import { UsuarioBuilder } from 'src/app/shared/builders/usuario.builder';
import { loadState, resetState } from '../actions/app.action';

const reducer = createReducer(
  initialUsuarioState,
  on(
    login,
    (state, { usuario }): UsuarioState => ({
      ...state,
      usuarioLogeado: new UsuarioBuilder().withUsuario(usuario.usuario).build(),
    })
  ),
  on(
    resetState,
    (): UsuarioState => ({
      ...initialUsuarioState,
    })
  ),
  on(
    loadState,
    (state, { stateLocalStorage }): UsuarioState => ({
      ...stateLocalStorage.usuario,
    })
  )
);

export function usuarioReducer(
  state: UsuarioState = initialUsuarioState,
  action: Action
) {
  return reducer(state, action);
}
