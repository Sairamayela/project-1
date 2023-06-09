import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login: FormGroup = new FormGroup(
    {
      email:new FormControl(),
      password: new FormControl()
    }
  )

  constructor(private _loginService:LoginService ,private _router:Router) { }

submit(){
  console.log(this.login);
this._loginService.login(this.login.value).subscribe(
  (data:any)=>{
    // alert("login success");
    console.log('sucess')
    localStorage.setItem("project-1-token",data.token);
    this. _router.navigateByUrl("/home");
  },
  (err:any)=>{
    alert("Invalid");
  }
)

}

}
