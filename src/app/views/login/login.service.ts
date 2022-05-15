import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    loginUrl = 'http://26.237.245.64:8080/auth/login';
    constructor(private http: HttpClient) { }

    public login( code, password ){
        password = btoa(password);
        console.log(password)
        return this.http.post(this.loginUrl, 
            {code,password}
        )
    }
}