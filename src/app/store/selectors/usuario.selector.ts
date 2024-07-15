import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsuarioState } from '../state/usuario.state';

const featureSelector = createFeatureSelector<UsuarioState>('usuario');

export const usuarioSelector = createSelector(
  featureSelector,
  (usuarioState: UsuarioState) => usuarioState.usuarioLogeado
);
