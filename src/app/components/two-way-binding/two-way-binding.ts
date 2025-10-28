import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css'
})
export class TwoWayBinding {
  name: string = "";
}
