import { Gender } from '@@pages/Register/types';

export interface AuthState {
  token?: string;
  me?: User;
  changeKey?: string;
}

export interface LoginDTO {
  id: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterDTO {
  userId: string;
  username: string;
  password: string;
  email: string;
  birth: string;
  gender: Gender;
  tel: string;
}

export interface RegisterResponse {
  id: string;
  name: string;
  email: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  birth: string;
  tel: string;
  gender: Gender;
  createDatetime: Date;
}

export interface UserEditRequestDTO {
  id: string;
  password?: string;
  email?: string;
  description?: string;
}

export interface UserEditResponse {
  id?: string;
  name?: string;
  email?: string;
}

export interface UserVerifyIdentityResponse {
  userId: string;
  changeKey: string;
}
