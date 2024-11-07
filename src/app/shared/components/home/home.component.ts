import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) {
    console.log("home token: " + this.authService.getToken());
  }

  ngOnInit(): void {
    console.log("home ! :)");
      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['/login']);
      }
  }

}
