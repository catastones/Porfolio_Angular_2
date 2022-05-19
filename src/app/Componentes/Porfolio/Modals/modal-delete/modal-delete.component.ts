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
  ngOnInit(): void {
    this.datosporfolio.obtenerDataPersona().subscribe(data => {
      this.Persona = data;

    })
  }
  open(content: any) {
    this.modalService.open(content);

  }
  delete(id: number, entidad: string) {

    console.log(id);
    var arrayElements = this.Persona.experiencias;
    arrayElements.forEach(() => {
      delete arrayElements[id];
    });
    switch (entidad) {
      case "experiencia":
        var arrayElements = this.Persona.experiencias;
        arrayElements.forEach(() => {
          delete arrayElements[id];
        });
        break;

      case "educacion":
        var arrayElements = this.Persona.educacion;
        arrayElements.forEach(() => {
          delete arrayElements[id];
        });
        break;
      case "cursos":
        var arrayElements = this.Persona.cursos;
        arrayElements.forEach(() => {
          delete arrayElements[id];
        });
        break;
      case "skills":
        var arrayElements = this.Persona.skills;
        arrayElements.forEach(() => {
          delete arrayElements[id];
        });
        break;
      case "proyectos":
        var arrayElements = this.Persona.proyectos;
        arrayElements.forEach(() => {
          delete arrayElements[id];
        });
        break;
    }
    console.log(this.Persona);
    this.datosporfolio.setDataPersona(this.Persona).subscribe(data => {
      console.log(data);
    });

  }

}
