import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class List {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(
    private http: HttpClient) { }

  remove(animais:Animal[], animal: Animal) {
    const index = animais.indexOf(animal); //pega o index do animal
    if (index > -1) { //se encontrou o animal
      animais.splice(index, 1); //remove o animal do array
    }
    return animais;
  }
  
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
