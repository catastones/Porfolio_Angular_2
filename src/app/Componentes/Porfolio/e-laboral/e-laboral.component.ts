import { Component, OnInit } from '@angular/core';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-e-laboral',
  templateUrl: './e-laboral.component.html',
  styleUrls: ['./e-laboral.component.css']
})
export class ELaboralComponent implements OnInit {

  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
  }

}
