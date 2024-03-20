import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResidentsService {
  private apiUrl = 'https://swapi.dev/api/planets/1/';
  constructor(private http:HttpClient) { }
  getResidents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
