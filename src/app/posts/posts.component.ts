import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  post: Object;
  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.post = response;
      });
  }
}
