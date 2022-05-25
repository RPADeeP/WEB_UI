import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { Serv } from '../services.service';
import { loginUserData } from '../model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(private serv: Serv, private router:Router) { }
  password: loginUserData;
  code: loginUserData;
  returnedData: any;

  onClickLogin(){
    this.serv.login(this.code,this.password).subscribe(
      
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
  }
}
