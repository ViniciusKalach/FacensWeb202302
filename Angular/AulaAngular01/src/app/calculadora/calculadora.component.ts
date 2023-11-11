import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  n1 : number = 0;
  n2 : number = 0;
  resultado : number = 0;
 
  public calcular() {
    this.resultado = this.n1 - this.n2;
  }
}
