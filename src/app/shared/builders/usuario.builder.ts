import { Usuario } from '../models/usuario.model';

export class UsuarioBuilder {
  private usuario: string = '';
  private nombre: string = '';
  private correo: string = '';

  constructor() {}

  withUsuario(usuario: string): UsuarioBuilder {
    this.usuario = usuario;
    return this;
  }

  withNombre(nombre: string): UsuarioBuilder {
    this.nombre = nombre;
    return this;
  }

  withCorreo(correo: string): UsuarioBuilder {
    this.correo = correo;
    return this;
  }

  build(): Usuario {
    return {
      usuario: this.usuario,
      nombre: this.nombre,
      correo: this.correo,
    };
  }
}
