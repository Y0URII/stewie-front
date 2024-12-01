import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { YoutubeService } from '../../../core/services/youtube.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-youtube-tab',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './youtube-tab.component.html',
  styleUrl: './youtube-tab.component.css'
})
export class YoutubeTabComponent implements OnInit  {

  protected sanitizedHtml: SafeHtml = '';
  
  constructor(youtubeService: YoutubeService, private sanitizer: DomSanitizer) {
    youtubeService.getYoutubeHome().subscribe(data => {
      console.log(data);
      this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(data);
    })
  }

  ngOnInit(): void {
    
  }
}
