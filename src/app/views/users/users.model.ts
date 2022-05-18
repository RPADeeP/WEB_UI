export class UserData {
    firstName: string;
	lastName: string;
	middleName: string;
	companyToken: string;
	id: string;
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
    id: string;
}