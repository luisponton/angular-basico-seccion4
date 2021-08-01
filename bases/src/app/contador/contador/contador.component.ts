import { Component } from '@angular/core';


@Component({
   
    selector: 'app-contador',
    template:`    
    <h1>{{titulo}}</h1>
    <hr>
    <button (click)="acumular(base)"> +{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)"> -{{base}}</button>
    ` 
})



export class contadorComponent{

  titulo:string = 'Contador App';
   base:number=5;
   numero:number=10;

   acumular(valor:number){
     return this.numero+=valor;
    }

}