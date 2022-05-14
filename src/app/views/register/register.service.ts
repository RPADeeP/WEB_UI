import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RegisterService {
    registerUrl = 'http://26.237.245.64:8080/auth/registry';
    usersUrl = 'http://26.237.245.64:8080/';
    departUrl = 'http://26.237.245.64:8081/';

    constructor(private http: HttpClient){}

    createCompany(name){
        return this.http.post(this.departUrl + 'company/create', { name })
    }

    register(firstName, middleName, lastName, password, companyToken, companyName) {
        password = btoa(password);
        console.log(
        {
            firstName,
            middleName,
            lastName,
            password,
            companyToken,
            companyName
        });
        return this.http.post(this.usersUrl + 'auth/registry',
            {
                firstName,
                middleName,
                lastName,
                password,
                companyToken,
                companyName
            }
        );
    }
}