import {Component, OnInit} from '@angular/core';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader, MatCardImage,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {SidebarComponent} from "../../../../public/components/sidebar/sidebar.component";
import {ToolbarComponent} from "../../../../public/components/toolbar/toolbar.component";
import {RemodelerService} from "../../services/remodeler.service";
import {UserService} from "../../../security/services/user.service";
import {Remodeler} from "../../model/remodeler.entity";
import {User} from "../../model/user.entity";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {EditFormComponent} from "../edit-form/edit-form.component";
import {MatDialog} from "@angular/material/dialog";
import {RemodelerApiService} from "../../../remodeler/services/remodeler-api.service";

@Component({
  selector: 'app-remodeler-profile',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle,
        MatIcon,
        SidebarComponent,
        ToolbarComponent,
        NgForOf,
        MatButton,
        MatCardActions,
        MatCardImage
    ],
  templateUrl: './remodeler-profile.component.html',
  styleUrl: './remodeler-profile.component.css'
})
export class RemodelerProfileComponent implements OnInit{
    userID: any;

    userData: any = {}
    remodelers: any = {}
    business: any = {};
    projects: any = [];
    email: any;
    description: any;
    phone: any;
    image: any;
    isEditing: boolean = false;

    constructor(private remodelerService: RemodelerService, private userService: UserService, public dialog: MatDialog, private remodelerApiService: RemodelerApiService) {
        this.userID = sessionStorage.getItem('signInId');
    }

    ngOnInit(): void {
        this.getResource()
    }

    getResource() {
         this.userService.getUserById(this.userID).subscribe((response: any) => {
             this.userData = response;
             console.log(this.userData)
         }, (error) => {
             console.error('Error al leer usuario', error);
        });
        this.remodelerService.getRemodelerById(1).subscribe((response: any)=>{
            this.remodelers = response;
        },(error) => {
            console.error('Error al leer remodelador', error);
        })
        this.remodelerApiService.getProjects().subscribe((data:any)=>{
                this.projects = data;
            },
            (error:any)=>{
                console.log(error);
            });
    }

    openEditDialog() {
        this.isEditing = !this.isEditing;
        if(this.isEditing){
            const dialogRef = this.dialog.open(EditFormComponent, {
                width: '400px',
                data: { ...this.userData }
            });
            dialogRef.afterClosed().subscribe(result => {
                this.userService.updateUser(this.userData.id,result).subscribe(
                    (data: any) => {
                        this.userData = data;
                    },
                    (error: any) => {
                        console.log(error);
                    });
            });
        }
    }

    getProjectsByBusinessId(businessId: number): any[] {
        return this.projects.filter((project: { businessId: any; }) => Number(project.businessId) === businessId);
    }
}
