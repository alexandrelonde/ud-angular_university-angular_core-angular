import { Component } from '@angular/core';
// Para usar meus dados mockados, estou importando-os no arquivo .ts
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Definimos três propriedades dentro da classe AppComponent
  coreCourse  = COURSES[0]; // Posição do vetor não é a mesma do id - CUIDADO

  rxjsCourse = COURSES[1];

  ngrxCourse = COURSES[2];

  onCourseSelected(course:Course) {
    console.log("App component - click event bubbled...", course);
  }

}
