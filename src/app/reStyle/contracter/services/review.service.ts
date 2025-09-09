import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ReviewService{
    baseUrl: string = `${environment.serverBasePath}`;
    constructor(private http:HttpClient) { }


    createReview(data: any){
        return this.http.post(`${this.baseUrl}/reviews`, data);
    }
    // get all reviews
    getReviews(){
        return this.http.get(`${this.baseUrl}/reviews`);
    }

}