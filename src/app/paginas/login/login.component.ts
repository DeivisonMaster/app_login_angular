import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginServiceService } from 'src/app/servicos/login-service.service';

interface LoginForm{
  email: FormControl,
  senha: FormControl
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>

  constructor(private rota: Router, private loginServico: LoginServiceService, private toastServico: ToastrService){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  login(): void{
    this.loginServico.login(this.loginForm.value.email, this.loginForm.value.senha).subscribe(
      dados => {
        this.toastServico.success("Login realizado com sucesso!")
        this.rota.navigate(['sistema'])
      },
      erro => {
        this.toastServico.error("Falha ao realizar o login!")
      }
    );
  }

  navegar(): void{
    this.rota.navigate(['registrar'])
  }
}
