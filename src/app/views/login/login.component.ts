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
  
  returnedData: any;
  onClickLogin(){
    this.loginService.login(this.code,this.password).subscribe(
      
      (data: any) => { 
        this.returnedData=data; 
        if (this.returnedData) {
          localStorage.setItem('companyToken', this.returnedData.companyToken); 
          localStorage.setItem('jwtToken', this.returnedData.jwtToken); 
          this.router.navigate(['/dashboard']);
        }
        else {
          console.error('ERROR');
        }
      }
    );
    // console.log(this.loginService.login(this.code,this.password));
  }
}
