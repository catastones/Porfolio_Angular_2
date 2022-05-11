import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioDataService {

  constructor(private http: HttpClient) { }
  obtenerDataJson(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

  obtenerEducacionJson(): Observable<any> {
    return this.http.get('./assets/data/educacion.json');
  }

  obtenerDataPersona(): Observable<any> {
    return this.http.get('./assets/data/dataPersona.json');
  }

  getTypeJob(): Observable<any> {
    return this.http.get('./assets/data/tipo_empleo.json');
  }
  getEstado(): Observable<any> {
    return this.http.get('./assets/data/estado.json');
  }
}
