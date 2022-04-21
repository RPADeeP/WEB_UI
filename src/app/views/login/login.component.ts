import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(private http: HttpClient, private loginService: LoginService, private router:Router) { }
  password: User;
  code: User;
  

  onClickLogin(){
    this.loginService.login(this.code,this.password).subscribe(
      this.goTO
    );
    
  }
  goTO(){
    console.log("aaaa")
    this.router.navigateByUrl('/dashboard')
    //this.router.navigate(['/dashboard'])
  }
}
