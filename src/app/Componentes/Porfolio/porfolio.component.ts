import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
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
  suscription: Subscription | undefined;
  ngOnInit(): void {
    this.getDataPersona();
    this.suscription = this.datosporfolio.refresh$.subscribe(
      () => { this.getDataPersona(); }
    );

  }
  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
    // console.log('Observable destruido');
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
        this.redes = this.Persona.redes[0]
        //console.log(this.redes)
      }

    });
  }
}
