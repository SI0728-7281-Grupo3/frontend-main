import {Component, Input} from '@angular/core';
import {TrakingI} from "../../models/trackingI";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-placeholder-pop-up',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './placeholder-pop-up.component.html',
  styleUrl: './placeholder-pop-up.component.css'
})
export class PlaceholderPopUpComponent {

  @Input() proyecto: any;
  @Input() TimelineData!:TrakingI ;
}
