import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { XMainComponent } from "./components/x-main/x-main.component";
import { SharedFeedComponent } from "./components/shared-feed/shared-feed.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, NavbarComponent, CommonModule, XMainComponent, SharedFeedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['/login']);
      }
  }

}
