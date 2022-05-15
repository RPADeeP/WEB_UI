import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateDepartmentService} from './create-department.service';
import { createdDepartmentData, createdRoleData} from './create-department.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {

  constructor(private http: HttpClient, private createDepartmentService: CreateDepartmentService, public fb: FormBuilder) { }
  
  departmentName: createdDepartmentData;
  choosenRole: createdRoleData;

  roleName: createdRoleData;
  isGeneralStatisticAvailable: createdRoleData;
  isProcessCreatorAvailable: createdRoleData;
  isJiraAvailable: createdRoleData;
  isAddingStaffAvailable: createdRoleData;
  companyToken: createdRoleData;

  

  Role: createdRoleData[] = [
    {roleName: 'HR', isGeneralStatisticAvailable: true, isProcessCreatorAvailable: true, isJiraAvailable: false, isAddingStaffAvailable: true, companyToken: 's6d5f4'},
    {roleName: 'Marketing', isGeneralStatisticAvailable: true, isProcessCreatorAvailable: true, isJiraAvailable: true, isAddingStaffAvailable: true, companyToken: '4t9rj84'},
    {roleName: 'Developing', isGeneralStatisticAvailable: true, isProcessCreatorAvailable: true, isJiraAvailable: true, isAddingStaffAvailable: false, companyToken: '0x6cv51b'},
    {roleName: 'Assembly', isGeneralStatisticAvailable: true, isProcessCreatorAvailable: true, isJiraAvailable: true, isAddingStaffAvailable: false, companyToken: '9a08f4e'}
  ];

  // Role: any = ['HR', 'Marketing', 'Developing', 'Assembly'];
  // Role: any;
  
  returnedData: any;
  ngOnInit(): void {
    console.log(localStorage.getItem('companyToken'))
    // this.companyToken = localStorage.getItem('companyToken');
    console.log(this.createDepartmentService.getRoleDeparts(JSON.stringify(localStorage.getItem('companyToken'))));
    this.createDepartmentService.getRoleDeparts(JSON.stringify(localStorage.getItem('companyToken'))).subscribe(); //
    console.log(this.returnedData)
    this.Role = this.returnedData;
  }

  toggleDropdownArrowClass() {
    document.getElementById("iconDrodown").classList.toggle("cil-chevron-top");
    document.getElementById("iconDrodown").classList.toggle("cil-chevron-bottom");
  }

  createDep() {
    console.log(this.departmentName)
    console.log(
      this.choosenRole.roleName, 
      this.choosenRole.isGeneralStatisticAvailable, 
      this.choosenRole.isProcessCreatorAvailable, 
      this.choosenRole.isJiraAvailable, 
      this.choosenRole.isAddingStaffAvailable,
      this.choosenRole.companyToken)
    console.log(localStorage.getItem('companyToken'))
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

      //this.Role.push({this.roleName, this.isGeneralStatisticAvailable, ....}) //TODO Maybe Role.push put into subscribe
      
      this.createDepartmentService.createRole(
        this.roleName, 
        this.isGeneralStatisticAvailable, 
        this.isProcessCreatorAvailable, 
        this.isJiraAvailable, 
        this.isAddingStaffAvailable,
        this.companyToken
      ).subscribe();
  }
}
