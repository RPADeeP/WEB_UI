import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createdRoleData } from './create-role.model';

@Injectable({ providedIn: 'root' })
export class CreateRoleService {

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
    getAllRoles(token){
        return this.http.get('http://26.237.245.64:8080/role/get-all/' +  token,  this.httpOptions)
    }

    response: any;
    createRoleUrl = 'http://26.237.245.64:8080/role/create';
    createRole(name, isGeneralStatisticAvailable, isProcessCreatorAvailable, 
        isJiraAvailable, isAddingStaffAvailable, companyToken) {
        return this.http.post(this.createRoleUrl,
            {
                name,
                isGeneralStatisticAvailable, 
                isProcessCreatorAvailable, 
                isJiraAvailable, 
                isAddingStaffAvailable,
                companyToken
            },
            this.httpOptions
        )
    }
}