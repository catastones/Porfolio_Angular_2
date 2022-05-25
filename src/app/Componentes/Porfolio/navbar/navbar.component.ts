import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private datosporfolio: PorfolioDataService) { }
  Persona: any;
  linkedin: boolean = false;
  github: boolean = false;

  suscription: Subscription | undefined;
  ngOnInit(): void {
    this.getRedSocial();
    this.suscription = this.datosporfolio.refresh$.subscribe(
      () => { this.getRedSocial(); }
    );


  }
  getRedSocial() {
    this.datosporfolio.obtenerDataPersona().subscribe(
      data => {
        this.Persona = data;
        this.initBool();
      }
    );


  }
  initBool() {
    this.linkedin = this.Persona.link_linkedin != "" || this.Persona.link_linkedin != null;
    this.github = this.Persona.link_github != "" || this.Persona.link_github != null;
  }

}
