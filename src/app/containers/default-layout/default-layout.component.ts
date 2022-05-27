import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Serv } from 'src/app/views/services.service'; 
import { User } from 'src/app/views/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {

  constructor(private http: HttpClient, private serv: Serv, private router: Router){}
  
  companyToken: any;
  User: User = {
    firstName: "",
    lastName: "",
    middleName: "",
    id:"",
    companyToken:"",
    code:null,
    role:null,
    department:{
      id: "",
      name: ""
    }
  };
  ngOnInit(): void {

   this.companyToken = localStorage.getItem('companyToken');
    this.serv.getCurrentUser().subscribe(
      (data: any) => {
        this.User = data;
        console.log(this.User);
      }
    )
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  shade(){
    document.getElementById("main").classList.toggle("bg-shade")
  }

  public sidebarMinimized = true;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
