import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario.service';

declare var bootstrap: any;  // Declare o objeto global para o Bootstrap

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css'
})
export class ListarUsuarioComponent implements OnInit {

  listaUsuarios: Usuario[] = [];

  constructor(
    private service: UsuarioService
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaUsuarios) => {
      this.listaUsuarios = listaUsuarios
    });

  }
}
  // } showModal(id: number) {
  //   // Seleciona o modal e exibe
  //   const modalElement = document.getElementById('exampleModal');
  //   const modal = new bootstrap.Modal(modalElement);
  //   modal.show(id);
  // }
// }
