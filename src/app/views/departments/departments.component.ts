import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentsService } from './departments.service';
import { DepartmentsData } from './departments.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private http: HttpClient, private DepartmentsService: DepartmentsService) { }

  Departments: DepartmentsData[] = [
    {id: 0, depatmentName: 'HR', choosenRole: 'Hr', numberOfWorkers: 25, workersOnline: 15},
    {id: 1, depatmentName: 'Marketing', choosenRole: 'Marketing', numberOfWorkers: 30, workersOnline: 26},
    {id: 2, depatmentName: 'Developing', choosenRole: 'Developing', numberOfWorkers: 16, workersOnline: 16},
    {id: 3, depatmentName: 'Assembly', choosenRole: 'Assembly', numberOfWorkers: 50, workersOnline: 49}
  ];

  returnedData: any;
  ngOnInit(): void {
    // console.log(typeof(this.DepartmentsService.getAllDeparts(JSON.parse(localStorage.getItem('companyToken')))));
    // this.returnedData = this.DepartmentsService.getAllDeparts(JSON.parse(localStorage.getItem('companyToken')));
    // this.Role = this.returnedData;
  }

  update(){
  }

  delite() {
  }

}
