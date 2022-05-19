import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalinfoedit',
  templateUrl: './modalinfoedit.component.html',
  styleUrls: ['./modalinfoedit.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalinfoeditComponent implements OnInit {

  constructor(config: NgbModalConfig, public modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  @Input() Persona: any | undefined;
  ngOnInit(): void {
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
}


