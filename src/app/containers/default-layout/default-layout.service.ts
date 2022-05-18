import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DefaultLayoutService {

    constructor(private http: HttpClient){}

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

    getCurrentUser(){
        return this.http.get(this.usersUrl + 'user/get-current-user/', this.httpOptions)
    }
}