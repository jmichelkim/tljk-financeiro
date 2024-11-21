import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarUsuarioComponent } from './componentes/usuarios/criar-usuario/criar-usuario.component';
import { ListarUsuarioComponent } from './componentes/usuarios/listar-usuario/listar-usuario.component';
import { BotaoComponent } from './componentes/testes/botao/botao.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ExcluirUsuarioComponent } from './componentes/usuarios/excluir-usuario/excluir-usuario.component';
import { EditarUsuarioComponent } from './componentes/usuarios/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'criarUsuario',
    component: CriarUsuarioComponent
  },
  {
    path: 'listarUsuario',
    component: ListarUsuarioComponent
  },
  {
    path: 'botao',
    component: BotaoComponent
  },
  {
    path: 'usuarios/excluirUsuario/:id',
    component: ExcluirUsuarioComponent
  },
  {
  path: 'usuarios/editarUsuario/:id',
  component: EditarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
