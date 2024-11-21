import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit {

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  usuario: Usuario = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscaPorId(parseInt(id!)).subscribe((usuario) => {
      this.usuario = usuario
    })
  }

  editarUsuario() {
    this.service.editar(this.usuario).subscribe(() => {
      this.router.navigate(['/listarUsuario'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarUsuario'])
  }

}
