
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as UserActions from '../shared/Users/users.action'
import { userId } from '../shared/Users/users.selector';
import { AppState } from '../shared/app.state';


@Component({
  selector: 'app-login',   
  standalone: true,
  imports:[ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
 {
  loginForm: FormGroup;

  loginData = {
    username: '',
    password: ''
  };
  

  constructor(private fb: FormBuilder,private userService: UserService,private router:Router,private store:Store<any>) {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required,
 Validators.minLength(3)]],
      password: ['', [Validators.required]]
    });
  }
 

  onSubmit()
 {
    if (this.loginForm.valid) {
      // Handle form submission, e.g., send data to server
            this.loginData={
        ...this.loginData,
        username:this.loginForm.value.username,
        password: this.loginForm.value.password
      }

// this.store.dispatch(UserActions.login({credentials:this.loginData}))
      this.userService.login(this.loginData).subscribe(
        (response) => {
          // Handle successful login
          
         const data = {
          userId:response.id,
          roleId:response.role_id
         }
          this.router.navigate(["/users"], { queryParams: { data: JSON.stringify(data) }} )
          // Store user information, redirect, etc.
        },
        (error) => {
          // Handle login error
          console.error('Login failed:', error);
        }
      );
    }
  }
}