import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { environment } from "../../../environnements/environment";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = environment.apiUrl;
    private jwtHelper = new JwtHelperService();

    constructor(private http: HttpClient) {}

    signup(firstname: string, lastname: string, email: string, password: string): Observable<any> {
        const payload = { firstname, lastname, email, password };
        return this.http.post(`${this.apiUrl}/v1/auth/signup`, payload);
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/v1/auth/login`, { email, password });
    }

    setToken(token: string): void {
        localStorage.setItem('accessToken', token);
    }

    getToken(): string | null {
        return localStorage.getItem('accessToken');
    }

    isAuthenticated(): boolean {
        const token = this.getToken();
        return token ? !this.jwtHelper.isTokenExpired(token) : false;
    }

    logout(): void {
        localStorage.removeItem('token');
    }
}