export interface ISignupRequest {
  username: string;
  login: string;
  password: string;
  role?: string[];
}

export class SignupRequest implements ISignupRequest {
  public username: string;
  public login: string;
  public password: string;
  public role?: string[];
}
