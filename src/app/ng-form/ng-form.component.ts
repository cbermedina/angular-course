import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css']
})
export class NgFormComponent implements OnInit {
  contactMethods = [
    {
      id: 1, name: 'Email',
    },
    {
      id: 2, name: 'Phone'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  submit(f) {
    console.log(f);
  }
}
