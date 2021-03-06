import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serv } from '../services.service';
import { registerUserData } from '../model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private serv: Serv, private router:Router) { }

  firstName: registerUserData;
  middleName: registerUserData;
  lastName: registerUserData;
  password: registerUserData;

  companyToken: string = "";
  
  companyName: string = "";

  returnedData: any;

  ngOnInit(): void {
  }

  hideJoin(){
    document.getElementById("createCompany").classList.toggle("hide");
    document.getElementById("registerForm").classList.toggle("hide");
  }
  hideCreate(){
    document.getElementById("joinCompany").classList.toggle("hide");
    document.getElementById("registerForm").classList.toggle("hide");
  }

  register() {
    console.log(this.firstName, this.middleName, this.lastName, this.password, this.companyToken, this.companyName)
    this.serv.register(this.firstName, this.middleName, this.lastName, this.password, this.companyToken, 
      this.companyName).subscribe(
      (data: any) => { 
        this.returnedData=data; 
        if (this.returnedData) {
          localStorage.setItem('companyToken', this.returnedData.companyToken); 
          localStorage.setItem('jwtToken', this.returnedData.jwtToken);
          this.serv.rewriteHttpOptions();
          this.router.navigate(['/departments']);
        }
      }
    );
  }
}
