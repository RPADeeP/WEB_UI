import { Component, OnInit } from '@angular/core';
import { DepartmentsData, user } from './dashboard.model';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from './dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private DashboardService: DashboardService){}

  companyToken: string;

  Users: user[] = [
    {
      firstName:"Someone", 
      lastName:"Some", 
      middleName:"Somathing", 
      companyToken: "6280ad6a8647ee27a6a8e37f", 
      id: "", 
      code:483532,
      role: 
      {
        name:"admin",
        isGeneralStatisticAvailable:true,
        isProcessCreatorAvailable:true,
        isJiraAvailable:true,
        isAddingStaffAvailable:true,
        companyToken:"",
        id: ""
      },
    },
    {
      firstName:"asdfasdf", 
      lastName:"asfdsafd", 
      middleName:"adsfasdf", 
      companyToken: "6280ad6a8647ee27a6a8e37f", 
      id: "",
      code:483532,
      role: 
      {
        name:"asdfsdf",
        isGeneralStatisticAvailable:true,
        isProcessCreatorAvailable:true,
        isJiraAvailable:true,
        isAddingStaffAvailable:true,
        companyToken:"",
        id: ""
      },
    },
    {
      firstName:"adsfasf", 
      lastName:"adfasfd", 
      middleName:"adsfasdf", 
      companyToken: "6280ad6a8647ee27a6a8e37f", 
      id: "", 
      code:483532,
      role: 
      {
        name:"default",
        isGeneralStatisticAvailable:true,
        isProcessCreatorAvailable:true,
        isJiraAvailable:true,
        isAddingStaffAvailable:true,
        companyToken:"",
        id: ""
      }
    },
  ];

  Departments: DepartmentsData[] = [
    {
      id: "86af7sd2fas41d1f64a",
      name: "PavelDepaf", 
      users: this.Users,
      companyToken: "6280ad6a8647ee27a6a8e37f"},
    
    {id:"9a82dsf4a6d817f1a6d4", name: "PavelDep", 
    users: this.Users, companyToken: "6280ad6a8647ee27a6a8e37f"},

    {id:"9a82dsf4a6d817f1a6d4", name: "sdadsads", 
    users: this.Users, companyToken: "6280ad6a8647ee27a6a8e37f"}
  ];

  toggleDepartment(ind){
    //hide all depatment blocks
    for (let index = 0; index < this.Departments.length; index++) {
      document.getElementById("departElem" + this.Departments[index].name).classList.toggle("hide");
    }
    //show inform about choosen depatment
    document.getElementById("userElem" + ind).classList.toggle("inblock");
    //change department width
    for (let index = 0; index < this.Departments.length; index++) {
      document.getElementById("length"+ this.Departments[index].name).classList.toggle("col-lg-3");
      document.getElementById("length"+ this.Departments[index].name).classList.toggle("col-lg-12");
    }
    
    // document.getElementById("departElem" + ind).classList.toggle("hide");
    // document.getElementById("iconDrodown" + ind).classList.toggle("cil-chevron-top");
    // document.getElementById("iconDrodown" + ind).classList.toggle("cil-chevron-bottom");
  }


  returnedUser: any[];
  addUserDeparts(name,users){
    this.returnedUser =  [users];
    console.log(name, users);
    this.DashboardService.addUserToDepartment(name,this.returnedUser,this.companyToken).subscribe();
    
  }

  ngOnInit(): void {
    this.companyToken = localStorage.getItem('companyToken');
    this.DashboardService.getAllDeparts(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Departments=data; 
        console.log(this.Departments);
      }
    )
    this.DashboardService.getAllUsers(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Users=data; 
        console.log(this.Users);
      }
    )
    // generate random values for mainChart
    // for (let i = 0; i <= this.mainChartElements; i++) {
    //   this.mainChartData1.push(this.random(50, 200));
    //   this.mainChartData2.push(this.random(80, 100));
    //   this.mainChartData3.push(65);
    // }
  }
}
