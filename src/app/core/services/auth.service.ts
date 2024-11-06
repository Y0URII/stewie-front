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

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, { username, password });
    }

    signup(username: string, email: string, password: string): Observable<any> {
        const payload = { username, email, password };
        return this.http.post(`${this.apiUrl}/signup`, payload);
    }

    // Store JWT token
    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    // Get JWT token
    getToken(): string | null {
        return localStorage.getItem('token');
    }

    // Check if the user is authenticated
    isAuthenticated(): boolean {
        const token = this.getToken();
        return token ? !this.jwtHelper.isTokenExpired(token) : false;
    }

    // Logout method
    logout(): void {
        localStorage.removeItem('token');
    }
}