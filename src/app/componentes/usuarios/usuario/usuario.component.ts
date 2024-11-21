import { Component, Input } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  @Input() usuario: Usuario = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }

  alteraCorUsuario(): string {
    if(this.usuario.name.length > 5) {
      return 'corAzul'
    }
    return 'corVermelho'
  }
}
