import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { HttpClient } from '@angular/common/http';
import { DefaultLayoutService } from './default-layout.service';
import { user } from 'src/app/views/dashboard/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

  constructor(private http: HttpClient, private DefaultLayoutService: DefaultLayoutService){}
  
  companyToken: any;
  User: user;
  ngOnInit(): void {

    this.companyToken = localStorage.getItem('companyToken');
    this.DefaultLayoutService.getCurrentUser().subscribe(
      (data: any) => {
        this.User = data;
        console.log(this.User);
      }
    )
  }

  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
