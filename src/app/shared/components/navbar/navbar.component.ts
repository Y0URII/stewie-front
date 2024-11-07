import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NavbarModule,
} from '@coreui/angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavbarModule,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
