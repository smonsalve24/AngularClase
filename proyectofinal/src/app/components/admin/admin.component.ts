import { Component, inject, signal } from '@angular/core';
import { Course, ItemService } from '../../service/item.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  editingCourse: Course = {
    id: 0,
    name: '',
    description: '',
    duration: '',
    level: '',
    price: 0
  };

  private service: ItemService = inject(ItemService);
  private build = inject(FormBuilder);
  // Using signal to manage the courses state
  courses = signal<Course[]>([]);

  courseForm = this.build.group({
    name: [''],
    description: [''],
    duration: [''],
    level: [''],
    price: [0]
  });

  ngOnInit() {
    this.service.getCourses().subscribe({
      next: data => {
        this.courses.set(data), console.log('Courses fetched successfully:', data);
      },
      error: error => {
        console.error('Error Courses Service:', error);

      }
    })
  }
  addCourse(){
    const newCourse: Course = {
      id: 0,
      name: this.courseForm.value.name || '',
      description: this.courseForm.value.description || '',
      duration: this.courseForm.value.duration || '',
      level: this.courseForm.value.level || '',
      price: this.courseForm.value.price || 0
    };

    this.service.addCourse(newCourse).subscribe({
      next: course => {
        console.log('Course added successfully:', course);
        this.courses.update(courses => [...courses, course]);
        this.courseForm.reset();
      },
      error: error => {
        console.error('Error adding course:', error);
      }
    });
  }

  deleteCourse(id: number) {
    this.service.deleteCourse(id).subscribe({
      next: () => {
        console.log('Course deleted successfully:', id);
        this.courses.update(courses => courses.filter(course => course.id !== id));
      },
      error: error => {
        console.log("Error delete", error);
      }
    })
  }

  editCourse(course: Course) {
    this.editingCourse = { ...course };
    const modalEl = document.getElementById('editCourseModal')!;
    const modal = new (window as any).bootstrap.Modal(modalEl);
    modal.show();
  }

  saveCourse() {
    this.service.updateCourse(this.editingCourse).subscribe({
      next: () => {
        console.log('Saving course:', this.editingCourse);

        this.courses.update(courses => 
          courses.map(course => 
            course.id === this.editingCourse.id ? this.editingCourse : course
          )
        );

        const modalEL = document.getElementById('editCourseModal')!;
        if (modalEL) {
          const modal = (window as any).bootstrap.Modal.getInstance(modalEL);
          modal?.hide();
        }
      },
      error: err => {
        console.log("Error saving course", err);

      }
    })

  }

}
