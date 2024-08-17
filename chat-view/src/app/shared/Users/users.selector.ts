import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";


export const userState= (state:AppState)=>state.Users

export const userId = createSelector(userState,
    (state=>state?state.userId:null)
)