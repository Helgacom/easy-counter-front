export interface ILoginRequest {
  username: string;
  password: string;
}

export class LoginRequest implements ILoginRequest {
  public username: string;
  public password: string;
}
