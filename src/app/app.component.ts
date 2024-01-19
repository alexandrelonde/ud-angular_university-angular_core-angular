import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// Para usar meus dados mockados, estou importando-os no arquivo .ts
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  courses = COURSES;

  @ViewChild('cardRef1', {read: ElementRef}) card1: ElementRef;

  @ViewChild('container') containerDiv: ElementRef;

  constructor() {
    
  }

  ngAfterViewInit() {
    console.log("containerDiv", this.card1);
  }

  onCourseSelected(course:Course) {
    console.log("containerDiv", this.card1);

  }

}
