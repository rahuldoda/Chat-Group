import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guard/auth.guard';
import { UserListComponent } from './component/user-list/user-list.component';

export const routes: Routes = [
    {
        path:'login',component:LoginComponent
    },
    {
        path:'users',component:UserListComponent,
        canActivate:[authGuard]
        
    },
    {
        path:'**',redirectTo:'login'
    },
];
