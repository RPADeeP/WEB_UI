import { Component, OnInit } from '@angular/core';
import { Serv } from '../services.service';
import { Steps } from './bpm.model'
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
  
  
  decimalFieldsValues;
  StringFieldsValues;
  descriptionFieldValues;
  userContractorValues;
  dataFieldValues;
  dropDownChoiceFieldValues;
  statusValues;

  ngOnInit(): void {
    this.counter.push(0)
  }


  onSumbit(){
    console.log(this.steps);
   this.serv.createAction("actionName", this.description, this.steps,this.statusAction, this.companyToken).subscribe();  
   
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
}

  onDelete(key){
    this.serv.deleteItem(this.steps, key);
  };
}