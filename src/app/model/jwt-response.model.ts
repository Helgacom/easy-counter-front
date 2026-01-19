interface IJwtResponse {
  id?: number;
  username?: string;
  login?: string;
  roles?: string[];
}

export class JwtResponse implements IJwtResponse {
  constructor(public id?: number,
              public username?: string,
              public login?: string,
              public roles?: string[]
  ) {}
}

export interface IMessageResponse {
  message: string;
}
