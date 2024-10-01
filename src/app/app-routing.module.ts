import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPadraoComponent } from './componentes/layout-padrao/layout-padrao.component';
import { LoginComponent } from './paginas/login/login.component';
import { SistemaComponent } from './paginas/sistema/sistema.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
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
