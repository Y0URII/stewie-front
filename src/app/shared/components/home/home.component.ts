import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [HttpClientModule],
})
export class HomeComponent {
  
  constructor(private authService: AuthService, private router: Router) {
    console.log("home token: " + this.authService.getToken());
  }

}
