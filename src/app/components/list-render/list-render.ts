import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.html',
  styleUrl: './list-render.css'
})
export class ListRender {

  animals = [
    { name: 'Cotoca', type: 'Dog', foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Drawing-of-a-Dog-Home-400-x-400-1.webp'},
    { name: 'Gato de botas', type: 'Cat', foto: 'https://cdn.wamiz.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D80%2Cwidth%3D430%2Cheight%3D241.875%2Cfit%3Dcover/article/main-picture/5c9366e568c40874814030.jpg' },
    { name: 'Parrot', type: 'Bird', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/House_sparrow04.jpg/400px-House_sparrow04.jpg' },
    { name: 'Goldfish', type: 'Fish', foto: 'https://cdn.awsli.com.br/1845/1845715/produto/223193791/img_5837-jjkmghdktx.jpeg' }
  ];

}
