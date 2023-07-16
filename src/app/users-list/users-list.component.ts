import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UserServiceService } from '../services/user-service.service';
import {Routes} from "@angular/router";
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
    resData: any = {

    };
    users: Users[] = [];

    constructor( private userService: UserServiceService ) {}


  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.resData = data;
      this.users = this.resData.data;
    })
  }

  deleteUser(id: number) {
      if(confirm("Are you sure to delete this user?")){
        this.userService.deleteUser(id).subscribe(async data =>{
          this.resData = data;
          alert(this.resData.message);
          await this.getUsers();
        })
      }
  }
}
