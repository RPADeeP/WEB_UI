import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateDepartmentService} from './create-department.service';
import { createdDepartmentData } from './create-department.model';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {

  constructor(private http: HttpClient, private createDepartmentService: CreateDepartmentService, private router:Router, public fb: FormBuilder) { }
  
  departmentName: createdDepartmentData;
  
  returnedData: any;
  ngOnInit(): void {
    
  }

  createDep() {
    console.log(this.departmentName)
    console.log(localStorage.getItem('companyToken'))
    this.createDepartmentService.createDep(this.departmentName, localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.router.navigate(['/dashboard']);
      }
    );
  }
}
