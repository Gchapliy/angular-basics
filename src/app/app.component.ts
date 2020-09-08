import {Component} from '@angular/core';

export interface Post{
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'I want to learn Angular', text: 'I am still learning components', id: 1},
    {title: 'Next block', text: 'About directives', id: 2}
  ];

  updatePosts(post: Post): void {
    this.posts.unshift(post);
  }

  removePost(id: number): void {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
