import { Component, OnInit } from '@angular/core';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {


  private _acerca: string = "";
  public get acerca(): string {
    return this._acerca;
  }
  public set acerca(value: string) {
    this._acerca = value;
  }
  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerDataPersona().subscribe(
      data => {

        this.acerca = data.url_img_portada;
      }
    );
  }

}
