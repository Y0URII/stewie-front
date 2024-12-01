import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiUrl = 'http://localhost:8080/api/v1/youtube';

  constructor(private http: HttpClient, private authService: AuthService,) { }

  getYoutubeHome(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.authService.getToken()}`);

    return this.http.get(`${this.apiUrl}/home`, { headers, responseType: 'text' });
  }
}
