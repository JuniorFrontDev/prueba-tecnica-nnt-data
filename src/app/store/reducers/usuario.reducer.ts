import { Action, createReducer, on } from '@ngrx/store';
import { login } from '../actions/usuario.action';
import { initialUsuarioState, UsuarioState } from '../state/usuario.state';
import { UsuarioBuilder } from 'src/app/shared/builders/usuario.builder';

const reducer = createReducer(
  initialUsuarioState,
  on(
    login,
    (state, { usuario }): UsuarioState => ({
      ...state,
      usuarioLogeado: new UsuarioBuilder().withUsuario(usuario.usuario).build(),
    })
  )
);

export function usuarioReducer(
  state: UsuarioState = initialUsuarioState,
  action: Action
) {
  return reducer(state, action);
}
