import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { CommonModule } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
userData !:any[]
selectedItems: string[] = [];
 public data: any;
  constructor(private user:UserService,private dialog: MatDialog,private route:ActivatedRoute){  
  }

  ngOnInit(): void {  
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params['data']);   

    });
   
   this.user.getUserList().subscribe(userList=>{
    this.userData = userList
   
   })
  }

  openAddUserModal() {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '500px',
      data: { // Optional data to pass to the dialog
        title: 'Add User'
      },
position:{top:'3%',left:'25%'}
    });

    dialogRef.afterClosed().subscribe(() => {
    
     this.ngOnInit()
      // Handle the result from the dialog
    });
  }

  onCheckboxChange(id: string) {
    const indexToRemove = this.selectedItems.indexOf(id);
    if (indexToRemove !== -1) {
      this.selectedItems.splice(indexToRemove, 1);
    }else{
      this.selectedItems.push(id);
    }   
  }

}
