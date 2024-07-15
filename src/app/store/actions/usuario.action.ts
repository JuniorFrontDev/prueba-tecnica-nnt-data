import { createAction, props } from '@ngrx/store';
import { CredencialesLogin } from 'src/app/shared/models/credencialesLogin.model';

export const login = createAction(
  '[Login] ingresar a la app',
  props<{ usuario: CredencialesLogin }>()
);
