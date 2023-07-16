import { Component } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {Users} from "../../models/users";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  constructor(private HttpService: UserServiceService, private router: Router, private  route: ActivatedRoute) {
  }
  res: any = {};
  user: Users [] = [];

  id: number = this.route.snapshot.params['userId']
  ngOnInit(){
    this.HttpService.getUserById(this.id).subscribe(async (res: any) => {
      this.res = res;
      if(res.status === "fail"){
        alert(res.message)
        await this.router.navigate(['/home'])
        return;
      }
      this.user = res.data;
    })
  }

  editUser(userForm: NgForm) {
    if(userForm.valid){
      this.HttpService.editUser(this.id, this.user[0]).subscribe(async (res: any) => {
        this.res = res;
        if(res.status === "fail"){
          alert(res.message)
          await this.router.navigate(['/home'])
          return;
        }
        alert(res.message);
        await this.router.navigate(['/home'])
      })
    }
  }
}
