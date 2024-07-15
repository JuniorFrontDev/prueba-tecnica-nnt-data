import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { USUARIO } from 'src/app/shared/consts/usuarioDefault';
import { Rutas } from 'src/app/shared/enums/rutas.enum';
import { AppFacade } from 'src/app/shared/facades/app.facade';
import { CredencialesLogin } from 'src/app/shared/models/credencialesLogin.model';
import { LocalStorageService } from 'src/app/shared/services/localStorage.service';
import { State } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorCredenciales: boolean = false;
  state!: State;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appFacade: AppFacade,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.appFacade.resetState();
    this.localStorageService.clearAll();
    this.subscribeToState();
    this.crearFormulario();
  }

  subscribeToState(): void {
    this.appFacade.state$.subscribe((state: State) => (this.state = state));
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get usuario(): AbstractControl {
    return this.form.get('usuario') as AbstractControl;
  }
  get password(): AbstractControl {
    return this.form.get('password') as AbstractControl;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (
      this.usuario.value !== USUARIO.usuario ||
      this.password.value !== USUARIO.password
    ) {
      this.errorCredenciales = true;
      return;
    }

    const usuario: CredencialesLogin = {
      usuario: this.usuario.value,
      password: this.password.value,
    };
    this.appFacade.login(usuario);
    this.localStorageService.setState(this.state, 'state');
    this.router.navigate([`/${Rutas.TAREAS}`]);
  }

  campoEsValido(campo: string): boolean {
    return (
      this.form.controls[campo].touched && this.form.controls[campo].invalid
    );
  }
}
