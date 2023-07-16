import { Component } from '@angular/core';
import {Users} from "../../models/users";
import {UserServiceService} from "../../services/user-service.service";
import {Router, Routes} from "@angular/router";
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  user: Users = new Users();
  constructor(private userService: UserServiceService, private  router: Router) { }
   addUser(user: any){
     console.log(this.user);
     if(user.valid){
        this.userService.addUser(this.user).subscribe(async data => {
          console.log(data);
          await this.router.navigate(['/home']);

        },
          async error => {
            console.log(error);
          });
     }
   }
}
