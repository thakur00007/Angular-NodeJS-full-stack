import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './views/create-user/create-user.component';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { EditUserComponent } from './views/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    UsersListComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
