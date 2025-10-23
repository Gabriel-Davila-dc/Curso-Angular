import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  imports: [],
  templateUrl: './parent-data.html',
  styleUrl: './parent-data.css'
})
export class ParentData  {
@Input() name!: string; // 👈 declare o input

@Input() dados!: {   // 👈 declare o input
   nome: string; 
   idade: number; 
   endereco: { 
    rua: string; 
    numero: number } }; 


}
