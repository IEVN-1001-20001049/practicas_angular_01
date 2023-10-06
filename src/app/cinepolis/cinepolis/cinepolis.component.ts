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
  error:string;
  valorInicial:number;

  
  constructor(){
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.usarCineco = ''; 
    this.cantidadBoletas = 0;
    this.valorAPagar = 0;
    this.error='';
    this.valorInicial=12000;
  }

  
  calcularValor(){
    let boletosTot = this.cantidadCompradores*7;
    if(this.cantidadBoletas<=boletosTot){

      if(this.cantidadBoletas > 5 && this.cantidadBoletas <= 7){
        this.valorAPagar = (this.cantidadBoletas * this.valorInicial * 0.85);
      }

      else if(this.cantidadBoletas >= 3 && this.cantidadBoletas <= 5){
        this.valorAPagar = (this.cantidadBoletas * this.valorInicial * 0.90);
      }

      else if(this.cantidadBoletas < 3){
        this.valorAPagar = (this.cantidadBoletas * this.valorInicial);
      }

      if(this.usarCineco === 'si'){
        this.valorAPagar = this.valorAPagar * 0.90;
      }
    }
    else if(this.cantidadBoletas > boletosTot){
      this.error =("Error en la compra, no se puede exceder de 7 boletas");
    }
  }

  salir(){
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.usarCineco = '';
    this.cantidadBoletas = 0;
    this.valorAPagar = 0;
    this.error='';
  }
}
