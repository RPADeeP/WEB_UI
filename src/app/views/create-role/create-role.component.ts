import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serv } from '../services.service';
import { createdRoleData} from '../model';


@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

  constructor(private http: HttpClient, private serv: Serv) { }

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
    this.serv.getAllRoles(localStorage.getItem('companyToken')).subscribe(
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
      
      this.serv.createRole(
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
