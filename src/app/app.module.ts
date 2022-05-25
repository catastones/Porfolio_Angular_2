import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcercaComponent } from './Componentes/Porfolio/acerca/acerca.component';
import { EducacionComponent } from './Componentes/Porfolio/educacion/educacion.component';
import { CursosComponent } from './Componentes/Porfolio/cursos/cursos.component';
import { ELaboralComponent } from './Componentes/Porfolio/e-laboral/e-laboral.component';
import { EncabezadoComponent } from './Componentes/Porfolio/encabezado/encabezado.component';
import { NavbarComponent } from './Componentes/Porfolio/navbar/navbar.component';
import { ProyectosComponent } from './Componentes/Porfolio/proyectos/proyectos.component';
import { SkillComponent } from './Componentes/Porfolio/skill/skill.component';
import { PorfolioComponent } from './Componentes/Porfolio/porfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalDeleteComponent } from './Componentes/Porfolio/Modals/modal-delete/modal-delete.component';
import { ModalnewComponent } from './Componentes/Porfolio/Modals/modalnew/modalnew.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModaleditComponent } from './Componentes/Porfolio/Modals/modaledit/modaledit.component';
import { ModalinfoeditComponent } from './Componentes/Porfolio/Modals/modalinfoedit/modalinfoedit.component';
import { LoginComponent } from './Componentes/Porfolio/navbar/login/login.component';
import { ModaleditPersoComponent } from './Componentes/Porfolio/Modals/modaledit-perso/modaledit-perso.component';
@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    EducacionComponent,
    CursosComponent,
    ELaboralComponent,
    EncabezadoComponent,
    NavbarComponent,
    ProyectosComponent,
    SkillComponent,
    PorfolioComponent,
    ModalDeleteComponent,
    ModalnewComponent,
    ModaleditComponent,
    ModalinfoeditComponent,
    LoginComponent,
    ModaleditPersoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
