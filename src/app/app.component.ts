import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Want to learn Angular', text: 'I am learning components', id: 1},
    {title: 'Next block', text: 'directives and pipes', id: 2}
  ];

  updatePosts(post: Post): void {
    this.posts.unshift(post);
    console.log('Post', post);
  }

  removePost(id: number): void {
    console.log('id -> ', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0] = {
        title: 'changed',
        text: 'changed 2',
        id: 20
      };
    }, 5000);
  }
}
