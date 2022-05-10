import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateDepartmentService } from './create-department.service';
import { createdDepartmentData, createdRoleData } from './create-department.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {

  constructor(private http: HttpClient, private createDepartmentService: CreateDepartmentService, public fb: FormBuilder) { }
  
  departmentName: createdDepartmentData;
  choosenRole: createdDepartmentData;

  roleName: createdRoleData;
  isGeneralStatisticAvailable: createdRoleData;
  isProcessCreatorAvailable: createdRoleData;
  isJiraAvailable: createdRoleData;
  isAddingStaffAvailable: createdRoleData;
  companyToken: createdRoleData;

  Role: any = ['HR', 'Marketing', 'Developing', 'Assembly'];
  // Role: any;
  
  ngOnInit(): void {
    // this.http.get<Array<object>>('http://26.237.245.64:8080/auth/create_department').subscribe(data => {
    //     this.Role = data;
    // })
  }

  myFunction() {
    document.getElementById("iconDrodown").classList.toggle("cil-chevron-top");
    document.getElementById("iconDrodown").classList.toggle("cil-chevron-bottom");
  }

  createDep() {
    console.log(this.departmentName, this.choosenRole)
    this.createDepartmentService.createDep(this.departmentName, this.choosenRole).subscribe();
  }

  createRole(){
    console.log(
      this.roleName, 
      this.isGeneralStatisticAvailable, 
      this.isProcessCreatorAvailable, 
      this.isJiraAvailable, 
      this.isAddingStaffAvailable,
      this.companyToken)
    this.Role.push(this.roleName) //TODO Maybe Role.push put into subscribe
    this.createDepartmentService.createRole(this.roleName, 
      this.isGeneralStatisticAvailable, 
      this.isProcessCreatorAvailable, 
      this.isJiraAvailable, 
      this.isAddingStaffAvailable,
      this.companyToken).subscribe(
      
    );
  }
}
