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
  @Input() aut: boolean = false;

  entidad: string = "proyectos";
  suscription: Subscription | undefined;
  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {

  }

}
