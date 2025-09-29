import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiData, StaticData, TimeData } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData(): Observable<ApiData> {
    return this.http.get<ApiData>(`${this.apiUrl}/data`);
  }

  getStaticData(): Observable<StaticData> {
    return this.http.get<StaticData>(`${this.apiUrl}/static-data`);
  }

  getTime(): Observable<TimeData> {
    return this.http.get<TimeData>(`${this.apiUrl}/time`);
  }
}