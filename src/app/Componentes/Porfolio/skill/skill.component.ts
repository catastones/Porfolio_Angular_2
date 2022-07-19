import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() Skills: any;
  @Input() aut: Boolean = false;
  entidad: string = "skills";
  suscription: Subscription | undefined;
  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {


  }
  ngOnDestroy(): void {

  }

  ConvertNumber(porcentaje: any) {
    return parseInt(porcentaje);
  }

}
