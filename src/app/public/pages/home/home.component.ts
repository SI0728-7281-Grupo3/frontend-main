import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ToolbarHomeComponent} from "../../components/toolbar-home/toolbar-home.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    ToolbarHomeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
