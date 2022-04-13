import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateDepartmentService } from './create-department.service';
import { createdDepartmentData } from './create-department.model';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {

  constructor(private http: HttpClient, private createDepartmentService: CreateDepartmentService) { }
  //user: registerUserData;
  departmentName: createdDepartmentData;
  // middleName: createdDepartmentData;
  // lastName: createdDepartmentData;
  // password: createdDepartmentData;
  //passwordConfirm: any;

  ngOnInit(): void {
  }
  createDep() {
    console.log(this.departmentName)
    this.createDepartmentService.createDep(this.departmentName).subscribe();
  }
}
