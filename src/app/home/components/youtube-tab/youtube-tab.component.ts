import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { YoutubeService } from '../../../core/services/youtube.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from '../../../shared/pipes/safeHtmlPipe';
import { RunScriptsDirective } from '../../../shared/directives/runScriptsDirective';

@Component({
  selector: 'app-youtube-tab',
  standalone: true,
  imports: [HttpClientModule, CommonModule, SafeHtmlPipe, RunScriptsDirective],
  templateUrl: './youtube-tab.component.html',
  styleUrl: './youtube-tab.component.css'
})
export class YoutubeTabComponent implements OnInit  {

  protected htmlPage: string = '';
  
  constructor(youtubeService: YoutubeService, private sanitizer: DomSanitizer) {
    youtubeService.getYoutubeHome().subscribe(data => {
      this.htmlPage = data;
    })
  }

  ngOnInit(): void {
    
  }
}
