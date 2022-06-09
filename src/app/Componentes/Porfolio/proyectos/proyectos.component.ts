import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Input() Proyectos: any;
  entidad: string = "proyectos";
  suscription: Subscription | undefined;
  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
    // this.getProyectos();
    // this.suscription = this.datosporfolio.refresh$.subscribe(
    //   () => { this.getProyectos(); }
    // );
  }
  // getProyectos() {
  //   this.datosporfolio.obtenerDataPersona().subscribe(data => {
  //     this.Proyectos = data.proyectos;
  //   });
  // }

}
