/*----------Register----------*/
export class registerUserData {
    firstName: string;
    middleName: string;
    lastName: string;
    password: string;
    companyToken: any;
}
/*----------Register----------*/

/*----------Login----------*/
export class loginUserData {
    code: string;
    password: string;
}
/*----------Login----------*/

/*----------User----------*/
export class User {
    firstName: string;
	lastName: string;
	middleName: string;
	companyToken: string;
	id: string;
	code: number;
	role: Role;
}
/*----------User----------*/

/*----------Role----------*/
export class Role {
    name: string;
    isGeneralStatisticAvailable: boolean;
    isProcessCreatorAvailable: boolean;
    isJiraAvailable: boolean;
    isAddingStaffAvailable: boolean;
    companyToken: string;
    id: string;
}
/*----------Role----------*/

/*----------Create-role----------*/
export class createdRoleData {
    name: string;
    isGeneralStatisticAvailable: boolean;
    isProcessCreatorAvailable: boolean;
    isJiraAvailable: boolean;
    isAddingStaffAvailable: boolean;
    companyToken: string;
}
/*----------Create-role----------*/

/*----------CreateDep----------*/
export class createdDepartmentData {
    depatmentName: string;
}
/*----------CreateDep----------*/

/*----------Department----------*/
export class DepartmentsData {
    id: string;
    name: string;
    users: User[];
    companyToken: string;
}
/*----------Department----------*/

/*----------BPM----------*/
export class Steps{
    decimalFields: DecimalFields;
    stringFields: StringFields;
    descriptionField: any;
    userContractor: any;
    dateField: string;
    dropDownChoiceField: any;
    status: any;
}
export class DecimalFields{
    number: number;
}
export class StringFields{
    name: string;
}
/*----------BPM----------*/

/*----------Actions----------*/
export class Actions {
    name:string;
    description: string;
    steps: Steps[];
    status: string;
    companyToken: string;
    id: string;
}
/*----------Actions----------*/

/*----------Task----------*/
export class Task{
    name: string;
    description: string;
    userApplicant:User;
    userContractor:User;
    status: string;
    companyToken: string;
    id: string;
}
/*----------Task----------*/