import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardService {

    constructor(private http: HttpClient){}

    departUrl = 'http://26.237.245.64:8081/';
    usersUrl = 'http://26.237.245.64:8080/';

    jwt = localStorage.getItem('jwtToken')
    
    httpOptions = {
        headers: new HttpHeaders(
            { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.jwt
            }
        )
    };
    
    getAllDeparts(token){
        return this.http.get(this.departUrl + 'department/get-all/'+  token, this.httpOptions)
    }

    getCurrentUser(){
        return this.http.get(this.usersUrl + 'user/get-current-user/', this.httpOptions)
    }

    getAllUsers(token){
        return this.http.get(this.usersUrl + 'user/get-all/'+  token, this.httpOptions)
    }

    getOneUser(){

    }
}