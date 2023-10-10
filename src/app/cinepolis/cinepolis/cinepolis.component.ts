import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string;
  cantidadCompradores: number;
  usarCineco: string;
  cantidadBoletas: number;
  valorAPagar: number;
  valorInicial:number;
  error: string;

  
  constructor(){
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.usarCineco = ''; 
    this.cantidadBoletas = 0;
    this.valorAPagar = 0;
    this.valorInicial=12.00;
    this.error='';
  }

  
  calcularValor(){
    let boletosTot = this.cantidadCompradores*7;
    if(this.cantidadBoletas<=boletosTot){

      if(this.cantidadBoletas > 5){
        this.valorAPagar = (this.cantidadBoletas * this.valorInicial * 0.85);
      }

      else if(this.cantidadBoletas > 3 && this.cantidadBoletas <= 5){
        this.valorAPagar = (this.cantidadBoletas * this.valorInicial * 0.90);
      }

      else if(this.cantidadBoletas <= 3){
        this.valorAPagar = (this.cantidadBoletas * this.valorInicial);
      }

      if(this.usarCineco === 'si'){
        this.valorAPagar = this.valorAPagar * 0.90;
      }
    }
  }

  salir(){
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.usarCineco = '';
    this.cantidadBoletas = 0;
    this.valorAPagar = 0;
  }
}
