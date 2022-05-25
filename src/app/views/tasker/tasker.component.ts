import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { Serv } from '../services.service';
import { Task } from './tasker.model'
import { Router } from '@angular/router';
import { DefaultLayoutComponent } from 'src/app/containers';

@Component({
  selector: 'app-tasker',
  templateUrl: './tasker.component.html',
  styleUrls: ['./tasker.component.scss']
})
export class TaskerComponent implements OnInit {

  DefUser = {
    firstName: "Pavel",
    lastName: "Pustovoitov",
    middleName: "Sergeevich",
    code: 871801,
    companyToken: "6288dcf51b2ca30b4f3b0dbc",
    id: "6288dcf2c787c126ef626b07",
    role: 
    {
      isAddingStaffAvailable: false,
      companyToken: "6288dcf51b2ca30b4f3b0dbc",
      isGeneralStatisticAvailable: false,
      id: "628a072e8fb0be048deb74de",
      isJiraAvailable: true,
      name: "NewRole3",
      isProcessCreatorAvailable: true
    }
  }

  constructor(private serv: Serv, private router: Router, private def: DefaultLayoutComponent) {  }

  

  Tasks: Task[] = [
    {
      companyToken: "6288dcf51b2ca30b4f3b0dbc",
      description: "You should end tasker",
      id: "628d042eab859a5ab356fcfa",
      name: "EndTasker",
      status: "TODO",
      userApplicant: this.DefUser,
      userContractor: this.DefUser,
    },
    {
      companyToken: "6288dcf51b2ca30b4f3b0dbc",
      description: "You should end create tasker",
      id: "628d10a9ab859a5ab356fd7b",
      name: "EndTaskerCreate",
      status: "DONE",
      userApplicant: this.DefUser,
      userContractor: this.DefUser,
    },
    {
      companyToken: "6288dcf51b2ca30b4f3b0dbc",
      description: "TestHeight",
      id: "628d15cdab859a5ab356fe58",
      name: "TestHeight",
      status: "DONE",
      userApplicant: this.DefUser,
      userContractor: this.DefUser,
    },
    {
      companyToken: "6288dcf51b2ca30b4f3b0dbc",
      description: "You should end change tasker",
      id: "628d10bbab859a5ab356fd7c",
      name: "EndTaskerChange",
      status: "IN_PROGRESS",
      userApplicant: this.DefUser,
      userContractor: this.DefUser,
    },
  ];

  taskName: string;
  description: string;
  userContractor: User;

  userApplicant: User = this.DefUser;
  companyToken: string;
  status: string;
  id: string;

  Users: User[];
  
  createTask(){
    this.serv.ceateTask(this.taskName, this.description, this.userApplicant, this.userContractor, "TODO", this.companyToken).subscribe();
  }

  changeStatus(name, description, userContractor, status, id){
    this.serv.changeTask(name, status, userContractor, description, this.companyToken, id).subscribe(
      () => {
        window.location.reload();
      }
    );
  }

  hideUpdate(name, description, status, userContractor, id){
    document.getElementById("updateTask").classList.toggle("hide");
    this.taskName = name;
    this.status = status;
    this.description = description;
    this.userContractor = userContractor;
    this.id = id
  }

  updateTask(){
    this.serv.changeTask(this.taskName, this.status, this.userContractor, this.description, this.companyToken, this.id).subscribe(
      () => {
        window.location.reload();
      }
    );
  }

  ngOnInit(): void {
    if(this.def.User.role.isJiraAvailable){

      this.companyToken = localStorage.getItem('companyToken');
      this.serv.getCurrentUser().subscribe(
        (data: any) => { 
          this.userApplicant=data;
          console.log(this.userApplicant);
        }
      );
      this.serv.getTasks(this.companyToken).subscribe(
        (data: any) => { 
          this.Tasks=data; 
          console.log(this.Tasks);
        }
      );
      this.serv.getAllUsers(localStorage.getItem('companyToken')).subscribe(
        (data: any) => { 
          this.Users=data; 
          console.log(this.Users);
        }
      )
    }
    else{
      this.router.navigate(['/dashboard']);
    }
  }

}
