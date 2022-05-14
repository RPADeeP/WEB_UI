import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DepartmentsService {
    createDepUrl = 'http://26.237.245.64:8080/auth/departments';

    constructor(private http: HttpClient){}

    departUrl = 'http://26.237.245.64:8081/';
    
    getAllDeparts(token){
        return this.http.get(this.departUrl + 'department/get-all/'+  token)
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