import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';
import { Subscription } from 'rxjs';



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
  data: any;
  @Input() entidad: string = "0";
  suscription: Subscription | undefined;

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
    fecha: new FormControl(),
    link_proyecto: new FormControl('', Validators.required),
    url_img: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
    this.getPersona();
    this.getTipos();
    this.getEstados();
    this.suscription = this.datosporfolio.refresh$.subscribe(
      () => { this.getEstados(); });
    this.suscription = this.datosporfolio.refresh$.subscribe(
      () => { this.getTipos(); });
    this.suscription = this.datosporfolio.refresh$.subscribe(
      () => { this.getPersona(); });
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }
  getEstados() {
    this.datosporfolio.getEstado().subscribe(data => {
      this.estados = data;
    });
  }
  getTipos() {
    this.datosporfolio.getTypeJob().subscribe(data => {
      this.types_job = data;
    });
  }
  getPersona() {
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
        this.Persona.experiencias.push(
          this.formExpe.value
        );
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
        this.formProyecto.value.fecha = this.setDateJson(this.formProyecto.value.fecha);
        this.Persona.proyectos.push(
          this.formProyecto.value
        )
        break;
    }
    console.log(this.Persona);
    console.log("click.ok");
    this.datosporfolio.setDataPersona(this.Persona).subscribe(data => {
      console.log(data);

    });


  }
  private setDateJson(date: any) {
    let tail = "T00:00:00.000+00:00"
    return date + tail;
  }
  get skillPorcentaje() {
    return this.formSkill.get('porcentaje')!.value;
  }

}
