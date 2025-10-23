import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrls: ['./directives.css']
})
export class Directives {
  size: number = 40;


  classes = ['class1', 'class2'];
}
