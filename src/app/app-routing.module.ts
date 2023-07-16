import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent} from "./views/create-user/create-user.component";
import {EditUserComponent} from "./views/edit-user/edit-user.component";
const routes: Routes = [
  {
    path: '', redirectTo:'home', pathMatch:'full'
  },
  {
    path: 'home', component: UsersListComponent
  },
  {
    path: 'create', component: CreateUserComponent
  },
  {
    path: 'edit/:userId', component: EditUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
