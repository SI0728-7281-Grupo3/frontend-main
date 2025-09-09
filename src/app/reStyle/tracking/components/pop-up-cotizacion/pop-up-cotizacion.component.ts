import { Component, Input } from '@angular/core';
import { TrakingI } from '../../models/trackingI';
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {PopUpCotizacionEditComponent} from "../pop-up-cotizacion-edit/pop-up-cotizacion-edit.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-pop-up-cotizacion',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    NgForOf,
    PopUpCotizacionEditComponent
  ],
  templateUrl: './pop-up-cotizacion.component.html',
  styleUrl: './pop-up-cotizacion.component.css'
})
export class PopUpCotizacionComponent {
  @Input() proyecto: any;
  @Input() TimelineData!:TrakingI ;

  constructor(private dialog: MatDialog) {
  }

  enablePopUp: string="" ;
  clickChangePopUp(ename: string){
    this.enablePopUp = ename;
  }

  openPopup() {
    this.dialog.open(PopUpCotizacionEditComponent,{width: '30%'});

  }


}
