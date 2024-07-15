import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './pages/tareas/tareas.component';

const routes: Routes = [
  {
    path: '',
    component: TareasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasRoutingModule {}
