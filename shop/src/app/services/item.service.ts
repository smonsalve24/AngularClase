import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, timeout } from 'rxjs';
export interface Item {
  id: number,
  name: string,
  description: string,
  amount: number,
  urlImage: String
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private http: HttpClient = inject(HttpClient)
  private baseURL: string = "http://localhost:8083/item";

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseURL)
      .pipe(timeout(3000),
        catchError(err => {
          console.log("Error retireve itemes", err);
          return throwError(() => new Error("Error Items"))
        }));
  }
}
