import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../tipos/login-response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseUrl: string = 'http://localhost:8080/auth/login'

  constructor(private rota: Router, private httpClient: HttpClient) { }

  login(email: string, senha: string): Observable<LoginResponse>{
    return this.httpClient.post<any>(this.baseUrl, {email, senha}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("auth-nome", value.nome)
      })
    );
  }
}
