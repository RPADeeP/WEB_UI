import { Component, OnInit } from '@angular/core';
import { Actions, User } from '../model';
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
          userContractor: "f6a4sdf6a84dsf6a8d4a5fz68s",
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
          userContractor: "9a28f49a6sd92as4d8f64as92s98dg1",
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
          userContractor: "9s8d2fv9s2f9s7f2sdf898s2fd7",
          status: "2"
        },
      ],
      status: "OK",
      companyToken: "6283e86fa603be3af49e2928",
      id: "628524f1599aa668767c280e"
    }
  ];

  User: User;

  ngOnInit(): void {
    this.serv.getAllActions(localStorage.getItem('companyToken')).subscribe(
      (data: any) => { 
        this.Actions=data; 
        console.log(this.Actions);
      }
    );
    // this.serv.getCurrentUser().subscribe(
    //   (data: any) => { 
    //     this.User=data;
    //     console.log(this.User);
    //   }
    // );
  }

}
