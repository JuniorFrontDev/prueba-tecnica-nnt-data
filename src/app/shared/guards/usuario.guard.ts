import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppFacade } from '../facades/app.facade';
import { Usuario } from '../models/usuario.model';
import { Rutas } from '../enums/rutas.enum';
import { LocalStorageService } from '../services/localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioGuard implements CanActivate {
  existeUsuario: boolean = false;

  constructor(
    private appFacade: AppFacade,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    const state = this.localStorageService.getState('state');
    console.log(state);
    this.appFacade.loadState(state);
    this.subscribeToUsuario();
  }

  subscribeToUsuario(): void {
    this.appFacade.usuarioLogeado$.subscribe(
      (usuario: Usuario | null) => (this.existeUsuario = usuario ? true : false)
    );
  }

  canActivate() {
    if (this.existeUsuario) {
      return true;
    }
    this.router.navigate([`/${Rutas.LOGIN}`]);
    return false;
  }
}
