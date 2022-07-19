import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  entidad: string = "educacion";

  constructor(private datosporfolio: PorfolioDataService) { }
  @Input() Educacion: any;
  @Input() Cursos: any;
  @Input() aut: boolean = false;
  suscription: Subscription | undefined;
  ngOnInit(): void {
    // this.getEducacion();
    // this.suscription = this.datosporfolio.refresh$.subscribe(
    //   () => { this.getEducacion(); }
    // );
  }
  // getEducacion() {
  //   this.datosporfolio.obtenerDataPersona().subscribe(data => {
  //     this.Educacion = data.educacion;

  //   })
  // }

}
