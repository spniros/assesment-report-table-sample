import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getTestActivities():Observable<any> {
    const url = 'https://ljifg6p8cd.execute-api.us-east-1.amazonaws.com/production/matific-test-activities';
    return this.http.get<any>(url);
  }
  getTestClasses():Observable<any> {
    const url = 'https://ljifg6p8cd.execute-api.us-east-1.amazonaws.com/production/matific-test-classes';
    return this.http.get<any>(url);
  }
}
