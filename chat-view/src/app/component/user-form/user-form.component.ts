import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  
  
    addUserForm: FormGroup;
  
    constructor(
      private userService:UserService,
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<UserFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.addUserForm = this.fb.group({
        first_name: ['', Validators.required],
        last_name: [''],
        email: ['', [Validators.required, Validators.email]],
        user_name:['',[Validators.required, Validators.minLength(5)]],
        password: ['', [Validators.required, Validators.minLength(8)]]
  
      });
    }
  
    onSubmit() {
      // Handle form submission, e.g., call a service to create a user      

      if(this.addUserForm.valid){
        const userParams={          first_name:this.addUserForm.value.first_name,
          last_name:this.addUserForm.value.last_name,
          email:this.addUserForm.value.email,
          username:this.addUserForm.value.user_name,
          password:this.addUserForm.value.password
        }
        this.userService.createUser({...userParams}).subscribe(val=>{        
          if(val){
            this.dialogRef.close('success')
          }
        })
   
      }
     // Pass data back to parent component
    }

    onClose(): void {
      this.dialogRef.close();
    }
  }