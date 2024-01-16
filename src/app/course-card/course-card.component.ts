import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { json } from 'body-parser';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{

  @Input() course: Course;

  @Input({required: true}) index: number;

  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  constructor() {

  }

  ngOnInit() {

  }

  onCourseViewed() {
    console.log("Card component - button cliked... ");
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if(this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }
}
