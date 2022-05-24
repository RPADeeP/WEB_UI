import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Steps } from './bpm/bpm.model';
import { User } from './model';

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

  constructor(private http: HttpClient) { }

  // http://26.237.245.64:8080/user/get-one/

  public createToken(token){
      return this.http.get(this.usersUrl  + 'user/add-token/'+  token)
  }

  public createCompany(name){
    return this.http.post(this.departUrl + '/company/create', { name })
  }

  /*----------users----------*/

  public login( code, password ){
    password = btoa(password);
    console.log(password)
    return this.http.post(this.usersUrl + 'auth/login', 
        {code,password}
    )
  }

  public logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public register(firstName, middleName, lastName, password, companyToken, companyName) {
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

  public getAllUsers(token){
    return this.http.get(this.usersUrl + 'user/get-all/'+  token, this.httpOptions)
  }

  public getCurrentUser(){
    return this.http.get(this.usersUrl + 'user/get-current-user/', this.httpOptions)
  }

  public getAllRoles(token){
    return this.http.get(this.usersUrl + 'role/get-all/' +  token,  this.httpOptions)
  }

  public createRole(name, isGeneralStatisticAvailable, isProcessCreatorAvailable, isJiraAvailable, isAddingStaffAvailable, companyToken){
    console.log({name, isGeneralStatisticAvailable, isProcessCreatorAvailable, isJiraAvailable, isAddingStaffAvailable, companyToken})
    return this.http.post(this.usersUrl + 'role/create',      
    {
      name, 
      isGeneralStatisticAvailable, 
      isProcessCreatorAvailable, 
      isJiraAvailable, 
      isAddingStaffAvailable,
      companyToken
    },
    this.httpOptions)
  }

  addRoleToUser(userId, assignRole){
    console.log({userId, assignRole})
    return this.http.post(this.usersUrl + 'user/add-role-to-user', {userId, assignRole}, this.httpOptions)
  }
  
  /*----------users----------*/
  

  /*----------departments----------*/ 

  public getAllDeparts(token){
    return this.http.get(this.departUrl + 'department/get-all/'+  token, this.httpOptions)
  }

  public getAllUsersWithoutDepart(token){
    return this.http.get(this.usersUrl + 'user/get-all-no-department/'+  token, this.httpOptions)
  }

  public addUserToDepartment(name,userId, departmentId){
    console.log({name, userId, departmentId})
    return this.http.post(this.usersUrl + 'user/add-user-to-department',
    {
      name,
      userId,
      departmentId
    },
    this.httpOptions)
  }

  public deleteUserFromDepartment(userId){
    console.log({userId})
    return this.http.post(this.usersUrl + 'user/delete-user-from-department',
    {
        userId
    },
    this.httpOptions
    )
  }

  public deleteDepartment(departmentId){
    console.log({departmentId})
    return this.http.post(this.departUrl + 'department/delete/' + departmentId, this.httpOptions)
  }

  public changeDepartmentName(departmentId, newName){
      console.log({departmentId, newName})
      return this.http.post(this.departUrl + 'department/change-name', 
      {
          departmentId,
          newName
      },
      this.httpOptions
      )
  }

  /*----------departments----------*/
  
  
  /*----------actions----------*/

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

  /*----------actions----------*/


  /*----------tasks----------*/

  public getTasks(companyToken){
    return this.http.get(this.taskerUrl + 'task/get-all/' +  companyToken,  this.httpOptions)
  }

  public ceateTask(name: string, description: string, userApplicant: User, userContractor: User, status: string, companyToken: string){
    console.log({name,description,userApplicant,userContractor,status,companyToken})
    return this.http.post(this.taskerUrl + 'task/create', 
    {
      name,
      description,
      userApplicant,
      userContractor,
      status,
      companyToken
    },
    this.httpOptions);
  }

  public changeStatus(name: string, status: string, userContractor: User, description: string = "", companyToken: string){
    console.log({name, status, userContractor, description, companyToken})
    return this.http.post(this.taskerUrl + 'task/change-status',
    {
      name, 
      status, 
      userContractor, 
      description, 
      companyToken
    },
    this.httpOptions)
  }

  /*----------tasks----------*/

}
