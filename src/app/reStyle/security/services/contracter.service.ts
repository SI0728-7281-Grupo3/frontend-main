import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Contracter} from "../model/contracter.entity";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContracterService {

  baseUrl: string = `${environment.serverBasePath}`;
  constructor(private http:HttpClient) { }

  getContractors(){
    return this.http.get(`${this.baseUrl}/contractors`);
  }
  getContractorById(id: any){
    return this.http.get(`${this.baseUrl}/contractors/${id}`);
  }
  createContractor(data: any){
    return this.http.post(`${this.baseUrl}/contractors`, data);
  }
}
