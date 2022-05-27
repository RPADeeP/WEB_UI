import { Component, OnInit } from '@angular/core';
import { UserData, role } from './users.model';
import { HttpClient } from '@angular/common/http';
import { Serv } from '../services.service';
import { DefaultLayoutComponent } from 'src/app/containers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient, private serv: Serv, private def: DefaultLayoutComponent){}

  companyToken: string;

  Users: UserData[] = [
    // {
    //   firstName:"Someone", 
    //   lastName:"Some", 
    //   middleName:"Somathing", 
    //   companyToken: "6280ad6a8647ee27a6a8e37f", 
    //   id:
    //   {
    //     timestamp: 138578, 
    //     date: "02-05-2000"
    //   }, code:483532,
    //   role: 
    //   {
    //     name:"admin",
    //     isGeneralStatisticAvailable:true,
    //     isProcessCreatorAvailable:true,
    //     isJiraAvailable:true,
    //     isAddingStaffAvailable:true,
    //     companyToken:""
    //   },
    // },
    // {
    //   firstName:"asdfasdf", 
    //   lastName:"asfdsafd", 
    //   middleName:"adsfasdf", 
    //   companyToken: "6280ad6a8647ee27a6a8e37f", 
    //   id:
    //   {
    //     timestamp: 138578, 
    //     date: "02-05-2000"
    //   }, code:483532,
    //   role: 
    //   {
    //     name:"asdfsdf",
    //     isGeneralStatisticAvailable:true,
    //     isProcessCreatorAvailable:true,
    //     isJiraAvailable:true,
    //     isAddingStaffAvailable:true,
    //     companyToken:""
    //   },
    // },
    // {
    //   firstName:"adsfasf", 
    //   lastName:"adfasfd", 
    //   middleName:"adsfasdf", 
    //   companyToken: "6280ad6a8647ee27a6a8e37f", 
    //   id:
    //   {
    //     timestamp: 138578, 
    //     date: "02-05-2000"
    //   }, code:483532,
    //   role: null,
    // },
  ];

  Role: role[];

  ngOnInit(): void {
    this.companyToken = localStorage.getItem('companyToken');
    this.serv.getAllUsers(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Users=data; 
        console.log(this.Users);
      }
    )
    this.serv.getAllRoles(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Role=data; 
        console.log(this.Role);
      }
    );
  }


  userId: any;
  togleHideAndShadow(userId){
    // this.def.shade();
    document.getElementById("shadow").classList.toggle("bg-shade")
    document.getElementById("changeRole").classList.toggle("hide")
    this.userId = userId;
  }
  selectedRole: role;
  addRoleToUser(){
    console.log(this.selectedRole)
    this.serv.addRoleToUser(this.userId, this.selectedRole).subscribe(
      () => 
      {
        window.location.reload();
      }
    );
  }

}
