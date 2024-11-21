import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var bootstrap: any;  // Declare o objeto global para o Bootstrap


@Component({
  selector: 'app-excluir-usuario',
  templateUrl: './excluir-usuario.component.html',
  styleUrl: './excluir-usuario.component.css'
})
export class ExcluirUsuarioComponent implements OnInit {

  @Input() usuario: Usuario = {
    id: 0,
    name: 'Jhon',
    email: 'jhon@email.component',
    password: '123'
  }
  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscaPorId(parseInt(id!)).subscribe((usuario) => {
      this.usuario = usuario
      this.showModal()
    })
  }

  excluirUsuario() {
    if(this.usuario.id) {
      this.service.excluir(this.usuario.id).subscribe(() => {
        this.router.navigate(['/listarUsuario'])
        const backdrop = document.querySelector('.modal-backdrop.fade.show');
        if (backdrop) {
          backdrop.remove(); // Remove o elemento do DOM
        }
        })
    }
  }

  cancelar() {
    this.router.navigate(['/listarUsuario'])
  }

  showModal() {
      // Seleciona o modal e exibe
      const modalElement = document.getElementById('exampleModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
}
