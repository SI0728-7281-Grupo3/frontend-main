import {Component, Inject, Input} from '@angular/core';
import { TrakingI } from '../../models/trackingI';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {PopUpVisitaPreviaEditComponent} from "../pop-up-visita-previa-edit/pop-up-visita-previa-edit.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-pop-up-visita-previa',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    PopUpVisitaPreviaEditComponent
  ],
  templateUrl: './pop-up-visita-previa.component.html',
  styleUrl: './pop-up-visita-previa.component.css'
})
export class PopUpVisitaPreviaComponent {
  @Input() TimelineData!: TrakingI;
  @Input() proyecto: any;

  constructor(private dialog: MatDialog) {
  }


  enablePopUp: string="" ;
  clickChangePopUp(ename: string){
    this.enablePopUp = ename;
  }

  openPopup() {
    this.dialog.open(PopUpVisitaPreviaEditComponent,{width: '30%'});

  }


}
