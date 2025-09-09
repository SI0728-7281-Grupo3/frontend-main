import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {User} from "../model/user.entity";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UserService{

  baseUrl: string = `${environment.serverBasePath}`;
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(`${this.baseUrl}/users`);
  }
  getUserById(id: any){
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }
  updateUser(id: any, data: any){
    return this.http.put(`${this.baseUrl}/users/${id}`, data);
  }
  getProfiles(){
    return this.http.get(`${this.baseUrl}/profiles`);
  }
  getProfileById(id: any){
    return this.http.get(`${this.baseUrl}/profiles/${id}`);
  }
  getContractorById(id: any){
    return this.http.get(`${this.baseUrl}/Contractors/${id}`);
  }
  getUserByField(field: string, value: any){
    return this.http.get(`${this.baseUrl}/${field}/${value}`);
  }
  createUser(data: any){
    return this.http.post(`${this.baseUrl}/profiles`, data);
  }
}
