import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.scss'],
})
export class ListadoTareasComponent implements OnInit {
  @Input() listaTareas!: Tarea[] | null;
  @Output() emitEliminarTarea = new EventEmitter<number>();
  @Output() emitCompletarTarea = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  eliminarTarea(idTarea: number): void {
    this.emitEliminarTarea.emit(idTarea);
  }

  completarTarea(idTarea: number): void {
    console.log('entra completar tarea');
    this.emitCompletarTarea.emit(idTarea);
  }
}
