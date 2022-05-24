export class User {
    firstName: string;
	lastName: string;
	middleName: string;
	companyToken: string;
	id: string;
	code: number;
	role: Role;
}
export class Role {
    name: string;
    isGeneralStatisticAvailable: boolean;
    isProcessCreatorAvailable: boolean;
    isJiraAvailable: boolean;
    isAddingStaffAvailable: boolean;
    companyToken: string;
    id: string;
}
export class registerUserData {
    firstName: string;
    middleName: string;
    lastName: string;
    password: string;
    companyToken: any;
}
export class loginUserData {
    code: string;
    password: string;
}