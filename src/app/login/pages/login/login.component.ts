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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorCredenciales: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appFacade: AppFacade
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
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
    this.router.navigate([`/${Rutas.TAREAS}`]);
  }

  campoEsValido(campo: string): boolean {
    return (
      this.form.controls[campo].touched && this.form.controls[campo].invalid
    );
  }
}
