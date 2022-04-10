import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from './register.service';
import { registerUserData } from './register.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private registerService: RegisterService) { }
  //user: registerUserData;
  firstName: registerUserData;
  middleName: registerUserData;
  lastName: registerUserData;
  password: registerUserData;
  //passwordConfirm: any;

  ngOnInit(): void {
    
  }
  register() {
    console.log(this.firstName, this.middleName, this.lastName, this.password)
    this.registerService.register(this.firstName, this.middleName, this.lastName, this.password).subscribe();
    //console.log(this.registerUserData)
  }
}
