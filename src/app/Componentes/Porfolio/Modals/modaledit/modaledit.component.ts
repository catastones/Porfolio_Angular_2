
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-modaledit',
  templateUrl: './modaledit.component.html',
  styleUrls: ['./modaledit.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModaleditComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private datosporfolio: PorfolioDataService,
    private readonly fb: FormBuilder) {

    this.value = Date();
  }
  porc: string = "0";
  types_job: any;
  estados: any;
  Persona: any;
  closeResult = '';
  value: any;
  @Input() entidad: string = "0";
  @Input() id: number = 0;

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
  //formEduca!: FormGroup;

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
    this.datosporfolio.obtenerDataPersona().subscribe(data => {
      this.Persona = data;
      this.onSetValue_experiencia();
      this.onSetValue_educa();
      this.onSetValue_cursos();
      this.onSetValue_skills();
      this.onSetValue_proyectos();
      // console.log(this.Persona.skills[this.id].habilidad)
    });
    this.datosporfolio.getEstado().subscribe(data => {
      this.estados = data;

    });
    this.datosporfolio.getTypeJob().subscribe(data => {
      this.types_job = data;

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
    console.log("click.Saveok");

  }
  onSetValue_educa(): void {
    this.formEduca.patchValue({
      id: this.id,
      establecimiento: this.Persona.educacion[this.id].establecimiento,
      carrera: this.Persona.educacion[this.id].carrera,
      fecha_inicio_e: this.Persona.educacion[this.id].fecha_inicio,
      fecha_final_e: this.Persona.educacion[this.id].fecha_final,
      url_logo: this.Persona.educacion[this.id].url_logo,
      estado: this.Persona.educacion[this.id].estado.estado
    });
  }
  onSetValue_cursos(): void {
    this.formCurso.patchValue({
      id: this.id,
      establecimiento: this.Persona.cursos[this.id].establecimiento,
      certificacion: this.Persona.cursos[this.id].certificacion,
      fecha_inicio_c: this.Persona.cursos[this.id].fecha_inicio,
      fecha_final_c: this.Persona.cursos[this.id].fecha_final,
      url_logo: this.Persona.cursos[this.id].url_logo,
      estado: this.Persona.cursos[this.id].estado.estado
    });
  }
  onSetValue_skills(): void {
    this.formSkill.patchValue({
      id: this.id,
      habilidad: this.Persona.skills[this.id].habilidad,
      porcentaje: this.Persona.skills[this.id].porcentaje
    });
  }
  onSetValue_proyectos(): void {
    this.formProyecto.patchValue({
      id: this.id,
      nombre_proyecto: this.Persona.proyectos[this.id].nombre_proyecto,
      descripcion: this.Persona.proyectos[this.id].descripcion,
      fecha_p: this.Persona.proyectos[this.id].fecha,
      link_proyecto: this.Persona.proyectos[this.id].link_proyecto,
      url_img: this.Persona.proyectos[this.id].url_img
    });
  }
  onSetValue_experiencia(): void {
    this.formExpe.patchValue({
      id: this.id,
      puesto: this.Persona.experiencias[this.id].puesto,
      empresa: this.Persona.experiencias[this.id].empresa,
      fecha_inicio: this.Persona.experiencias[this.id].fecha_inicio,
      fecha_final: this.Persona.experiencias[this.id].fecha_final,
      tareas: this.Persona.experiencias[this.id].tareas,
      url_img_logo: this.Persona.experiencias[this.id].url_img_logo,
      typejob: this.Persona.experiencias[this.id].typejob.type_empleo
    });
  }
  get skillPorcentaje() {
    return this.formSkill.get('porcentaje')!.value;
  }


}
