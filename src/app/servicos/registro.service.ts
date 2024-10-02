import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroForm } from '../paginas/registro/registro.component';
import { Observable } from 'rxjs';
import { RegistroResponse } from '../tipos/registro-response.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  baseUrl: string = 'http://localhost:8080/auth/registrar';

  constructor(private httpClient: HttpClient) { }

  registrar(nome: string, email: string, senha: string, confirmaSenha: string): Observable<RegistroResponse>{
    return this.httpClient.post<RegistroResponse>(this.baseUrl, {nome, email, senha});
  }
}
