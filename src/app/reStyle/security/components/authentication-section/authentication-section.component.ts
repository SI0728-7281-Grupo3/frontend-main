import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-authentication-section',
  standalone: true,
  imports: [],
  templateUrl: './authentication-section.component.html',
  styleUrl: './authentication-section.component.css'
})
export class AuthenticationSectionComponent {
  currentUserName: string = '';
  isSignedIn: boolean = false;
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUsername.subscribe((username) => this.currentUserName = username);
    this.authenticationService.isSignedIn.subscribe((isSignedIn) => this.isSignedIn = isSignedIn);
  }

  onSignIn() {
    this.router.navigate(['home/signIn']).then();
  }

  onSignUp() {
    this.router.navigate(['home/signUp']).then();
  }

  onSignOut() {
    this.authenticationService.signOut();
  }
}
