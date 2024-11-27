import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class XService {

  private apiUrl = 'http://localhost:8080/api/v1/x';


  constructor(private http: HttpClient, private authService: AuthService,) { }

  getXLogin(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.authService.getToken()}`);

    return this.http.get(`${this.apiUrl}/welcome`, { headers, responseType: 'text' });
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getDataWithParams(): Observable<any> {
    const params = new HttpParams()
      .set('page', '1')
      .set('limit', '10');

    return this.http.get<any>(this.apiUrl, { params });
  }

  // Example with custom headers
  getDataWithHeaders(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer YOUR_TOKEN_HERE');

    return this.http.get<any>(this.apiUrl, { headers });
  }
}
