import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {SnackbarService} from "../../../../shared/services/snackbar.service";

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgIf,
    MatButtonModule
  ],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {
  editForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private snackbarService: SnackbarService,
      private dialogRef: MatDialogRef<EditFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.fb.group({
      email: [data.email, [Validators.required, Validators.email]],
      description: [data.description, Validators.required],
      phone: [data.phone, Validators.required],
      image: [data.image]
    });
  }

  save() {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
      this.showSuccessMessage('Profile updated successfully');
    }
  }

  close() {
    this.dialogRef.close();
  }

  showSuccessMessage(messageContent: string) {
    const successImage='assets/images/success.png'
    this.snackbarService.showSuccess1(messageContent, successImage);
  }
}
