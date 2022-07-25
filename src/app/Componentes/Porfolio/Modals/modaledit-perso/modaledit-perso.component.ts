import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-modaledit-perso',
  templateUrl: './modaledit-perso.component.html',
  styleUrls: ['./modaledit-perso.component.css']
})
export class ModaleditPersoComponent implements OnInit {
  @Input() Persona: any | undefined;

  formEditPerso = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    localidad: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    ocupacion: new FormControl('', Validators.required),
    fecha_nacimiento: new FormControl('', Validators.required),
    link_github: new FormControl('', Validators.required),
    link_linkedin: new FormControl('', Validators.required),
    link_youtube: new FormControl('', Validators.required),
    link_tw: new FormControl('', Validators.required),
    link_facebook: new FormControl('', Validators.required),
    link_instagram: new FormControl('', Validators.required)

  });
  constructor(config: NgbModalConfig, public modalService: NgbModal, private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
    this.onSetValue();
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  onSetValue() {
    this.formEditPerso.patchValue({
      nombre: this.Persona.nombre,
      apellido: this.Persona.apellido,
      telefono: this.Persona.telefono,
      email: this.Persona.email,
      localidad: this.Persona.localidad,
      provincia: this.Persona.provincia,
      ocupacion: this.Persona.ocupacion,
      fecha_nacimiento: this.Persona.fecha_nacimiento,
      link_github: this.Persona.redes[0].link_github,
      link_linkedin: this.Persona.redes[0].link_linkedin,
      link_youtube: this.Persona.redes[0].link_yuotube,
      link_tw: this.Persona.redes[0].link_twitter,
      link_facebook: this.Persona.redes[0].link_facebook,
      link_instagram: this.Persona.redes[0].link_instagram

    });
  }

  editPersona() {
    this.Persona.nombre = this.formEditPerso.value.nombre,
      this.Persona.apellido = this.formEditPerso.value.apellido,
      this.Persona.telefono = this.formEditPerso.value.telefono,
      this.Persona.email = this.formEditPerso.value.email,
      this.Persona.localidad = this.formEditPerso.value.localidad,
      this.Persona.provincia = this.formEditPerso.value.provincia,
      this.Persona.ocupacion = this.formEditPerso.value.ocupacion,
      this.Persona.fecha_nacimiento = this.formEditPerso.value.fecha_nacimiento,
      this.Persona.redes[0].link_github = this.formEditPerso.value.link_github,
      this.Persona.redes[0].link_linkedin = this.formEditPerso.value.link_linkedin,
      this.Persona.redes[0].link_yuotube = this.formEditPerso.value.link_youtube,
      this.Persona.redes[0].link_twitter = this.formEditPerso.value.link_tw,
      this.Persona.redes[0].link_facebook = this.formEditPerso.value.link_facebook,
      this.Persona.redes[0].link_instagram = this.formEditPerso.value.link_instagram

    this.datosporfolio.setDataPersona(this.Persona).subscribe(data => {
      console.log(data)
    });
  }
}
