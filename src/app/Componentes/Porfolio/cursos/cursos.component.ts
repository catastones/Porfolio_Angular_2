import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  @Input() Cursos: any;
  entidad: string = "cursos";
  suscription: Subscription | undefined;
  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
    // this.getCursos();
    // this.suscription = this.datosporfolio.refresh$.subscribe(
    //   () => { this.getCursos(); }
    // );

  }
  // getCursos() {
  //   this.datosporfolio.obtenerDataPersona().subscribe(data => {
  //     this.Cursos = data.cursos;
  //   });
  // }

}
