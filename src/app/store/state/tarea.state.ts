import { Tarea } from 'src/app/shared/models/tarea.model';

export interface TareaState {
  listaTareas: Tarea[];
}

export const initialTareaState: TareaState = {
  listaTareas: [],
};
