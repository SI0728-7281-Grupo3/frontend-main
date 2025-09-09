import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {TrakingI} from "../models/trackingI";

@Injectable({
  providedIn: 'root'
})
export class TrackingIService {
  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {

  }
  getTrackingI():Observable< TrakingI> {
    return this.http.get <TrakingI> (`${this.baseUrl}/vargas3470/tracking/procesosRemodelacion`);
  }
  getTrackingById(id:any){
    return this.http.get (`${this.baseUrl}/tracking/${id}`);
  }
  updateTrackingById(id:any, input: any){
    return this.http.put(`${this.baseUrl}/tracking/${id}`, input);
  }
}

