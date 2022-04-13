import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RegisterService {
    registerUrl = 'http://26.237.245.64:8080/auth/registry';

    constructor(private http: HttpClient){}

    register(firstName, middleName, lastName, password) {
        password = btoa(password);
        console.log({firstName,
            middleName,
            lastName,
            password});
        return this.http.post(this.registerUrl,
                {firstName,
                middleName,
                lastName,
                password}
            );
    }
}