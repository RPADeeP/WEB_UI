import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsersService {

    constructor(private http: HttpClient){}

    jwt = localStorage.getItem('jwtToken')
    httpOptions = {
        headers: new HttpHeaders(
            { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.jwt
            }
        )
    };
    usersUrl = 'http://26.237.245.64:8080/';
    getAllUsers(token){
        return this.http.get(this.usersUrl + 'user/get-all/'+  token, this.httpOptions)
    }

    addRoleToUser(userId, assignRole){
        console.log({userId, assignRole})
        return this.http.post(this.usersUrl + 'user/add-role-to-user', {userId, assignRole}, this.httpOptions)
    }

    getAllRoles(token){
        return this.http.get(this.usersUrl + 'role/get-all/' +  token,  this.httpOptions)
    }
}