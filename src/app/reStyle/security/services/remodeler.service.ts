import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RemodelerService{

  baseUrl: string = `${environment.serverBasePath}`;
  constructor(private http:HttpClient) { }

  getRemodelers(){
    return this.http.get(`${this.baseUrl}/remodelers`);
  }
  getRemodelerById(id: any){
    return this.http.get(`${this.baseUrl}/remodelers/${id}`);
  }
  createRemodeler(data: any){
    return this.http.post(`${this.baseUrl}/remodelers`, data);
  }
}
