import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  apiUrl = 'http://127.0.0.1:8080/stations/all';

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  // return what comes back from this http call
  getUsers() {
    return this.http.get(this.apiUrl);
  }
}
