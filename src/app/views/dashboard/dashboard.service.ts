import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardService {

    constructor(private http: HttpClient){}

    
    usersUrl = 'http://26.237.245.64:8080/';
    departUrl = 'http://26.237.245.64:8081/';

    jwt = localStorage.getItem('jwtToken')
    httpOptions = {
        headers: new HttpHeaders(
            { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.jwt
            }
        )
    };
    
    getAllDeparts(token){
        return this.http.get(this.departUrl + 'department/get-all/'+  token, this.httpOptions)
    }

    getCurrentUser(){
        return this.http.get(this.usersUrl + 'user/get-current-user/', this.httpOptions)
    }

    getAllUsersWithoutDepart(token){
        return this.http.get(this.usersUrl + 'user/get-all-no-department/'+  token, this.httpOptions)
    }
    
    addUserToDepartment(name,userId, departmentId){
        console.log({name, userId, departmentId})
        return this.http.post(this.usersUrl + 'user/add-user-to-department',
        {
          name,
          userId,
          departmentId
        },
        this.httpOptions)
    }

    deleteUserFromDepartment(userId){
        console.log({userId})
        return this.http.post(this.usersUrl + 'user/delete-user-from-department',
        {
            userId
        },
        this.httpOptions
        )
    }

    deleteDepartment(departmentId){
        console.log({departmentId})
        return this.http.post(this.departUrl + 'department/delete/' + departmentId, this.httpOptions)
    }

    changeDepartmentName(departmentId, newName){
        console.log({departmentId, newName})
        return this.http.post(this.departUrl + 'department/change-name', 
        {
            departmentId,
            newName
        },
        this.httpOptions
        )
    }
}