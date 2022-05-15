import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateRoleService} from './create-role.service';
import { createdRoleData} from './create-role.model';
import { AnyForUntypedForms, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

  constructor(private http: HttpClient, private CreateRoleService: CreateRoleService, public fb: FormBuilder) { }

  roleName: createdRoleData;
  isGeneralStatisticAvailable: createdRoleData;
  isProcessCreatorAvailable: createdRoleData;
  isJiraAvailable: createdRoleData;
  isAddingStaffAvailable: createdRoleData;
  companyToken: string;

  choosenRole: any;

  // Role: createdRoleData[] = [
  //   {roleName: 'HR', isGeneralStatisticAvailable: true, isProcessCreatorAvailable: true, isJiraAvailable: false, isAddingStaffAvailable: true, companyToken: 's6d5f4'},
  //   {roleName: 'Marketing', isGeneralStatisticAvailable: true, isProcessCreatorAvailable: true, isJiraAvailable: true, isAddingStaffAvailable: true, companyToken: '4t9rj84'},
  //   {roleName: 'Developing', isGeneralStatisticAvailable: true, isProcessCreatorAvailable: true, isJiraAvailable: true, isAddingStaffAvailable: false, companyToken: '0x6cv51b'},
  //   {roleName: 'Assembly', isGeneralStatisticAvailable: true, isProcessCreatorAvailable: true, isJiraAvailable: true, isAddingStaffAvailable: false, companyToken: '9a08f4e'}
  // ];

  // Role: any = ['HR', 'Marketing', 'Developing', 'Assembly'];
  Role: createdRoleData[];
  
  returnedData: any;
  ngOnInit(): void {
    // console.log(localStorage.getItem('companyToken'))
    this.companyToken = localStorage.getItem('companyToken');
    // console.log(this.CreateRoleService.getRoleDeparts(JSON.stringify(localStorage.getItem('companyToken'))));
    this.CreateRoleService.getRoleDeparts(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Role=data; 
        console.log(this.Role);
        // if (this.returnedData) {
        //   localStorage.setItem('companyToken', this.returnedData.companyToken); 
        //   localStorage.setItem('jwtToken', this.returnedData.jwtToken);
        // }
        // else {
        //   console.error('ERROR');
        // }
      }
    ); //
    // console.log(this.returnedData)
    // this.Role = this.returnedData;
  }

  toggleDropdownArrowClass() {
    document.getElementById("iconDrodown").classList.toggle("cil-chevron-top");
    document.getElementById("iconDrodown").classList.toggle("cil-chevron-bottom");
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
      
      this.CreateRoleService.createRole(
        this.roleName, 
        this.isGeneralStatisticAvailable, 
        this.isProcessCreatorAvailable, 
        this.isJiraAvailable, 
        this.isAddingStaffAvailable,
        this.companyToken
      ).subscribe();
  }

}
