import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponseI } from 'src/app/Models/responseinterface';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aut: boolean = false;
  constructor(private datosporfolio: PorfolioDataService) { }
  formLogin = new FormGroup({
    user: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
  }
  onSubmit(login: FormGroup) {
    this.datosporfolio.login(login.value.user, login.value.pass).subscribe(data => {
      let user: ResponseI = data;
      if (user.token != null) {
        localStorage.setItem('access_token', user.token)
        //console.log(localStorage.getItem('access_token'));
        this.emitAut(user);
      } else {
        alert("Usuario o Password incorrectos");
      }

    }
      , error => { // second parameter is to listen for error
        console.log(error.statusText);
        alert('Status: ' + error.status + '   ' +
          'Type: ' + error.statusText);
      });
    this.resetInput();
  }
  resetInput() {
    this.formLogin.value.user = "";
    this.formLogin.value.pass = "";
    this.formLogin.patchValue({
      user: "",
      pass: ""
    })
  }

  emitAut(user: any) {
    this.datosporfolio.Autorizacion.emit({
      data: user.aut

    });
    this.aut = user.aut;
  }
  logout() {
    let user: any = {
      id: 0,
      usuario: null,
      pass: null,
      token: null,
      aut: false,
      status: null,
    }
    localStorage.removeItem("access_token");
    this.emitAut(user);
    console.log("logout")
  }
}
