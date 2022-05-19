import { UserData } from '../users/users.model';



export class Task{
    name: string;
    description: string;
    userApplicant:UserData;
    userContractor:UserData;
    status: string;
    companyToken: string;
    id: string;
}