import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreateDepartmentService {

    createDepUrl = 'http://26.237.245.64:8081/department/create';

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

    createDep(name, companyToken) {
        console.log({name, companyToken});
        return this.http.post(this.createDepUrl,
            {
                name,
                companyToken
            },
            this.httpOptions
        );
    }
}