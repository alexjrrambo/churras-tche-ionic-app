export class User {
  uid?: string;
  nome!: string;
  email!: string;
  senha!: string;
}

export interface UserResponse {
  result?: {
    email?: string;
    uid?: string;
  };
  error: {
    code?: string;
    message?: string;
  };
}