import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Definimos três variáveis dentro da classe AppComponent
  coreCourse  = COURSES[0];

  rxjsCourse = COURSES[1];
  
  ngrxCourse = COURSES[2];

}
