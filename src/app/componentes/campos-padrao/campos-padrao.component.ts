import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type TiposCampo = 'text' | 'email' | 'password'

@Component({
  selector: 'app-campos-padrao',
  templateUrl: './campos-padrao.component.html',
  styleUrls: ['./campos-padrao.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CamposPadraoComponent),
      multi: true
    }
  ],
})
export class CamposPadraoComponent implements ControlValueAccessor {
  @Input() varTipo: TiposCampo = 'text'
  @Input() varInputNome: string = ''
  @Input() varPlaceholder: string = ''
  @Input() varLabel: string = ''

  valor: string = ''
  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }

  writeValue(value: any): void {
    this.valor = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {}
}
