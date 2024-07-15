import { createAction, props } from '@ngrx/store';
import { Tarea } from 'src/app/shared/models/tarea.model';

export const agregarTarea = createAction(
  '[Tarea] agregar tarea',
  props<{ tarea: Tarea }>()
);

export const eliminarTarea = createAction(
  '[Tarea] eliminar tarea',
  props<{ idTarea: number }>()
);

export const completarTarea = createAction(
  '[Tarea] completar tarea',
  props<{ idTarea: number }>()
);
