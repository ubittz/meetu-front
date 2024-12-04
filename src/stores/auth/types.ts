import { Gender } from '@@pages/Register/types';

export interface AuthState {
  token?: string;
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
