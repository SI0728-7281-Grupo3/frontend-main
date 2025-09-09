import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatError} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {BaseFormComponent} from "../../../../shared/components/base-form.component";
import {AuthenticationService} from "../../services/authentication.service";
import {SignInRequest} from "../../model/sign-in.request";
import {ToolbarHomeComponent} from "../../../../public/components/toolbar-home/toolbar-home.component";
import {RouterLink} from "@angular/router";
import {SnackbarService} from "../../../../shared/services/snackbar.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-sign-in',
  standalone: true,
    imports: [
        MatCardModule,
        MatFormField,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        NgIf,
        MatError,
        ToolbarHomeComponent,
        RouterLink
    ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent extends BaseFormComponent implements OnInit{
  form!: FormGroup;
  submitted = false;

  constructor(
      private builder: FormBuilder,
      private authenticationService: AuthenticationService,
      private snackbarService: SnackbarService){
    super();
  }

  showSuccessMessage(messageContent: string) {
      const successImage='assets/images/success.png'
      this.snackbarService.showSuccess1(messageContent, successImage);
  }

  showErrorMessage(messageContent: string) {
      const errorImage='assets/images/error.png'
      this.snackbarService.showError1(messageContent, errorImage);
  }

  ngOnInit(): void {
    this.form = this.builder.group(
        {
          username: ['', Validators.required],
          password: ['', Validators.required],
        }
    );
  }

  onSubmit(){
    if(this.form.invalid) {
       this.form.reset();
    }

    let username= this.form.value.username;
    let password= this.form.value.password;
    const signInRequest= new SignInRequest(username, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted=true;
    this.form.reset();
  }
}
