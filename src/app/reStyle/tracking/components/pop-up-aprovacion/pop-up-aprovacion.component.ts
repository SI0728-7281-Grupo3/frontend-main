import { Component, Input } from '@angular/core';
import { TrakingI } from '../../models/trackingI';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-pop-up-aprovacion',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './pop-up-aprovacion.component.html',
  styleUrl: './pop-up-aprovacion.component.css'
})
export class PopUpAprovacionComponent {
  @Input() proyecto: any;
  @Input() TimelineData!:TrakingI ;

}
