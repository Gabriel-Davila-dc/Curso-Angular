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

  remove(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
