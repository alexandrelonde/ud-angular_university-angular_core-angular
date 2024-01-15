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

  courses = COURSES;

  onCourseSelected(course:Course) {
    console.log("App component - click event bubbled...", course);
  }

  // Caso tenhamos que criar um index personalizado para o parâmetro track para o @for
  trackCourse(index: number, course:Course) {
    return course.id;
  }

}
