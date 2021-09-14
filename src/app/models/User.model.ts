
// export interface LoggedInUser {
//   id: number;
//   email: string;
//   Name: string;
//   role: LoggedInUserRole;
//   userType: LoggedInUserType;
// }

// export interface LoggedInUserRole {
// id: number;
// role: string;
// }


// export interface LoggedInUserType {
//   id: number;
//   name: string;
// }


export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface User {
  uid: string;
  email: string;
  roles: Roles;
}