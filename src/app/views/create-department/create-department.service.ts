import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreateDepartmentService {
    registerUrl = 'http://26.237.245.64:8080/auth/create_department';

    constructor(private http: HttpClient){}

    createDep(departmentName) {
        console.log({departmentName});
        return this.http.post(this.registerUrl,
            {
                departmentName
            }
        );
    }
}