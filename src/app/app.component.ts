import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

export interface Post {
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  loading = false;

  todoTitle = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo(): void {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    const newPost: Post = {
      userId: 1,
      title: this.todoTitle,
      body: 'BODY'
    };

    this.http.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .subscribe(post => {
          console.log('post', post);
          this.todoTitle = '';
        }
      );
  }

  fetchTodos(): void {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      });
  }
}

