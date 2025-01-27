import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Output() formSubmitted = new EventEmitter<any>(); // Emit submitted data
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value); // Emit the form value
    }
  }
}
