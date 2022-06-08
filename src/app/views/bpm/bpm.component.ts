import { Component, OnInit } from '@angular/core';
import { Serv } from '../services.service';
import { Steps, DepartmentsData } from '../model';
import { DefaultLayoutComponent } from 'src/app/containers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bpm',
  templateUrl: './bpm.component.html',
  styleUrls: ['./bpm.component.scss']
})
export class BPMComponent implements OnInit {

  constructor(private serv: Serv, private def: DefaultLayoutComponent, private router: Router) { }

  i:number=1;
  counter: Array<number> = new Array();
  description: any;
  descriptionField: Steps;
  companyToken: any = localStorage.getItem('companyToken');
  userContractor: Steps;
  statusAction: any = "OK";
  status:any;
  dateField:any;
  stringFields:any;
  decimalFields:any;
  steps : Array<Steps> = new Array();
  
  actionName;
  decimalFieldsValues;
  StringFieldsValues;
  descriptionFieldValues;
  userContractorValues;
  dataFieldValues;
  statusValues;


  Departments: DepartmentsData[];
  ngOnInit(): void {
    if(!this.def.User.role.isAddingStaffAvailable){
      this.router.navigate(['/departments']);
    }
    this.counter.push(0)
    this.serv.getAllDeparts(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Departments=data; 
        console.log(this.Departments);
      }
    )
    
  }
  choosenDapartment: DepartmentsData;
  
  log(){
    console.log(this.choosenDapartment)
  }

  onSumbit(){
    console.log(this.steps);
    this.serv.createAction(this.actionName, this.description, this.steps, this.statusAction, this.companyToken).subscribe();  
  }

  onSave(){
    this.steps.push({
      decimalFields : {number : this.decimalFields},
      stringFields : {name : this.stringFields},
      descriptionField : this.descriptionField,
      userContractor: this.userContractor,
      dateField: this.dateField,
      status: this.status
    });
    this.counter.push(this.i)
    this.i++
  }

  onDelete(key){
    this.serv.deleteItem(this.steps, key);
    this.counter.pop()
    this.i--
    console.log(this.steps)
  };
}