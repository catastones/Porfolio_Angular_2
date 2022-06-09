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
  entidad: string = "skills";
  suscription: Subscription | undefined;
  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
    // this.getSkills();
    // this.suscription = this.datosporfolio.refresh$.subscribe(
    //   () => { this.getSkills(); }
    // );

  }
  ngOnDestroy(): void {
    // this.suscription?.unsubscribe();
    // console.log('Observable destruido');
  }
  // getSkills() {
  //   this.datosporfolio.obtenerDataPersona().subscribe(
  //     data => {
  //       this.Skills = data.skills;
  //     }
  //   );
  // }
  ConvertNumber(porcentaje: any) {
    return parseInt(porcentaje);
  }

}
