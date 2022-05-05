import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcercaComponent } from './Componentes/Porfolio/acerca/acerca.component';
import { EducacionComponent } from './Componentes/Porfolio/educacion/educacion.component';
import { EModalEditComponent } from './Componentes/Porfolio/educacion/e-modal-edit/e-modal-edit.component';
import { EModalDeleteComponent } from './Componentes/Porfolio/educacion/e-modal-delete/e-modal-delete.component';
import { EModalNewComponent } from './Componentes/Porfolio/educacion/e-modal-new/e-modal-new.component';
import { CursosComponent } from './Componentes/Porfolio/cursos/cursos.component';
import { CModalEditComponent } from './Componentes/Porfolio/cursos/c-modal-edit/c-modal-edit.component';
import { CModalDeleteComponent } from './Componentes/Porfolio/cursos/c-modal-delete/c-modal-delete.component';
import { CModalNewComponent } from './Componentes/Porfolio/cursos/c-modal-new/c-modal-new.component';
import { ELaboralComponent } from './Componentes/Porfolio/e-laboral/e-laboral.component';
import { EncabezadoComponent } from './Componentes/Porfolio/encabezado/encabezado.component';
import { EnModalEditComponent } from './Componentes/Porfolio/encabezado/en-modal-edit/en-modal-edit.component';
import { EnModalDeleteComponent } from './Componentes/Porfolio/encabezado/en-modal-delete/en-modal-delete.component';
import { NavbarComponent } from './Componentes/Porfolio/navbar/navbar.component';
import { ProyectosComponent } from './Componentes/Porfolio/proyectos/proyectos.component';
import { PModalEditComponent } from './Componentes/Porfolio/proyectos/p-modal-edit/p-modal-edit.component';
import { PModalDeleteComponent } from './Componentes/Porfolio/proyectos/p-modal-delete/p-modal-delete.component';
import { PModalNewComponent } from './Componentes/Porfolio/proyectos/p-modal-new/p-modal-new.component';
import { SkillComponent } from './Componentes/Porfolio/skill/skill.component';
import { SModalEditComponent } from './Componentes/Porfolio/skill/s-modal-edit/s-modal-edit.component';
import { SModalDeleteComponent } from './Componentes/Porfolio/skill/s-modal-delete/s-modal-delete.component';
import { SModalNewComponent } from './Componentes/Porfolio/skill/s-modal-new/s-modal-new.component';
import { PorfolioComponent } from './Componentes/Porfolio/porfolio.component';

import { HttpClientModule } from '@angular/common/http';
import { ModalDeleteComponent } from './Componentes/Porfolio/Modals/modal-delete/modal-delete.component';
import { ModalnewComponent } from './Componentes/Porfolio/Modals/modalnew/modalnew.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,

    EducacionComponent,
    EModalEditComponent,
    EModalDeleteComponent,
    EModalNewComponent,
    CursosComponent,
    CModalEditComponent,
    CModalDeleteComponent,
    CModalNewComponent,
    ELaboralComponent,

    EncabezadoComponent,
    EnModalEditComponent,
    EnModalDeleteComponent,
    NavbarComponent,
    ProyectosComponent,
    PModalEditComponent,
    PModalDeleteComponent,
    PModalNewComponent,
    SkillComponent,
    SModalEditComponent,
    SModalDeleteComponent,
    SModalNewComponent,
    PorfolioComponent,
    ModalDeleteComponent,
    ModalnewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
