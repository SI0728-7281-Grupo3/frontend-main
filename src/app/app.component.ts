import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from "./public/components/toolbar/toolbar.component";
import {SidebarComponent} from "./public/components/sidebar/sidebar.component";
import {ChatbotComponent} from "./reStyle/chatbot/components/chatbot/chatbot.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      ToolbarComponent,
      SidebarComponent,
      ChatbotComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReStyleFrontend';
}
