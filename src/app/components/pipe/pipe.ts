import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class Pipe {

  texto: string = 'curso angular';

  today: Date = new Date();
}
