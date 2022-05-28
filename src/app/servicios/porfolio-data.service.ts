import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioDataService {

  private _refresh$ = new Subject<void>();// se genara observable para refrescar los componentes ante un cambio de datos
  constructor(private http: HttpClient) {


  }
  get refresh$() {
    return this._refresh$;
  }

  obtenerDataJson(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

  obtenerEducacionJson(): Observable<any> {
    return this.http.get('./assets/data/educacion.json');
  }

  obtenerDataPersona(): Observable<any> {
    return this.http.get('./assets/data/dataPersona.json');
  }

  // obtenerDataPersona(): Observable<any> {
  //   return this.http.get('http://localhost:8080/verpersona/23');
  // }

  setDataPersona(Persona: Object): Observable<any> {
    return this.http.post<Object>('http://localhost:8080/addpersona', Persona)
      .pipe(
        tap(
          () => { this._refresh$.next(); })
      )


  }
  getTypeJob(): Observable<any> {
    return this.http.get('./assets/data/tipo_empleo.json');
  }
  getEstado(): Observable<any> {
    return this.http.get('./assets/data/estado.json');
  }

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };


  login(user: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set(`usuario`, user)
      .set(`Pass`, password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post('http://localhost:8080/api/login', body,
      { headers, observe: 'response' })
  }


}
