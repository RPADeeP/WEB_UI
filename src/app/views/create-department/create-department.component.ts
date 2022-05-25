import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serv } from '../services.service';
import { createdDepartmentData } from '../model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {

  constructor(private http: HttpClient, private serv: Serv, private router:Router) { }
  
  departmentName: createdDepartmentData;
  
  returnedData: any;
  ngOnInit(): void {
    
  }

  createDep() {
    console.log(this.departmentName)
    console.log(localStorage.getItem('companyToken'))
    this.serv.createDep(this.departmentName, localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.router.navigate(['/dashboard']);
      }
    );
  }
}
