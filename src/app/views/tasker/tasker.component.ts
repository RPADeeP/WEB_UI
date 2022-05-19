import { Component, OnInit } from '@angular/core';
import { Serv } from '../services.service';
import { Task } from './tasker.model'
@Component({
  selector: 'app-tasker',
  templateUrl: './tasker.component.html',
  styleUrls: ['./tasker.component.scss']
})
export class TaskerComponent implements OnInit {

  constructor(private serv: Serv) { }
  tasks: Task;
  ngOnInit(): void {
    this.serv.getTasks(localStorage.getItem('companyToken')).subscribe(
      (data: Task) => { 
        this.tasks=data; 
        console.log(this.tasks);
      }
    );
  }

}
