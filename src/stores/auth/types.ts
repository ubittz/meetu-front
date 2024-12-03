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
