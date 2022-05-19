import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActionsService {

    constructor(private http: HttpClient){}

    bpmUrl = 'http://26.237.245.64:8082/';

    jwt = localStorage.getItem('jwtToken')
    
    httpOptions = {
        headers: new HttpHeaders(
            { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.jwt
            }
        )
    };

    getAllActions(token){
        return this.http.get(this.bpmUrl + 'bpm/get-all-actions/'+  token, this.httpOptions)
    }
}