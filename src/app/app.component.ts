import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Dynamic title'
  // number = 40
  // arr = [1, 2, 3]
  // obj = {a: 1, b: 2, c: 3}
  // img = 'data:image/jpeg;base64,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'
  //
  // inputValue = '';
  // constructor() {
  //
  // }
  //
  // onInput(event: KeyboardEvent){
  //   console.log('Event', event)
  //   this.inputValue = (<HTMLInputElement>event.target).value
  // }
  //
  // onBlur(str: string){
  //   this.inputValue = str
  // }
  //
  // onClick() {
  //   console.log('click')
  //
  // }

// title = 'Initial'
//
//   onInput(event: any) {
//     this.title = event.target.value
//   }
// toggle: any = false
//   arr = [1, 1, 2, 3, 5, 8, 13]
//
//   objs = [
//     {title: 'Post 1', author: 'Vlad', comments: [
//         {name: 'Max', text: 'lorem1'},
//         {name: 'Max', text: 'lorem2'},
//         {name: 'Max', text: 'lorem3'},
//       ]},
//     {title: 'Post 2', author: 'Vlad2', comments: [
//         {name: 'Max2', text: 'lorem1'},
//         {name: 'Max2', text: 'lorem2'},
//         {name: 'Max2', text: 'lorem3'},
//       ]},
//   ]

  now: Date = new Date()
}
