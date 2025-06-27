import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError, timeout } from 'rxjs';
export interface Course {
  id: number;
  name: string;
  description: string;
  price: number;
  level: string;
  duration: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: string = '/api/course';


  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl)
      .pipe(
        timeout(3000),
        catchError(error => {
          console.error('Error fetching courses:', error);
          return throwError(() => new Error('Error Courses: ' + error.message))
        }));
  }

  updateCourse(course: Course): Observable<Course> {
  return this.http.put<Course>(this.baseUrl, course).pipe(
    timeout(3000),
    catchError(error => {
      console.log("Error updating course", error);
      return throwError(() => new Error('Error updating course: ' + error.message));
    })
  );
}

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course)
      .pipe(
        timeout(3000),
        catchError(error => {
          console.log("Error adding course", error);
          return throwError(() => new Error('Error adding course: ' + error.message));
        })
      );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
    .pipe(
      timeout(3000),
      catchError(error=>{
        console.log("Error deleting course", error);
        return throwError(() => new Error('Error deleting course: ' + error.message));
      })
    )
  }
}
