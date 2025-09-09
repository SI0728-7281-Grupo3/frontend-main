import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from "../../public/components/toolbar/toolbar.component";
import { SidebarComponent } from "../../public/components/sidebar/sidebar.component";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { SnackbarService } from '../../shared/services/snackbar.service';
import {RemodelerApiService} from "../remodeler/services/remodeler-api.service";
import {ToolbarRemodelerComponent} from "../../public/components/toolbar-remodeler/toolbar-remodeler.component";
import {Portfolio} from "./portfolio-entity";

@Component({
  selector: 'app-portfolio',
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
    ToolbarRemodelerComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  _portfolioForm: FormGroup;


  get portfolioForm(): FormGroup {
    return this._portfolioForm;
  }

  constructor(private snackbarService: SnackbarService, private fb: FormBuilder, private remodelerApiService : RemodelerApiService) {
    this._portfolioForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.editForm = this.fb.group({
      photo: [null]
    });
  }

  showSuccessMessage(messageContent: string) {
    const successImage = 'assets/images/success.png';
    this.snackbarService.showSuccess1(messageContent, successImage);
  }

  showErrorMessage(messageContent: string) {
    const errorImage = 'assets/images/error.png';
    this.snackbarService.showError1(messageContent, errorImage);
  }

  editForm: FormGroup;

  onSubmit() {
    if (this._portfolioForm.valid) {

      //input parameters in form
      let name = this._portfolioForm.value.name;
      let description = this._portfolioForm.value.description;
      let image = this._portfolioForm.value.image;
      //deafault parameters
      let businessId = 1;
      let contractorId = 1;
      let startDate = "2024-06-24T17:51:01.729Z";
      let finishDate = "2024-06-24T17:51:01.729Z";

      const portfolioFormData = new Portfolio(name, description, businessId, contractorId, startDate, finishDate, image);

      this.remodelerApiService.createProject(portfolioFormData).subscribe(
          (response) => {
            console.log('response', response);
          },
          (error) => {
            console.log('error', error);
          }
      );
      this.showSuccessMessage('The project has been added successfully')
      console.log('portfolioFormData', portfolioFormData);
    } else if (this._portfolioForm.invalid) {
      this.showErrorMessage('Error adding the project');
    }
  }

  ngOnInit(): void {
  }
}
