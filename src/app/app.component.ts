import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculadora';
  
  num1:number= 0;
  num2:number= 0;
  resultado:number= 0;

  suma():void{
    this.resultado =  this.num1 + this.num2;
  }
  resta():void{
    this.resultado = this.num1 - this.num2;
  }
  divicion():void{
    this.resultado = this.num1 / this.num2;
  }
  multiplicar():void{
    this.resultado = this.num1 * this.num2;
  }

}
