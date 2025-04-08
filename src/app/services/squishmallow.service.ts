import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquishmallowService {
  private url = 'https://raw.githubusercontent.com/youassassin/youassassin.github.io/main/database-jsons/squishmallow-trading-card-database.json';

  constructor(private http: HttpClient) { }

  getDataBase(): Promise<any> {
    return new Promise((done, error) => {
      this.http.get<any>(this.url).subscribe({
        next: (response) => {
          console.log('Data fetched successfully:', response);
          done(response);
        },
        error: (error) => {
          console.error('Error fetching data:', error);
          error(error);
        }
      }
      )
    });
  }
}
