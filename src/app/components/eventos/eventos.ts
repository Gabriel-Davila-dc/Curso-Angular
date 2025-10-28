import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css'
})
export class Eventos {
show: boolean = true;
classes = ["desorganizado", "organizado", "colorido"];
classeP: string = 'desorganizado';
i: number = 0;
sobre: string = 'Classe: ' + this.classeP;


showMessage() : void {
  this.show = !this.show; //toggle
  }
organizar(): void {
    this.i++;
    if (this.i >= this.classes.length) {
      this.i = 0;
    }
    this.classeP = this.classes[this.i];
    this.sobre = 'Classe: ' + this.classeP;
  }
}
