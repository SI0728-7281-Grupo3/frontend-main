import { Component, OnInit } from '@angular/core';
import {PopUpRequisitosComponent} from "../pop-up-requisitos/pop-up-requisitos.component";
import {PopUpAprovacionComponent} from "../pop-up-aprovacion/pop-up-aprovacion.component";
import {PopUpCotizacionComponent} from "../pop-up-cotizacion/pop-up-cotizacion.component";
import {PopUpVisitaPreviaComponent} from "../pop-up-visita-previa/pop-up-visita-previa.component";
import {TrackingIService} from "../../services/tracking-i.service";
import {TrakingI} from "../../models/trackingI";
import {PlaceholderPopUpComponent} from "../placeholder-pop-up/placeholder-pop-up.component";
import {ToolbarComponent} from "../../../../public/components/toolbar/toolbar.component";
import {SidebarComponent} from "../../../../public/components/sidebar/sidebar.component";


@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
      PopUpRequisitosComponent,
      PopUpAprovacionComponent,
      PopUpCotizacionComponent,
      PopUpVisitaPreviaComponent,
      PlaceholderPopUpComponent,
      ToolbarComponent,
      SidebarComponent
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit{

    name: string = '';

  constructor(private trackingIService: TrackingIService) {
    this.loadData()
  }
  ngOnInit() {
      console.log(sessionStorage.getItem("name"))
      this.name = sessionStorage.getItem("name") || '';
  }

  enablePopUp: string="" ;
  TimelineData:TrakingI = {} as TrakingI;
  clickChangePopUp(ename: string){
    this.enablePopUp = ename;
  }

  loadData(){
    this.trackingIService.getTrackingI().subscribe(
      (r:any) => {
        this.TimelineData = r[0];
      },
      e=> {
        console.error(e)
      }
    )
  }


}
