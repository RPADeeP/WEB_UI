import { Component, OnInit } from '@angular/core';
import { Actions } from '../model';
import { HttpClient } from '@angular/common/http';
import { Serv } from '../services.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  constructor(private http: HttpClient, private serv: Serv){}

  Actions: Actions[] = [
    {
      name: "actionName",
      description: "FIRST PROC action",
      steps: [
        {
          decimalFields: {
            number: 123
          },
          stringFields: {
            name: "Rus"
          },
          descriptionField: "Tryer",
          dateField: "2012-04-23T18:25:43.511+00:00",
          dropDownChoiceField: "ok",
          userContractor: {
            timestamp: 1652812120,
            date: "2022-05-17T18:28:40.000+00:00"
          },
          status: "work"
        }
      ],
      status: "OK",
      companyToken: "6283e86fa603be3af49e2928",
      id: "6284f46d12d8496ed40e0b5e"
    },
    {
      name: "actionName",
      description: "FIRST PROC action",
      steps: [
        {
          decimalFields: {
            number: 1
          },
          stringFields: {
            name: "1"
          },
          descriptionField: "1",
          dateField: "2012-04-23T18:25:43.511+00:00",
          dropDownChoiceField: "1",
          userContractor: {
            timestamp: 1652812120,
            date: "2022-05-17T18:28:40.000+00:00"
          },
          status: "1"
        },
        {
          decimalFields: {
            number: 2
          },
          stringFields: {
            name: "2"
          },
          descriptionField: "2",
          dateField: "2012-04-23T18:25:43.511+00:00",
          dropDownChoiceField: "2",
          userContractor: {
            timestamp: 1652812120,
            date: "2022-05-17T18:28:40.000+00:00"
          },
          status: "2"
        },
      ],
      status: "OK",
      companyToken: "6283e86fa603be3af49e2928",
      id: "628524f1599aa668767c280e"
    }
  ];

  ngOnInit(): void {
    this.serv.getAllActions(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Actions=data; 
        console.log(this.Actions);
      }
    )
  }

}
