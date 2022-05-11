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
  porc: string = "0";
  types_job: any;
  estados: any;
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

  formEduca = new FormGroup({
    id: new FormControl('', Validators.required),
    establecimiento: new FormControl('', Validators.required),
    carrera: new FormControl('', Validators.required),
    fecha_inicio_e: new FormControl('', Validators.required),
    fecha_final_e: new FormControl('', Validators.required),
    url_logo: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  });

  formCurso = new FormGroup({
    id: new FormControl('', Validators.required),
    establecimiento: new FormControl('', Validators.required),
    certificacion: new FormControl('', Validators.required),
    fecha_inicio_c: new FormControl('', Validators.required),
    fecha_final_c: new FormControl('', Validators.required),
    url_logo: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)

  });

  formSkill = new FormGroup({
    id: new FormControl('', Validators.required),
    habilidad: new FormControl('', Validators.required),
    porcentaje: new FormControl('', Validators.required)
  });
  formProyecto = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre_proyecto: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    fecha_p: new FormControl('', Validators.required),
    link_proyecto: new FormControl('', Validators.required),
    url_img: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
    this.datosporfolio.getEstado().subscribe(data => {
      this.estados = data;

    });
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
        this.Persona.experiencias.push(this.formExpe.value);
        break;
      case "educacion":
        this.Persona.educacion.push(this.formEduca.value)
        break;
      case "cursos":
        this.Persona.cursos.push(this.formCurso.value)
        break;
      case "skills":
        this.Persona.skills.push(this.formSkill.value)
        break;
      case "proyectos":
        this.Persona.proyectos.push(this.formProyecto.value)
        break;
    }
    console.log(this.Persona);
    console.log("click.ok");

  }

}
