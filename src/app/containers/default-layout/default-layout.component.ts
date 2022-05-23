import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DefaultLayoutService } from './default-layout.service';
import { user } from 'src/app/views/dashboard/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

  constructor(private http: HttpClient, private DefaultLayoutService: DefaultLayoutService, private router: Router){}
  
  companyToken: any;
  User: user = {
    firstName: "",
    lastName: "",
    middleName: "",
    id:"",
    companyToken:"",
    code:null,
    role:null
  };
  ngOnInit(): void {

   this.companyToken = localStorage.getItem('companyToken');
    this.DefaultLayoutService.getCurrentUser().subscribe(
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

  public sidebarMinimized = true;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
