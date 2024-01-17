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

  title = COURSES[0].description;

  price = 9.99;

  rate = 0.67;

  startDate = new Date(2023, 0, 1); // para o dia 1 do mês de janeiro de 2023

  onCourseSelected(course:Course) {
    console.log("App component - click event bubbled...", course);
  }

  // Caso tenhamos que criar um index personalizado para o parâmetro track para o @for
  trackCourse(index: number, course:Course) {
    return course.id;
  }

}
