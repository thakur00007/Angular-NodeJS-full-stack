import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:5000/user";
  constructor(private HttpClient: HttpClient) { }

  getUsers(): Observable<JSON>{
    return this.HttpClient.get<JSON>(this.baseUrl).pipe(
      map((res: any) => {
        return res;
      }
    ));
  }

  addUser(user: Users): Observable<JSON>{
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' }
    };
    return this.HttpClient.post<JSON>(this.baseUrl, user, httpOptions).pipe(
      map((res: any) => {
        return res;
      }
    ));
  }

  getUserById(id: number): Observable<JSON>{
    return this.HttpClient.get(this.baseUrl+"/"+id).pipe(
      map((res: any) => {
        return res;
      }
      ));
  }

  deleteUser(id: number): Observable<JSON>{
    return this.HttpClient.delete<JSON>(this.baseUrl + "/" + id).pipe(
      map((res: any) => {
        return res;
      }
    ));
  }

  editUser(id: number, user: Users) {
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' }
    };
    return this.HttpClient.put<JSON>(this.baseUrl + "/" + id, user, httpOptions).pipe(
      map((res: any) => {
        return res;
      }
    ));
  }
}
