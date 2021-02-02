import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'styling-invalid-input-fields',
  templateUrl: './styling-invalid-input-fields.component.html',
  styleUrls: ['./styling-invalid-input-fields.component.css']
})
export class StylingInvalidInputFieldsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  log(name) {
    console.log(name);
  }

}
