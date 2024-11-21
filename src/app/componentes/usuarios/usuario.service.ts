import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario/usuario'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API)
  }

  criar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API, usuario)
  }

  editar(usuario: Usuario): Observable<Usuario> {
    const url = `${this.API}/${usuario.id}`
    return this.http.put<Usuario>(url, usuario)
  }

  excluir(id: number): Observable<Usuario> {
    const url = `${this.API}/${id}`
    return this.http.delete<Usuario>(url)
  }

  buscaPorId(id: number): Observable<Usuario> {
    const url = `${this.API}/${id}`
    return this.http.get<Usuario>(url)
  }


}
