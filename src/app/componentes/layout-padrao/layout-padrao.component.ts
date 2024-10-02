import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout-padrao',
  templateUrl: './layout-padrao.component.html',
  styleUrls: ['./layout-padrao.component.scss']
})
export class LayoutPadraoComponent {
  @Input() titulo: string = '';
  @Input() textoBtnPrimario: string = '';
  @Input() textoBtnSecundario: string = '';
  @Input() desabilitaBtnPrimario: boolean = true;

  @Output("eventoSubmit") onSubmit = new EventEmitter()
  @Output("eventoNavegar") onNavegar = new EventEmitter()

  enviar(): void{
    this.onSubmit.emit()
  }

  navegar(): void{
    this.onNavegar.emit()
  }
}
