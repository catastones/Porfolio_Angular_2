import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private datosporfolio: PorfolioDataService) { }
  formLogin = new FormGroup({
    user: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
  }
  onSubmit(login: FormGroup) {
    this.datosporfolio.login(login.value.user, login.value.pass).subscribe(data => {
      this.user = data.body;
      if (this.user != null) {
        localStorage.setItem('access_token', this.user.token)
        console.log(localStorage.getItem('access_token'))
      } else {
        alert("Usuario o Password incorrectos");
      }

    }
      , error => { // second parameter is to listen for error
        console.log(error.statusText);
        alert('Status: ' + error.status + '   ' +
          'Type: ' + error.statusText);
      });
  }


}
