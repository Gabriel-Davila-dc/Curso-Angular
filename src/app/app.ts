import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData }  from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';
import { IfRender} from './components/if-render/if-render';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, ParentData, Directives, IfRender],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userName: string = 'Joaquim';

  dados = {
    nome: 'Joaquim',
    idade: 25,
    endereco: {
      rua: 'Rua A',
      numero: 100
    }
  };

  protected readonly title = signal('curso-angular');
}
