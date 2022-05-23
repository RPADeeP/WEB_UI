import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Steps } from './bpm/bpm.model';

@Injectable({
  providedIn: 'root' 
})
export class Serv {
    usersUrl = 'http://26.237.245.64:8080/';
    departUrl = 'http://26.237.245.64:8081/';
    processUrl = 'http://26.237.245.64:8082/';
    taskerUrl = 'http://26.237.245.64:8083/';
    router : Router;
    jwt = localStorage.getItem('jwtToken')    
    httpOptions = {
        headers: new HttpHeaders().set('Authorization',  'Bearer ' + this.jwt)
    };

    logout(){
      localStorage.clear();
      this.router.navigate(['/login']);
    }

    constructor(private http: HttpClient) { }

    // http://26.237.245.64:8080/user/get-one/

    public createToken(token){
        return this.http.get(this.usersUrl  + 'user/add-token/'+  token)
    }

    public createCompany(name){
      return this.http.post(this.departUrl + '/company/create', { name })
    }

    public getAllUsers(token){
      return this.http.get(this.usersUrl + 'user/get-all/'+  token, this.httpOptions)
  }

  public getAllDeparts(token){
    return this.http.get(this.departUrl + 'department/get-all/'+  token, this.httpOptions)
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
  return this.http.get(this.usersUrl + 'role/get-all/'+  token, this.httpOptions)
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

public getTasks(companyToken){
  return this.http.get(this.taskerUrl+ 'task/get-all/' +  companyToken,  this.httpOptions)
}

}
