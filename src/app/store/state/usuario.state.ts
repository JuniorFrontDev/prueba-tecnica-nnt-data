import { Usuario } from 'src/app/shared/models/usuario.model';

export interface UsuarioState {
  usuarioLogeado: Usuario | null;
}

export const initialUsuarioState: UsuarioState = {
  usuarioLogeado: null,
};
