import { Actions, createEffect, ofType } from "@ngrx/effects";

import { UserService } from "../../services/user.service";
import { Injectable } from "@angular/core";
import { login, loginFailure, loginSuccess, logout } from "./users.action";
import { catchError, EMPTY, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { NonNullableFormBuilder } from "@angular/forms";


@Injectable()
export class UserEffects {
    login$
    constructor(private actions$: Actions, private userService: UserService,private store:Store<any>) {
        this.login$ = createEffect(() =>
            this.actions$.pipe(
                ofType(login),
                mergeMap((action) =>
                    this.userService.login(action.credentials).pipe(
                        map((user) => {this.store.dispatch(loginSuccess({user}))
                    return (loginSuccess({user}))}),
                        catchError((error) => of(loginFailure({ error })))
                    )
                )
            )
        );
    }
    
    

    //   logout$ = createEffect(() =>
    //     this.actions$.pipe(
    //       ofType(logout),
    //       mergeMap(() =>
    //         this.authService.logout().pipe(
    //           map(() => loginFailure({   
    //  error: null })) // Or dispatch a logout success action
    //         )
    //       )
    //     )
    //   );

    
}
