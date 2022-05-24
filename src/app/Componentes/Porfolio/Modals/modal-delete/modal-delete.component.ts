import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';
@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalDeleteComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbModal, private datosporfolio: PorfolioDataService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  @Input() id: number = 0;
  @Input() entidad: string = "0";
  Persona: any;
  data: any;

  ngOnInit(): void {
    this.datosporfolio.obtenerDataPersona().subscribe(data => {
      this.Persona = data;
    })

  }
  open(content: any) {
    this.dataClear(this.id, this.entidad)
    this.modalService.open(content);
  }
  dataClear(id: number, entidad: string) {
    switch (entidad) {
      case "experiencia":
        this.data = this.Persona.experiencias[id];
        break;
      case "educacion":
        this.data = this.Persona.educacion[id];
        break;
      case "cursos":
        this.data = this.Persona.cursos[id];
        break;
      case "skills":
        this.data = this.Persona.skills[id];
        break;
      case "proyectos":
        this.data = this.Persona.proyectos[id];
        break;
    }
  }
  delete(id: number, entidad: string) {
    console.log(id);
    switch (entidad) {
      case "experiencia":
        var arrayElements = this.Persona.experiencias;
        arrayElements.splice(id, 1);
        break;
      case "educacion":
        var arrayElements = this.Persona.educacion;
        arrayElements.splice(id, 1);
        break;
      case "cursos":
        var arrayElements = this.Persona.cursos;
        arrayElements.splice(id, 1);
        break;
      case "skills":
        var arrayElements = this.Persona.skills;
        arrayElements.splice(id, 1);
        break;
      case "proyectos":
        var arrayElements = this.Persona.proyectos;
        arrayElements.splice(id, 1);
        break;
    }
    console.log('click delete');
    console.log(this.Persona);
    this.datosporfolio.setDataPersona(this.Persona).subscribe(data => {
      console.log(data);
    });
  }

}
