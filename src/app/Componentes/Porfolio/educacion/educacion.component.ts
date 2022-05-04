import { Component, OnInit } from '@angular/core';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  entidad: string = "educacion";

  constructor(private datosporfolio: PorfolioDataService) { }
  Educacion: any;
  ngOnInit(): void {
    this.datosporfolio.obtenerDataPersona().subscribe(data => {
      this.Educacion = data.educacion;

    })
  }

}
