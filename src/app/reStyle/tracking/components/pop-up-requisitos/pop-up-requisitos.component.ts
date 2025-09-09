import { Component, Input } from '@angular/core';
import { TrakingI } from '../../models/trackingI';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pop-up-requisitos',
  standalone: true,
  imports: [

    NgForOf
  ],
  templateUrl: './pop-up-requisitos.component.html',
  styleUrl: './pop-up-requisitos.component.css'
})
export class PopUpRequisitosComponent {
  @Input() proyecto: any;
  @Input() TimelineData!:TrakingI ;

  constructor() { }
  aceptarProyecto() {
    console.log(this.TimelineData.requerimientos.aceptado)
    this.TimelineData.requerimientos.aceptado = true;
  }
}
