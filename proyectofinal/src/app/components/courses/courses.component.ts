import { Component, inject, signal } from '@angular/core';
import { Course, ItemService } from '../../service/item.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [CurrencyPipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  private service: ItemService = inject(ItemService);
  courses=signal<Course[]>([]);

  ngOnInit(){
    this.service.getCourses().subscribe({
      next: data=>{
        this.courses.set(data)},
      error: error=>{console.error('Error Courses Service:', error);
      }
    })
  }
}
