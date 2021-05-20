import { FormArray, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  form;
  /**
   *
   */
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [],
      contact: fb.group({
        email: [],
        phone: [],
        topics: fb.array([])
        ,
      })
    })
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
