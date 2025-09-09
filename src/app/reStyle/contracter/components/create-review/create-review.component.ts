import {Component, Input, OnInit} from '@angular/core';
import {ToolbarComponent} from "../../../../public/components/toolbar/toolbar.component";
import {SidebarComponent} from "../../../../public/components/sidebar/sidebar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormGroup, FormsModule, UntypedFormBuilder, Validators} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ContractorSidebarComponent} from "../../../../public/components/sidebarcontractor/sidebar.component";
import {SnackbarService} from "../../../../shared/services/snackbar.service";
import {ToolbarRemodelerComponent} from "../../../../public/components/toolbar-remodeler/toolbar-remodeler.component";
import {Review} from "../../model/review";
import {ReviewService} from "../../services/review.service";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";


@Component({
  selector: 'app-create-review',
  standalone: true,
  imports: [
    ToolbarComponent,
    SidebarComponent,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule,
    ContractorSidebarComponent,
    ToolbarRemodelerComponent,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardImage
  ],
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.css'
})
export class CreateReviewComponent implements OnInit{

  reviews: any[] = [];
  userId: any;
  _reviewForm: FormGroup;

  get reviewForm(): FormGroup {
    return this._reviewForm;
  }


  constructor(private fb: UntypedFormBuilder,  private snackbarService: SnackbarService, private reviewService: ReviewService) {
    this._reviewForm = this.fb.group({
      comment: [''],
      duration: [''],
      image: [''],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  showSuccessMessage(messageContent: string) {
    const successImage='assets/images/success.png'
    this.snackbarService.showSuccess1(messageContent, successImage);
  }

  showErrorMessage(messageContent:string) {
    const errorImage='assets/images/error.png'
    this.snackbarService.showError1(messageContent, errorImage);
  }

  editForm = this.fb.group({
    photo: []
  });

  onSubmit(){
    if (this.reviewForm.valid) {

      //input parameters in form
        let comment = this.reviewForm.value.comment;
        let duration = this.reviewForm.value.duration;
        let image = this.reviewForm.value.image;
        let rating = this.reviewForm.value.rating;

        //default values
      let contractorId:any = this.userId = sessionStorage.getItem('signInId');;
      let projectId = 1;

      const reviewFormData = new Review(contractorId, projectId, comment, duration, image, rating);

      console.log(reviewFormData);

      this.reviewService.createReview(reviewFormData).subscribe((data) => {
        console.log(data);
      });

      this.showSuccessMessage('Review added successfully!');
    }else if (this.reviewForm.invalid) {
      this.showErrorMessage('Complete all fields before submitting!');
    }
  }

  ngOnInit() {
    this.reviewService.getReviews().subscribe((data:any) => {
      this.reviews = data;
    });
  }

}
