import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-e-laboral',
  templateUrl: './e-laboral.component.html',
  styleUrls: ['./e-laboral.component.css']
})
export class ELaboralComponent implements OnInit {

  @Input() Experiencias: any;
  @Input() aut: boolean = false;
  entidad: string = "experiencia";
  suscription: Subscription | undefined;

  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
    // this.getExperiencias();
    // this.suscription = this.datosporfolio.refresh$.subscribe(
    //   () => { this.getExperiencias(); }
    // );
  }


}
