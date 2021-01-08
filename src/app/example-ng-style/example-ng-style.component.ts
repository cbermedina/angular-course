import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-ng-style',
  templateUrl: './example-ng-style.component.html',
  styleUrls: ['./example-ng-style.component.css']
})
export class ExampleNgStyleComponent implements OnInit {
  canSave=false;
  constructor() { }

  ngOnInit(): void {
  }
  eventCheck(event){
     this.canSave = event.checked? true: false;
  }
}
