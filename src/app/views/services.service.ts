import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Steps } from './bpm/bpm.model';

@Injectable({
  providedIn: 'root' 
})
export class Serv {
    usersUrl = 'http://26.237.245.64:8080/';
    departUrl = 'http://26.237.245.64:8081/';
    processUrl = 'http://26.237.245.64:8082/';

    jwt = localStorage.getItem('jwtToken')    
    httpOptions = {
        headers: new HttpHeaders().set('Authorization',  'Bearer ' + this.jwt)
    };


    constructor(private http: HttpClient) { }

    public createToken(token){
        return this.http.get(this.usersUrl  + 'user/add-token/'+  token)
    }

    public createCompany(name){
      return this.http.post(this.departUrl + '/company/create', { name })
    }

    public getAllUsers(token){
      return this.http.get(this.usersUrl + 'user/get-all/'+  token)
  }

  public getAllDeparts(token){
    return this.http.get(this.departUrl + 'department/get-all/'+  token)
}

public addUserDeparts(name,id,firstName,middleName,lastName,companyToken){
  return this.http.post(this.departUrl + '/department/add-users',
  {
    name,
    'users':[{
      id,
      firstName,
      middleName,
      lastName,
      companyToken
    }],
    companyToken
})
}

public getRoleDeparts(token){
  return this.http.get(this.departUrl + 'role/get-all/'+  token)
}

public createAction(name: String, description: String, steps: Steps[],status, companyToken){
  return this.http.post(this.processUrl + 'bpm/create-action',
  {
    name,
    description: "FIRST PROC action",
    steps,
    status,
    companyToken
  }, this.httpOptions
  );
}

public deleteItem(steps, key){
  const index = steps.indexOf(key, 0);
  if (index > -1) {
     steps.splice(index, 1);
  }
}

}
