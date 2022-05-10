import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

    createRoleUrl = 'http://26.237.245.64:8080/role/create';
    createRole(roleName, 
        isGeneralStatisticAvailable, 
        isProcessCreatorAvailable, 
        isJiraAvailable, 
        isAddingStaffAvailable,
        companyToken) {
        console.log({roleName,
            isGeneralStatisticAvailable, 
            isProcessCreatorAvailable, 
            isJiraAvailable, 
            isAddingStaffAvailable,
            companyToken});
        return this.http.post(this.createRoleUrl,
            {
                roleName,
                isGeneralStatisticAvailable, 
                isProcessCreatorAvailable, 
                isJiraAvailable, 
                isAddingStaffAvailable,
                companyToken
            }
        );
    }
}