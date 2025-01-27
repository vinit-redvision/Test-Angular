import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-form-modal',
  imports: [MatButtonModule, MatDialogModule, FormComponent],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.scss',
})
export class FormModalComponent {
  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(formData: any): void {
    this.dialogRef.close(formData);
  }
}
