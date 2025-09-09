import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../../../reStyle/security/services/user.service";

@Component({
  selector: 'app-contractor-sidebar-contractor',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class ContractorSidebarComponent implements OnInit{

  type: string = '';
  id: any | undefined;
  userData: any = {};

  constructor(
      private router: Router,
      private userService: UserService) {
  }

  ngOnInit() {
    this.type = sessionStorage.getItem("userType") || '';
    this.id = sessionStorage.getItem("signInId");
    if (this.id) {
      this.userService.getUserById(this.id).subscribe(
          (response: any) => {
            this.userData = response;
          },
          (error) => {
            console.error('Error al leer usuario', error);
          }
      );
    }
  }

  redirectToRemodelers(){
    this.router.navigateByUrl('/business');
  }
  redirectToComingSoon(){
    this.router.navigateByUrl('/coming-soon');
  }
  redirectToReviews(){

      this.router.navigateByUrl('/reviews');

  }
  redirectToSupport(){
    this.router.navigate([`support`])
  }
  inDevelopment(){
    alert('Esta opción está en desarrollo, Disculpe las molestias!');
  }
  redirectToProfile() {
    this.router.navigate([`home/profile/${this.type}/${this.id}`])
  }
  redirectToProyects(){
    if(this.type === 'remodeler'){
      this.router.navigate(['/home/remodeler/tracking']);
    }else if(this.type === 'contractor'){
      this.router.navigateByUrl('/coming-soon');
    }
  }
}
