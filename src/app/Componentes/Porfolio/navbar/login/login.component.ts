import { Component, OnInit } from '@angular/core';
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
  sumit() {
    // console.log(this.formLogin.value);
    // console.log(this.formLogin.value.pass);


    this.datosporfolio.login(this.formLogin.value.user, this.formLogin.value.pass).subscribe(data => {
      this.user = data;
      console.log(this.user.body);
    });
  }
}
