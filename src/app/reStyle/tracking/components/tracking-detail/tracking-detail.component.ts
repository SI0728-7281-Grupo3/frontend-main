import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from "../../../../public/components/sidebar/sidebar.component";
import {ToolbarComponent} from "../../../../public/components/toolbar/toolbar.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, NgForOf} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { DatePipe } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {provideNativeDateAdapter} from '@angular/material/core';

import {TrackingIService} from "../../services/tracking-i.service";
import {RemodelerApiService} from "../../../remodeler/services/remodeler-api.service";

@Component({
  selector: 'app-tracking-detail',
  standalone: true,
  providers: [provideNativeDateAdapter(), DatePipe],
  imports: [
    SidebarComponent,
    ToolbarComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatListModule,
    DatePipe,
    NgForOf,
    MatProgressBarModule
  ],
  templateUrl: './tracking-detail.component.html',
  styleUrl: './tracking-detail.component.css'
})
export class TrackingDetailComponent implements OnInit{

  name: string = '';
  remodelerId: any | undefined;
  tracking: any = {};
  remodeler: any = {};
  project: any = {};
  requirements: string[] = [''];
  progressRequirements = 0;
  visitations: string[] = [''];
  progressVisitations = 0;
  payments: string[] = [''];
  progressQuotes = 0;

  constructor(private trackingService: TrackingIService, private remodelerApiService: RemodelerApiService) {
  }

  ngOnInit(){
    console.log(sessionStorage.getItem("name"))
    this.name = sessionStorage.getItem("name") || '';
    this.remodelerId = sessionStorage.getItem("userId");
    this.getRemodelerById(this.remodelerId);
    this.getProyectRequestsById(this.remodelerId);
    console.log(this.tracking.quote);
  }

  getRemodelerById(id: any):void{
    this.remodelerApiService.getBusinessById(id).subscribe((data:any)=>{
          this.remodeler = data;
        },
        (error:any)=>{
          console.log(error);
        });
  }

  getTrackingById(id: any): void {
    this.trackingService.getTrackingById(id).subscribe(
        (data: any) => {
          this.tracking = data;
        },
        (error: any) => {
          console.log(error);
        }
    );
  }

  getProyectRequestsById(id: any):void{
    this.remodelerApiService.getProjectRequestsById(id).subscribe((data:any)=>{
          this.project = data;
          this.getTrackingById(data.id);
        },
        (error:any)=>{
          console.log(error);
        });
  }
  calculateProgressRequirements() : boolean {
    if (this.requirements.length > 0) {
      this.progressRequirements = 100;
      return true;
    } else {
      this.progressRequirements = 0;
      return false;
    }
  }
  calculateProgressVisitations() : boolean {
    if (this.visitations.length > 0) {
      this.progressVisitations = 100;
      return true;
    } else {
      this.progressVisitations = 0;
      return false;
    }
  }

  calculateProgressPayments() : boolean {
    if (this.payments.length > 0) {
      this.progressQuotes = 100;
      return true;
    } else {
      this.progressQuotes = 0;
      return false;
    }
  }

  updateProject():void{
    if(this.progressRequirements !=0 && this.progressVisitations!=0 && this.progressQuotes!=0){
      this.tracking.projectApproval = true;
      this.trackingService.updateTrackingById(this.tracking.id, this.tracking).subscribe((data:any)=>{
        alert("Proyecto actualizado");
        console.log(data);
        },
          (error:any)=>{
            console.log(error);
          });
    }else{
        alert("Por favor, complete los requisitos, visitas y pagos");
    }
  }

}
