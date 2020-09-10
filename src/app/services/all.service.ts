import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

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

@Injectable({providedIn: 'root'})
export class AllService {
  constructor(private http: HttpClient) {
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }

  removePost(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todoss?_limit=2')
      .pipe(
        delay(500),
        catchError(err => {
          console.log('Error: ', err.message);
          return throwError(err);
        }));
  }

  completeTodo(id: number): Observable<Post> {
    return this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      body: 'true'
    });
  }
}
