export interface UpdatePasswordT {
  message: string;
  user: User;
  token: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
}
