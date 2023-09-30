import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-ax-b',
  templateUrl: './multiplicacion-ax-b.component.html',
  styleUrls: ['./multiplicacion-ax-b.component.css']
})
export class MultiplicacionAxBComponent {
  num1:number=0;
  num2:number=0;
  res:string='';

  sumar(){
    let num2 = this.num2;
    this.res='';
    for(let i = 0; i < num2; i++){
      if (i==0) {
        this.res += this.num1;
      }
      else if (i>=1){
        this.res += " + " + this.num1;
      }
    }
    this.res+=" = "+this.num1*num2;
  }
}
