import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';


@Component({
  selector: 'app-modalnew',
  templateUrl: './modalnew.component.html',
  styleUrls: ['./modalnew.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ModalnewComponent implements OnInit {

  constructor(private modalService: NgbModal, private datosporfolio: PorfolioDataService) {

    this.value = Date();
  }
  types_job: any;
  Persona: any;
  closeResult = '';
  value: any;
  @Input() entidad: string = "0";

  formExpe = new FormGroup({
    id: new FormControl('', Validators.required),
    puesto: new FormControl('', Validators.required),
    empresa: new FormControl('', Validators.required),
    fecha_inicio: new FormControl('', Validators.required),
    fecha_final: new FormControl('', Validators.required),
    tareas: new FormControl('', Validators.required),
    url_img_logo: new FormControl('', Validators.required),
    typejob: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.datosporfolio.getTypeJob().subscribe(data => {
      this.types_job = data;

    });
    this.datosporfolio.obtenerDataPersona().subscribe(data => {
      this.Persona = data;
    });
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg' })


  }
  savedata(entidad: string) {
    switch (entidad) {
      case "experiencia":
        // console.log(this.Persona.experiencias);
        // console.log(this.formExpe.value);
        this.Persona.experiencias.push(this.formExpe.value);
        // // let perso = Object.assign(this.Persona.experiencia, this.formExpe.value);
        console.log(this.Persona);
        break;
      case "educacion":
        break;
    }

    console.log("click.ok");

  }

}
