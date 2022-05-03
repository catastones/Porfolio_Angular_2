import { Component, OnInit } from '@angular/core';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private datosporfolio: PorfolioDataService) { }
  datos: any;

  ngOnInit(): void {



    this.datosporfolio.obtenerDataPersona().subscribe(data => {

      this.datos = data;
      console.log(this.datos);

    });
  }

}
