import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-toolbar-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterLink
  ],
  templateUrl: './toolbar-home.component.html',
  styleUrl: './toolbar-home.component.css'
})
export class ToolbarHomeComponent {

}
