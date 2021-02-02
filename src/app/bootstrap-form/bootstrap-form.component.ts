import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.css']
})
export class BootstrapFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  log(fistName){
    console.log(fistName);
  }

}
