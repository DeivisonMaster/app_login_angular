import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistroService } from 'src/app/servicos/registro.service';

export interface RegistroForm{
  nome: FormControl,
  email: FormControl,
  senha: FormControl,
  confirmaSenha: FormControl
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  registroForm!: FormGroup<RegistroForm>

  constructor(
    private registroServico: RegistroService, 
    private toastr: ToastrService,
    private rota: Router)
  {
    this.registroForm = new FormGroup({
        nome: new FormControl(null, [Validators.required, Validators.minLength(5)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        senha: new FormControl(null, [Validators.required]),
        confirmaSenha: new FormControl(null, [Validators.required])
    })
  }

  registrar(): void{
    console.log(this.registroForm.value)
    this.registroServico.registrar(
      this.registroForm.value.nome, 
      this.registroForm.value.email, 
      this.registroForm.value.senha, 
      this.registroForm.value.confirmaSenha)
    .subscribe(
      dados => {
        this.toastr.success('Cadastro realizado com sucesso!')
        this.registroForm.reset()

        this.rota.navigate(['login'])
      }, 
      erro => {
        this.toastr.error('Erro ao realizar o cadastro!')
      })
  }

  login(): void{
    this.rota.navigate(['login'])
  }
}
