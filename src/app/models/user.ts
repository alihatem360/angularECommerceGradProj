export interface IUserRes {
  name: string;
  password: string;
  email: string;
  id: number;
}

export interface IUserLogin {
  password: string;
  email: string;
}

export interface IUserRegister {
  name: string;
  password: string;
  email: string;
}
