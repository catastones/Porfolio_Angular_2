import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private datosporfolio: PorfolioDataService) { }
  @Input() datos: any | undefined;
  imgPortada: string = "";
  imgPerfil: string = "";
  suscription: Subscription | undefined;

  ngOnInit(): void {
    // this.getDataPersona();
    // this.suscription = this.datosporfolio.refresh$.subscribe(
    //   () => { this.getDataPersona(); }
    // );
  }
  // getDataPersona() {
  //   this.datosporfolio.obtenerDataPersona().subscribe(data => {
  //     this.datos = data;
  //     this.imgPortada = data.url_img_portada;
  //     this.imgPerfil = data.url_img_perfil;
  //   });
  // }
}
