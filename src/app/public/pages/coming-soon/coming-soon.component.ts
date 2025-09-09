import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [
    SidebarComponent,
    ToolbarComponent
  ],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {

}
