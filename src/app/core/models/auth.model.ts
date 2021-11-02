export interface UserModel {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface AuthModel {
  idToken: string;
  expiresIn: string;
}
