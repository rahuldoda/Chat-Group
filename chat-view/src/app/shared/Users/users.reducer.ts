import { ActionReducerMap, createReducer, on, State } from '@ngrx/store';
import { login, loginSuccess } from './users.action';


export interface userState {
  userId:any
  user: any;
}

export const IntialUserState: userState = {
  userId:null,
 user:null
}

export const userReducer = createReducer(IntialUserState,
  on(login,state=>({...state,userId:null})),
  on(loginSuccess,(state,{user})=>({...state,userId:user}))
)