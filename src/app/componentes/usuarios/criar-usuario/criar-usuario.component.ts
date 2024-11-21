import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './../usuario/usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrl: './criar-usuario.component.css'
})
export class CriarUsuarioComponent {
  usuario: Usuario = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private service: UsuarioService,
    private router: Router
  ) {}

  criarUsuario() {
    this.service.criar(this.usuario).subscribe(() => {
      this.router.navigate(['/listarUsuario'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarUsuario'])
  }

}
