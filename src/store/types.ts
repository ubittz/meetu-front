import { AuthState } from '@@stores/auth/types';
import { HomeState } from '@@stores/home/types';

export interface AppState {
  home: HomeState;
  auth: AuthState;
}
