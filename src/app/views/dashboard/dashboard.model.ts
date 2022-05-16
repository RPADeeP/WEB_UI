export class DepartmentsData {
    id: id;
    name: string;
    users: user;
    companyToken: string;
}
export class id {
    timestamp: number;
    date: string;
}
export class user {
    firstName: string;
	lastName: string;
	middleName: string;
	companyToken: string;
	id: id;
	code: number;
	role: role;
}
export class role {
    name: string;
    isGeneralStatisticAvailable: boolean;
    isProcessCreatorAvailable: boolean;
    isJiraAvailable: boolean;
    isAddingStaffAvailable: boolean;
    companyToken: string;
}