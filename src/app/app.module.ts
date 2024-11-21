import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { UsuarioComponent } from './componentes/usuarios/usuario/usuario.component';
import { CriarUsuarioComponent } from './componentes/usuarios/criar-usuario/criar-usuario.component';
import { FormsModule } from '@angular/forms';
import { ListarUsuarioComponent } from './componentes/usuarios/listar-usuario/listar-usuario.component';
import { BotaoComponent } from './componentes/testes/botao/botao.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirUsuarioComponent } from './componentes/usuarios/excluir-usuario/excluir-usuario.component';
import { ModalComponent } from './componentes/testes/modal/modal.component';
import { EditarUsuarioComponent } from './componentes/usuarios/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    UsuarioComponent,
    CriarUsuarioComponent,
    ListarUsuarioComponent,
    BotaoComponent,
    PrincipalComponent,
    ExcluirUsuarioComponent,
    ExcluirUsuarioComponent,
    ModalComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
