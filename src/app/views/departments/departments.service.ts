import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DepartmentsService {

    constructor(private http: HttpClient){}

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

    // createDep(departmentName, choosenRole) {
    //     console.log({departmentName, choosenRole});
    //     return this.http.post(this.createDepUrl,
    //         {
    //             departmentName,
    //             choosenRole
    //         }
    //     );
    // }

    // createRoleUrl = 'http://26.237.245.64:8080/auth/create_department';
    // createRole(roleName) {
    //     console.log({roleName});
    //     return this.http.post(this.createRoleUrl,
    //         {
    //             roleName
    //         }
    //     );
    // }
}