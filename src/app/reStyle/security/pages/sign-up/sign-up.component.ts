import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {SignUpRequest} from "../../model/sign-up.request";
import {MatCardModule} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatError} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {ToolbarHomeComponent} from "../../../../public/components/toolbar-home/toolbar-home.component";
import {UserService} from "../../services/user.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {SnackbarService} from "../../../../shared/services/snackbar.service";

@Component({
    selector: 'app-sign-up',
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
        MatSelect,
        MatOption
    ],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit {
    form!: FormGroup;
    submitted= false;
    transformedRole: string = '';

    constructor(private builder: FormBuilder, private authenticationService: AuthenticationService,
                private userService:UserService, private snackbarService: SnackbarService){
        super();
    }

    showSuccessMessage(messageContent: string) {
        const successImage='assets/images/success.png'
        this.snackbarService.showSuccess1(messageContent, successImage);
    }

    showErrorMessage() {
        const errorImage='assets/images/error.png'
        this.snackbarService.showError1('Complete correctamente los datos', errorImage);
    }

    ngOnInit(): void {
        this.form= this.builder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            firstName: ['', Validators.required],
            paternalSurname: ['', Validators.required],
            maternalSurname: ['', Validators.required],
            email: ['', Validators.required],
            roleSelected: ['', Validators.required]
        })
    }

    onSubmit(){
        if(this.form.invalid) {
            this.showErrorMessage();
            return;
        }

        this.showSuccessMessage('Usuario creado correctamente')

        let username= this.form.value.username;
        let password= this.form.value.password;
        let roleSelected = this.form.value.roleSelected;
        let firstName= this.form.value.firstName;
        let paternalSurname= this.form.value.paternalSurname;
        let maternalSurname= this.form.value.maternalSurname;
        let email= this.form.value.email;
        let roles: string[] = [];
        //adapt role input to the backend format (ROLE_ + role)
        if(roleSelected === 'contractor'){
            roles = ["ROLE_CONTRACTOR"];
        } else if(roleSelected === 'remodeler') {
            roles = ["ROLE_REMODELER"];
        }
        //add default parameters like description phone and image
        let description = 'This is my description';
        let phone = '990990990';
        let image = 'https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg';

        const signUpRequest= new SignUpRequest(username, password, roles, email, firstName, paternalSurname, maternalSurname, description, phone, image);
        this.authenticationService.signUp(signUpRequest);

        this.submitted = true;

        this.form.reset();
    }

}
