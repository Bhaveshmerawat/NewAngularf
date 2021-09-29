


export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface User {
  uid: string;
  email: string;
  name :string;
  phone: string;
  password: string;
  // displayName: string;
  // photoURL: string;
  // emailVerified: boolean;
  roles: Roles;
}
