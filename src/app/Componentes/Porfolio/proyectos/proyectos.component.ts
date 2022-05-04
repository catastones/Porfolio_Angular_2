import { Component, OnInit } from '@angular/core';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  Proyectos: any;
  entidad: string = "proyectos";
  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerDataPersona().subscribe(data => {
      this.Proyectos = data.proyectos;
    });
  }

}
