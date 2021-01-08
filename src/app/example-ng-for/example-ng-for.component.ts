import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-ng-for',
  templateUrl: './example-ng-for.component.html',
  styleUrls: ['./example-ng-for.component.css']
})
export class ExampleNgForComponent {
  courses=[
    
  ]
  LoadCourses(){
   this.courses=[
     { id:1, name:'couse one'},
     { id:2, name:'course two'},
     { id:3, name:'course three'}]
  }
  onAdd(){
    let count = this.courses.length+1;
    this.courses.push({id:this.courses.length+1,name:'course '+count})
  }
  onRemove(course){
    let index= this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  trackCourse(index,course){
    return course ?course.id:undefined;
  }
}

