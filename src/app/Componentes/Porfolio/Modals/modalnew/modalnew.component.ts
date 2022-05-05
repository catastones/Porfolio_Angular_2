import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalnew',
  templateUrl: './modalnew.component.html',
  styleUrls: ['./modalnew.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalnewComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  closeResult = '';
  @Input() entidad: string = "0";


  ngOnInit(): void {
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg' })


  }
  savedata(entidad: string) {
    switch (entidad) {
      case "experiencia":
        break;
      case "educacion":
        break;
    }

    console.log("click.ok");

  }

}
