import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-ng-class',
  templateUrl: './example-ng-class.component.html',
  styleUrls: ['./example-ng-class.component.css']
})
export class ExampleNgClassComponent implements OnInit {
  isFavorite: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  onClick() { 
    this.isFavorite = !this.isFavorite;
  }
}
