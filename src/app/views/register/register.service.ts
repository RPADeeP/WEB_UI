import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RegisterService {
    registerUrl = 'http://26.237.245.64:8080/auth/registry';

    constructor(private http: HttpClient){}

    usersUrl = 'http://26.237.245.64:8080/';
    register(firstName, middleName, lastName, password, companyToken, companyName) {
        password = btoa(password);
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