import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {UserService} from "../../../reStyle/security/services/user.service";

@Component({
  selector: 'app-toolbar-remodeler',
  standalone: true,
    imports: [
        MatButton,
        MatIcon,
        MatMenu,
        MatMenuItem,
        MatToolbar,
        MatToolbarRow,
        RouterLink,
        MatMenuTrigger
    ],
  templateUrl: './toolbar-remodeler.component.html',
  styleUrl: './toolbar-remodeler.component.css'
})
export class ToolbarRemodelerComponent {

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

    redirectToMyProjects() {
        this.router.navigate(['/portfolio']);
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

}
