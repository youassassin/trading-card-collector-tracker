import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SquishmallowService {
  private url = 'https://raw.githubusercontent.com/youassassin/youassassin.github.io/main/database-jsons/squishmallow-trading-card-database.json';

  constructor(private http: HttpClient) { }

  getDataBase() {
    return this.http.get<any>(this.url).subscribe(
      (response) => {
        console.log('Data fetched successfully:', response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
