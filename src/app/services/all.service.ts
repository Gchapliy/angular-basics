import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';

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
    const headers = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    });
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post, {
      headers
    });
  }

  removePost(id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    }).pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) {
          console.log('Sent', event);
        }

        if (event.type === HttpEventType.Response) {
          console.log('Response', event);
        }
      })
    );
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'something');
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      params,
      observe: 'response'
    })
      .pipe(
        map(response => {
          return response.body;
        }),
        delay(500),
        catchError(err => {
          console.log('Error: ', err.message);
          return throwError(err);
        }));
  }

  completeTodo(id: number): Observable<Post> {
    return this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      body: 'true'
    }, {
      responseType: 'json'
    });
  }
}
