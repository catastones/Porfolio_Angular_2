import { Component, OnInit } from '@angular/core';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  Skills: any;
  entidad: string = "skills";
  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerDataPersona().subscribe(
      data => {
        this.Skills = data.skills;

      }
    );
  }
  ConvertNumber(porcentaje: any) {
    return parseInt(porcentaje);
  }

}
