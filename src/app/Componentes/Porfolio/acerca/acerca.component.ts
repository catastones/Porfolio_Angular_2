import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})


export class AcercaComponent implements OnInit {

  @Input() Persona: any
  @Input() aut: boolean = false;
  edit: boolean = false;
  constructor(private datosporfolio: PorfolioDataService) { }
  formEditAcerca = new FormGroup({
    acerca: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
    this.onSetValue();
  }
  changeEdit() {
    this.edit = !this.edit;
    this.onSetValue();
  }
  editAcerca(form: FormGroup) {
    this.Persona.acerca = form.value.acerca;
    this.datosporfolio.setDataPersona(this.Persona).subscribe(data => {
      console.log(data)
    });
    this.changeEdit();
  }

  onSetValue() {
    this.formEditAcerca.setValue({
      acerca: this.Persona.acerca
    })
  }


}
