import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
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
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  signup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    this.authService.signup(this.username, this.email, this.password).subscribe(
      (response: any) => {
        // Handle successful signup
        console.log('Signup successful', response);
        this.router.navigate(['/login']); // Redirect to login after successful signup
      },
      (error) => {
        console.error('Signup failed', error);
        this.errorMessage = 'Signup failed. Please try again.';
      }
    );
  }
}
