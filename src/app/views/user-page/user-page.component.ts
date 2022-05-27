import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serv } from '../services.service'; 
import { User } from '../model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private serv: Serv, private router: Router) { }

  companyToken: string;
  User: User = {
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
  };

  Tasks: Task[];

  ngOnInit(): void {
    this.companyToken = localStorage.getItem('companyToken');
    this.serv.getCurrentUser().subscribe(
      (data: any) => {
        this.User = data;
        console.log(this.User);
      }
    )
    this.serv.getTasks(this.companyToken).subscribe(
      (data: any) => { 
        this.Tasks=data; 
        console.log(this.Tasks);
      }
    );
  }

}
