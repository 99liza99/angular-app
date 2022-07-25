import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dynamic title';
  number = 28;
  arr = [1, 2, 3];
  obj = { a: 111, b: 112 };
  img = '../assets/angular.png';
  inputValue = '';

  onClick() {
   console.log('Click!')
  }
}

