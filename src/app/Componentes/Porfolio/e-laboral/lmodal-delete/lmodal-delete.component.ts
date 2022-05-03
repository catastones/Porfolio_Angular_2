import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';
@Component({
  selector: 'app-lmodal-delete',
  templateUrl: './lmodal-delete.component.html',
  styleUrls: ['./lmodal-delete.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LModalDeleteComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, private datosporfolio: PorfolioDataService) {
    config.backdrop = 'static';
    config.keyboard = false;

  }
  @Input() id: string = "0";
  Persona: any;
  ngOnInit(): void {
    this.datosporfolio.obtenerDataPersona().subscribe(data => {
      this.Persona = data;

    })
  }
  open(content: any) {
    this.modalService.open(content);

  }

  delete(id: string) {
    console.log(this.Persona);
    console.log(id);
    var arrayElements = this.Persona.experiencias;
    arrayElements.forEach(() => {
      delete arrayElements[id];
    });

    console.log(arrayElements);

    console.log(this.Persona);
  }


}
