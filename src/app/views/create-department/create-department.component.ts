import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateDepartmentService} from './create-department.service';
import { createdDepartmentData } from './create-department.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {

  constructor(private http: HttpClient, private createDepartmentService: CreateDepartmentService, public fb: FormBuilder) { }
  
  departmentName: createdDepartmentData;
  
  returnedData: any;
  ngOnInit(): void {
    // console.log(localStorage.getItem('companyToken'))
    // // this.companyToken = localStorage.getItem('companyToken');
    // console.log(this.createDepartmentService.getRoleDeparts(JSON.stringify(localStorage.getItem('companyToken'))));
    // this.createDepartmentService.getRoleDeparts(JSON.stringify(localStorage.getItem('companyToken'))).subscribe(); //
    // console.log(this.returnedData)
    // this.Role = this.returnedData;
    // document.body.classList
  }

  createDep() {
    console.log(this.departmentName)
    console.log(localStorage.getItem('companyToken'))
    this.createDepartmentService.createDep(this.departmentName, localStorage.getItem('companyToken')).subscribe();
  }
}
