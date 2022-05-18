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

  companyToken: string;

  Departments: DepartmentsData[];
  

  returnedData: any;

  ngOnInit(): void {
    this.companyToken = localStorage.getItem('companyToken');
    this.DepartmentsService.getAllDeparts(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Departments=data; 
        console.log(this.Departments);
      }
    )
    // console.log(typeof(this.DepartmentsService.getAllDeparts(JSON.parse(localStorage.getItem('companyToken')))));
    // this.returnedData = this.DepartmentsService.getAllDeparts(JSON.parse(localStorage.getItem('companyToken')));
    // this.Role = this.returnedData;
  }

  update(){
  }

  delite() {
  }

}
