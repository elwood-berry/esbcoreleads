import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ListingsService {
  constructor(private http: HttpClient) {}

  //
  public getData(url): Observable<any> {
    return this.http.get<any>(url);
  }
}
