import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPadraoComponent } from './componentes/layout-padrao/layout-padrao.component';
import { LoginComponent } from './paginas/login/login.component';
import { SistemaComponent } from './paginas/sistema/sistema.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'sistema',
    component: SistemaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
