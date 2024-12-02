import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './core/services/auth.service';
import { XService } from './core/services/x.service';
import { YoutubeService } from './core/services/youtube.service';
import { RunScriptsDirective } from './shared/directives/runScriptsDirective';
import { SafeHtmlPipe } from './shared/pipes/safeHtmlPipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    RunScriptsDirective,
    SafeHtmlPipe
  ],
  providers: [
    AuthService,
    XService,
    YoutubeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stewie-front';
}
