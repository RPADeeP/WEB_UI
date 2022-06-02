import { Component, OnInit } from '@angular/core';
import { Serv } from '../services.service';
import { Steps } from '../model'
import { DepartmentsData } from '../dashboard/dashboard.model';

@Component({
  selector: 'app-bpm',
  templateUrl: './bpm.component.html',
  styleUrls: ['./bpm.component.scss']
})
export class BPMComponent implements OnInit {

  constructor(private serv: Serv) { }

  i:number=1;
  counter: Array<number> = new Array();
  description: any;
  descriptionField: Steps;
  companyToken: any = localStorage.getItem('companyToken');
  userContractor: Steps;
  statusAction: any = "OK";
  status:any;
  dropDownChoiceField:any;
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
  dropDownChoiceFieldValues;
  statusValues;


  Departments: DepartmentsData[];
  ngOnInit(): void {
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
    this.serv.createAction(this.actionName, this.description, this.steps,this.statusAction, this.companyToken).subscribe();  
  }

  onSave(){
    this.steps.push({
      decimalFields : {number : this.decimalFields},
      stringFields : {name : this.stringFields},
      descriptionField : this.descriptionField,
      userContractor: this.userContractor,
      dateField: this.dateField,
      dropDownChoiceField: this.dropDownChoiceField,
      status: this.status
    });
    this.counter.push(this.i)
    this.i++
    console.log(this.steps);
    console.log(this.counter);
  }

  onDelete(key){
    this.serv.deleteItem(this.steps, key);
    this.counter.pop()
    this.i--
    console.log(this.steps)
  };
}