import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateRoleService} from './create-role.service';
import { createdRoleData} from './create-role.model';
import { AnyForUntypedForms, FormBuilder, Validators } from '@angular/forms';
import { Serv } from '../services.service';


@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

  constructor(private http: HttpClient, private CreateRoleService: CreateRoleService, private serv: Serv) { }

  roleName: createdRoleData;
  isGeneralStatisticAvailable: createdRoleData;
  isProcessCreatorAvailable: createdRoleData;
  isJiraAvailable: createdRoleData;
  isAddingStaffAvailable: createdRoleData;
  companyToken: string;

  Role: createdRoleData[];
  
  returnedData: any;
  ngOnInit(): void {
    this.companyToken = localStorage.getItem('companyToken');
    this.CreateRoleService.getAllRoles(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Role=data; 
        console.log(this.Role);
      }
    );
  }

  toggleExistingRolesDropdown() {
    document.getElementById("iconDrodown").classList.toggle("cil-chevron-top");
    document.getElementById("iconDrodown").classList.toggle("cil-chevron-bottom");
    document.getElementById("existingRoles").classList.toggle("hide");
  }
  toggleRoleDropdown(ind) {
    document.getElementById(ind).classList.toggle("hide");
    document.getElementById("iconDrodown" + ind).classList.toggle("cil-chevron-top");
    document.getElementById("iconDrodown" + ind).classList.toggle("cil-chevron-bottom");
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
      ).subscribe(
        () => {
          window.location.reload();
        },
        error => {
          if(error.status == 401){
            this.serv.logout();
          }
        }
      );
  }

}
