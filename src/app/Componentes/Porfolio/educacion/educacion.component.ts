import { Component, OnInit } from '@angular/core';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datosporfolio: PorfolioDataService) { }
  educacionList: any;
  ngOnInit(): void {
    this.datosporfolio.obtenerEducacionJson().subscribe(data => {
      this.educacionList = data.education;
      console.log(this.educacionList.education[0].escuela);
    })
  }

}
