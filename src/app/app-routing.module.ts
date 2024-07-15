import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rutas } from './shared/enums/rutas.enum';
import { UsuarioGuard } from './shared/guards/usuario.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${Rutas.LOGIN}`,
    pathMatch: 'full',
  },
  {
    path: Rutas.LOGIN,
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: Rutas.TAREAS,
    canActivate: [UsuarioGuard],
    loadChildren: () =>
      import('./tareas/tareas.module').then((m) => m.TareasModule),
  },
  {
    path: '**',
    redirectTo: Rutas.LOGIN,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
