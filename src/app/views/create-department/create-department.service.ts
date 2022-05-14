import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createdDepartmentData, createdRoleData} from './create-department.model';

@Injectable({ providedIn: 'root' })
export class CreateDepartmentService {

    createDepUrl = 'http://26.237.245.64:8080/auth/create_department';

    constructor(private http: HttpClient){}

    createDep(departmentName, choosenRole) {
        console.log({departmentName, choosenRole});
        return this.http.post(this.createDepUrl,
            {
                departmentName,
                choosenRole
            }
        );
    }

    jwt = localStorage.getItem('jwtToken')
    
    
    httpOptions = {
        headers: new HttpHeaders(
            // { 
            //     'Content-Type': 'application/json',
            //     'Authorization': 'Bearer ' + this.jwt
            // }
        ).set('Authorization',  'Bearer ' + this.jwt)
    };

    getRoleDeparts(token){
        console.log(this.jwt);
        return this.http.get('http://26.237.245.64:8081/role/get-all/' +  token,  this.httpOptions)
    }

    createRoleUrl = 'http://26.237.245.64:8081/role/create';
    createRole(name, 
        isGeneralStatisticAvailable, 
        isProcessCreatorAvailable, 
        isJiraAvailable, 
        isAddingStaffAvailable,
        companyToken) {
        console.log({name,
            isGeneralStatisticAvailable, 
            isProcessCreatorAvailable, 
            isJiraAvailable, 
            isAddingStaffAvailable,
            companyToken});
        return this.http.post(this.createRoleUrl,
            {
                name,
                isGeneralStatisticAvailable, 
                isProcessCreatorAvailable, 
                isJiraAvailable, 
                isAddingStaffAvailable,
                companyToken
            },
            this.httpOptions
        );
    }
}