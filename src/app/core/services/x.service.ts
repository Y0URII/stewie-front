import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XService {

  private apiUrl = 'https://x.com';

  constructor(private http: HttpClient) { }

  getXLogin(): Observable<any> {
    const headers = new HttpHeaders({
      'origin': 'https://www.google.fr',
      'referer': 'https://www.google.fr'
    });

    return this.http.get<any>(this.apiUrl, { headers });
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
