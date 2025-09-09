import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {Router, RouterLink} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import {UserService} from "../../../reStyle/security/services/user.service";

@Component({
  selector: 'app-toolbar',
  standalone: true,
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatBadgeModule,
        RouterLink,
    ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
  id: any | undefined;
  type: any | undefined;
  user: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.id = sessionStorage.getItem("signInId");
    this.getResource();
  }
  getResource(){
    this.userService.getUserById(this.id).subscribe((response: any) => {
      this.user = response;

      if (this.user.roles.includes("ROLE_CONTRACTOR")) {
        sessionStorage.setItem('userType', 'contractor');
        this.type = sessionStorage.getItem("userType".toString());
        console.log(this.id, 'contractor');
      } else if (this.user.roles.includes("ROLE_REMODELER")) {
        sessionStorage.setItem('userType', 'remodeler');
        this.type = sessionStorage.getItem("userType".toString());
        console.log(this.id, 'remodeler');
      } else {
        console.log('No matching role found for user');
      }

    }, (error) => {
      console.error('Error al leer usuario', error);
    });
  }

  redirectToRemodelers() {
    this.router.navigate(['/business']);
  }

  redirectToSupport(){
    this.router.navigate([`support`])
  }

  redirectToProfile() {
    this.router.navigate([`home/profile/${this.type}/${this.id}`])
  }

  logOut(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
  redirectToReviews(){
    this.router.navigateByUrl('reviews');
  }
}
