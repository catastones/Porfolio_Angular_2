import { Component, OnInit } from '@angular/core';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  Cursos: any;
  entidad: string = "cursos";
  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerDataPersona().subscribe(data => {
      this.Cursos = data.cursos;
      console.log(this.Cursos);
    });

  }

}
