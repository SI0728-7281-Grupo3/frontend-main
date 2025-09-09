import {Component, Input, OnInit} from '@angular/core';
import {ToolbarComponent} from "../../public/components/toolbar/toolbar.component";
import {SidebarComponent} from "../../public/components/sidebar/sidebar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ContractorSidebarComponent} from "../../public/components/sidebarcontractor/sidebar.component";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SnackbarService} from "../../shared/services/snackbar.service";
import {ToolbarRemodelerComponent} from "../../public/components/toolbar-remodeler/toolbar-remodeler.component";

@Component({
  selector: 'app-support',
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
        ToolbarRemodelerComponent
    ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent implements OnInit{
  _supportForm: FormGroup;

  get supportForm(): FormGroup {
    return this._supportForm;
  }

  type: string = '';
  userType: string | null = null;


  constructor(  private snackbarService: SnackbarService, private http: HttpClient, private fb: FormBuilder) {
    this._supportForm = this.fb.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
    });
  }



  showSuccessMessage(messageContent: string) {
    const successImage='assets/images/success.png'
    this.snackbarService.showSuccess1(messageContent, successImage);
  }

  showErrorMessage() {
    const errorImage='assets/images/error.png'
    this.snackbarService.showError1('Complete correctamente los datos', errorImage);
  }




  onSubmit() {
    if (this._supportForm.valid) {

      this.showSuccessMessage('Mensaje enviado correctamente');

      //Aquí va la logica para enviar el mensaje al servidor y guardar en la base de datos


      this._supportForm.reset()

    } else if (this._supportForm.invalid) {
      this.showErrorMessage();
      this._supportForm.reset()
    }
  }



  ngOnInit(): void {

    this.fetchUserType().subscribe((userType: string) => {
      this.userType = userType;
    });
    this.type = sessionStorage.getItem("userType") || '';

  }

  private fetchUserType(): Observable<string> {
    return this.http.get<string>('http://localhost:3000/user'); // Adjust URL as per your JSON Server setup
  }
}
