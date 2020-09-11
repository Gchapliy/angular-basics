import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {Post, Todo, AllService} from './services/all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  posts: Post[] = [];

  loading = false;

  todoTitle = '';
  error = '';

  constructor(private allService: AllService) {
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  addPost(): void {
    this.allService.addPost({
      userId: 1,
      title: this.todoTitle,
      body: 'BODY'
    })
      .subscribe(post => {
          console.log('post', post);
          this.posts.push(post);
          this.todoTitle = '';
        }
      );
  }

  addTodo(): void {
    this.addPost();
    if (!this.todoTitle.trim()) {
      return;
    }

    this.todos.unshift({
      id: 1,
      title: this.todoTitle,
      completed: false
    });
  }

  fetchTodos(): void {
    this.loading = true;
    this.allService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      }, error => {
        console.log(error.message);
        this.error = error.message;
      });
  }

  removeTodo(id: number): void {
    this.allService.removePost(id)
      .subscribe(res => {
        this.todos = this.todos.filter(f => f.id !== id);
      });
  }

  completeTodo(id: number): void {
    this.allService.completeTodo(id)
      .subscribe(post => {
        this.todos.find(t => t.id === post.userId).completed = true;
      });
  }
}

