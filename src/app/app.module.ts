import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPadraoComponent } from './componentes/layout-padrao/layout-padrao.component';
import { LoginComponent } from './paginas/login/login.component';
import { CamposPadraoComponent } from './componentes/campos-padrao/campos-padrao.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SistemaComponent } from './paginas/sistema/sistema.component';
import { RegistroComponent } from './paginas/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPadraoComponent,
    LoginComponent,
    CamposPadraoComponent,
    SistemaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
