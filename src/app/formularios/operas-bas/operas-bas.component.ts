import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  calcu:string='';
  gradosC:string='';
  gradosF:string='';
  resultado:number=0;

  centigrados(): void {
    if (this.calcu === 'gradosc'){
      this.resultado = parseInt(this.gradosC)*1.8+32;
    } else if (this.calcu === 'gradosf'){
      this.resultado = (parseInt(this.gradosC)-32)*5/9;
    }
  }
}