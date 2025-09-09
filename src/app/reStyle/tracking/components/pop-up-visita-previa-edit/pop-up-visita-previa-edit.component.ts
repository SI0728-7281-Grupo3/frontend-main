import {Component, Inject, Input} from '@angular/core';
import {TrakingI} from "../../models/trackingI";
import {MatFormField} from "@angular/material/form-field";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from "@angular/material/dialog";
import {MatAnchor, MatButton} from "@angular/material/button";

@Component({
  selector: 'app-pop-up-visita-previa-edit',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatDialogActions,
    MatAnchor,
    MatButton,
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  templateUrl: './pop-up-visita-previa-edit.component.html',
  styleUrl: './pop-up-visita-previa-edit.component.css'
})
export class PopUpVisitaPreviaEditComponent {
  @Input() TimelineData!: TrakingI;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ref: MatDialogRef<PopUpVisitaPreviaEditComponent>, public buildr: FormBuilder) {
  }

  closePopUp(){
    this.ref.close('Closed using function');
  }

  myform = this.buildr.group({
    monto: this.buildr.control(''),
    detalles: this.buildr.control(''),
  });


  Saveuser() {

  }
}
