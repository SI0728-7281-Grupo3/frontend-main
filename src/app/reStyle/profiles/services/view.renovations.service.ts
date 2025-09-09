import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ViewRenovationsService {

  /*baseUrl: string = environment.baseURL;
  constructor(private http:HttpClient) { }

  getRemodelers(){
    return this.http.get(`${this.baseUrl}/alehandraxx/myrepo/remodelers`);
  }

  getRemodelerById(id: any){
    return this.http.get(`${this.baseUrl}/alehandraxx/myrepo/remodelers/${id}`);
  }*/
}
