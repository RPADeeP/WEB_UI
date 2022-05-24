import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { Serv } from '../services.service';
import { Task } from './tasker.model'
@Component({
  selector: 'app-tasker',
  templateUrl: './tasker.component.html',
  styleUrls: ['./tasker.component.scss']
})
export class TaskerComponent implements OnInit {

  User = {
    firstName:"Someone", 
    lastName:"Some", 
    middleName:"Somathing", 
    companyToken: "6280ad6a8647ee27a6a8e37f", 
    id:"asda6a4sdf6a84d",
    role: 
    {
      name:"admin",
      isGeneralStatisticAvailable:true,
      isProcessCreatorAvailable:true,
      isJiraAvailable:true,
      isAddingStaffAvailable:true,
      companyToken:"9as8d1f9a87df",
      id:"6a5sd4a9684da",
    },
    code:315864
  }

  constructor(private serv: Serv) {  }

  Tasks: Task[] = [
    {
      name: "string",
      description: "string",
      userApplicant: this.User,
      userContractor: this.User,
      status: "ok",
      companyToken: "string",
      id: "string",
    },
    {
      name: "string",
      description: "string",
      userApplicant: this.User,
      userContractor: this.User,
      status: "ok",
      companyToken: "string",
      id: "string",
    },
  ];

  taskName: string;
  description: string;
  userContractor: User;

  userApplicant: User;
  companyToken: string;

  Users: User[];
  
  createTask(){
    this.serv.ceateTask(this.taskName, this.description, this.userApplicant, this.userContractor, "TODO", this.companyToken).subscribe();
  }
  
  changeStatus(){
    // this.serv.changeStatus(name, status, userContractor, description, companyToken).subscribe();
  }

  ngOnInit(): void {
    this.companyToken = localStorage.getItem('companyToken');
    this.serv.getCurrentUser().subscribe(
      (data: any) => { 
        this.userApplicant=data; 
        console.log(this.userApplicant);
      }
    );
    this.serv.getTasks(this.companyToken).subscribe(
      (data: any) => { 
        // this.Tasks=data; 
        // console.log(this.Tasks);
      }
    );
    this.serv.getAllUsers(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Users=data; 
        console.log(this.Users);
      }
    )
  }

}
