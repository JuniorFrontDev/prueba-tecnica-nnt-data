import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './pages/tareas/tareas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoTareasComponent } from './components/listado-tareas/listado-tareas.component';

@NgModule({
  declarations: [TareasComponent, ListadoTareasComponent],
  imports: [CommonModule, TareasRoutingModule, ReactiveFormsModule],
})
export class TareasModule {}
