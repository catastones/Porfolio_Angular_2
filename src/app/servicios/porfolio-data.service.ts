import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators'
import { ResponseI } from '../Models/responseinterface'
import { Observable, Subject, tap } from 'rxjs';
//import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class PorfolioDataService {
  @Output() Autorizacion: EventEmitter<any> = new EventEmitter();

  headres = new HttpHeaders;
  private _refresh$ = new Subject<void>();// se genara observable para refrescar los componentes ante un cambio de datos
  constructor(private http: HttpClient) {
    this.headres.append('Content-Type', 'application/json');
    this.headres.append('Authorization', this.getToken());
  }
  get refresh$() {
    return this._refresh$;
  }
  getToken(): string {
    return localStorage.getItem('access_token') != null ? localStorage.getItem('access_token')! : "nula";
  }

  obtenerDataJson(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

  obtenerEducacionJson(): Observable<any> {
    return this.http.get('./assets/data/educacion.json');
  }

  // obtenerDataPersona(): Observable<any> {
  //   return this.http.get('./assets/data/dataPersona.json');
  // }

  obtenerDataPersona(): Observable<any> {
    return this.http.get('/api/verpersona/23');
  }

  setDataPersona(Persona: Object): Observable<any> {
    console.log(this.getToken())

    let httpHeader: HttpHeaders = new HttpHeaders();
    httpHeader = httpHeader.append('Authorization', this.getToken())
    httpHeader = httpHeader.append('Access-Control-Allow-Origin', '*')
    //console.log(httpHeader)
    return this.http.post<Object>('/api/addpersona', Persona, { headers: httpHeader })
      .pipe(
        tap(
          () => { this._refresh$.next(); })
      )
  }
  getTypeJob(): Observable<any> {

    return this.http.get('/api/tiposempleos');
  }
  getEstado(): Observable<any> {

    return this.http.get('/api/estadocarrera');
  }



  login(user: string, password: string): Observable<ResponseI> {
    const body = new HttpParams()
      .set(`usuario`, user)
      .set(`Pass`, password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<ResponseI>('http://localhost:8080/api/login', body,
      { headers })
  }
}
