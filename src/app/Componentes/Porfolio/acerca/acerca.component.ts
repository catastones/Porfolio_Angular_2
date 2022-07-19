import { Component, Input, OnInit } from '@angular/core';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})


export class AcercaComponent implements OnInit {

  @Input() Acerca: any
  @Input() aut: boolean = false;

  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {

  }

}
