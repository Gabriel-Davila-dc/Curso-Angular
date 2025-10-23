import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css'
})
export class FirstComponent {
name: string = "Gabriel"
age: number = 21
job: string = "Developer"
}
