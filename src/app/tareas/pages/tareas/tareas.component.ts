import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppFacade } from 'src/app/shared/facades/app.facade';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { LocalStorageService } from 'src/app/shared/services/localStorage.service';
import { State } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent implements OnInit {
  form!: FormGroup;
  state!: State;
  readonly REGEX_ALFANUMERICO = new RegExp('^[A-Za-z0-9 ]+$');

  constructor(
    private fb: FormBuilder,
    public appFacade: AppFacade,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.subscribeToState();
    this.localStorageService.getState('state');
    this.crearFormulario();
  }

  subscribeToState(): void {
    this.appFacade.state$.subscribe((state: State) => (this.state = state));
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      nombreTarea: ['', Validators.required],
    });
  }

  get nombreTarea(): AbstractControl {
    return this.form.get('nombreTarea') as AbstractControl;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const tarea: Tarea = {
        idTarea: new Date().getTime(),
        nombreTarea: this.nombreTarea.value,
        completado: false,
      };
      this.appFacade.agregarTarea(tarea);
      this.localStorageService.setState(this.state, 'state');
      this.form.reset({ nombreTarea: '' });
    }
  }

  handleKeyPress(event: KeyboardEvent): void {
    const key = event.key;

    if (!this.REGEX_ALFANUMERICO.test(key)) {
      event.preventDefault();
    }
  }

  handlePaste(event: ClipboardEvent): void {
    let clipboardData = event.clipboardData;
    let textoPegado = clipboardData ? clipboardData.getData('text') : '';
    if (!this.REGEX_ALFANUMERICO.test(textoPegado)) {
      event.preventDefault();
      return;
    }
  }

  eliminarTarea(idTarea: number): void {
    this.appFacade.eliminarTarea(idTarea);
    this.localStorageService.setState(this.state, 'state');
  }

  completarTarea(idTarea: number): void {
    this.appFacade.completarTarea(idTarea);
    this.localStorageService.setState(this.state, 'state');
  }
}
