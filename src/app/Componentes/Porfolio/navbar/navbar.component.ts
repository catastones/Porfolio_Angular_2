import { Component, Input, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/internal/Subscription';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private datosporfolio: PorfolioDataService) { }
  @Input() Redes: any
  Persona: any;
  linkedin: boolean = false;
  github: boolean = false;
  youtube: boolean = false;
  facebook: boolean = false;
  instagram: boolean = false;
  twitter: boolean = false;
  l_linkedin: any;
  timeoutid: any;
  suscription: Subscription | undefined;
  ngOnInit(): void {

    this.initBool();


    // this.getRedSocial();
    // this.suscription = this.datosporfolio.refresh$.subscribe(
    //   () => { this.initBool(); }
    // );
  }
  // getRedSocial() {
  //   this.datosporfolio.obtenerDataPersona().subscribe(
  //     data => {
  //       this.Redes = data.redes;
  //       console.log(this.Redes.link_linkedin)
  //       this.initBool();
  //     }
  //   );
  // }
  // ngOnDestroy(): void {
  //   this.suscription?.unsubscribe();
  //   // console.log('Observable destruido');
  // }
  initBool() {
    this.timeoutid = setTimeout(() => {
      this.linkedin = this.Redes.link_linkedin != undefined
      this.github = this.Redes.link_github != undefined || this.Redes.link_github != null;
      this.youtube = this.Redes.link_yuotube != undefined || this.Redes.link_yuotube != null;
      this.facebook = this.Redes.facebook != undefined || this.Redes.facebook != null;
      this.instagram = this.Redes.link_instagram != undefined || this.Redes.link_instagram != null;
      this.twitter = this.Redes.link_twitter != undefined || this.Redes.link_twitter != null;


    }, 50)
  }

}
