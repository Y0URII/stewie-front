import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['/home']);
    }
  }

  signup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    if(this.firstname === '' || this.lastname === '' || this.email === '' || this.password === '') {
      this.errorMessage = 'Please fill in all fields!';
      return;  
    } 

    /*if (this.password.length < 8) {
      this.errorMessage = 'Password must be at least 8 characters long!';
      return;
    } 

    if (!this.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
      this.errorMessage = 'Password must contain at least one lowercase letter, one uppercase letter, and one number!';
      return;
    }*/

    if (!this.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      this.errorMessage = 'Please enter a valid email address!';
      return;
    }

    if(this.firstname.length < 3 || this.lastname.length < 3) {
      this.errorMessage = 'First name and last name must be at least 3 characters long!'; 
      return; 
    } 

    if(this.firstname.length > 20 || this.lastname.length > 20) {
      this.errorMessage = 'First name and last name must be at most 20 characters long!'; 
      return; 
    }

    if(this.email.length > 50) {
      this.errorMessage = 'Email must be at most 50 characters long!';    
      return;
    }

    if(this.username == ''){
      this.username = this.email.split('@')[0];
    }

    this.authService.signup(this.firstname, this.lastname, this.username, this.email, this.password).subscribe(
      (response: any) => {
        console.log('Signup successful', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Signup failed', error);
        this.errorMessage = 'Signup failed. Please try again.';
      }
    );
  }
}
