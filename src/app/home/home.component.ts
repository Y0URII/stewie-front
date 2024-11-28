import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { XTabComponent } from './components/x-tab/x-tab.component';
import { SharedFeedComponent } from './components/shared-feed/shared-feed.component';
import { ContentTabEnum } from '../shared/components/navbar/enums/content-tab.enum';
import { YoutubeTabComponent } from './components/youtube-tab/youtube-tab.component';
import { InstragramTabComponent } from './components/instragram-tab/instragram-tab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    NavbarComponent,
    CommonModule,
    XTabComponent,
    YoutubeTabComponent,
    InstragramTabComponent,
    SharedFeedComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @Input() activeTab!: ContentTabEnum;
  tabs = ContentTabEnum;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  changeTab(newTab: ContentTabEnum) {
    console.log(newTab);
    this.activeTab = newTab;
  }
}
