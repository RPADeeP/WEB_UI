import { Component, OnInit } from '@angular/core';
import { DepartmentsData } from './dashboard.model';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from './dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private DashboardService: DashboardService){}

  companyToken: string;

  Departments: DepartmentsData[];
  User: DepartmentsData;

  ngOnInit(): void {

    this.companyToken = localStorage.getItem('companyToken');
    this.DashboardService.getAllDeparts(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Departments=data; 
        console.log(this.Departments);
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
