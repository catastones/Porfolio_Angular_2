import { Component, OnInit } from '@angular/core';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  constructor(private datosporfolio: PorfolioDataService) { }
  Persona: any
  experiencias: any
  educacion: any
  cursos: any
  skill: any
  proyectos: any
  acerca: any
  redes: any
  ngOnInit(): void {
    this.getDataPersona();
  }
  getDataPersona() {
    this.datosporfolio.obtenerDataPersona().subscribe(data => {
      this.Persona = data;
      if (this.Persona != null) {
        this.acerca = this.Persona.acerca
        this.experiencias = this.Persona.experiencias
        this.educacion = this.Persona.educacion
        this.cursos = this.Persona.cursos
        this.skill = this.Persona.skills
        this.proyectos = this.Persona.proyectos
        this.redes = this.Persona.redes
        console.log(this.redes)
      }

    });
  }
}
