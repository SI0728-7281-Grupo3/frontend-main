import {Component, Input, Inject} from '@angular/core';
import {TrakingI} from "../../models/trackingI";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAnchor, MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatDivider} from "@angular/material/divider";


@Component({
  selector: 'app-pop-up-cotizacion-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatAnchor,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatDivider
  ],
  templateUrl: './pop-up-cotizacion-edit.component.html',
  styleUrl: './pop-up-cotizacion-edit.component.css'
})
export class PopUpCotizacionEditComponent {
  @Input() TimelineData!: TrakingI;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ref: MatDialogRef<PopUpCotizacionEditComponent>, public buildr: FormBuilder) {
  }

  myform = this.buildr.group({
    descripcion: this.buildr.control(''),
    costo: this.buildr.control(''),
    detalle: this.buildr.control(''),
  });

  Saveuser() {

  }

  closePopUp() {
    this.ref.close('Closed using function');
  }
}
