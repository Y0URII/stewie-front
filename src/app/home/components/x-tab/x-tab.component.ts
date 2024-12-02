import { Component, OnInit } from '@angular/core';
import { XService } from '../../../core/services/x.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RunScriptsDirective } from '../../../shared/directives/runScriptsDirective';
import { SafeHtmlPipe } from '../../../shared/pipes/safeHtmlPipe';

@Component({
  selector: 'app-x-tab',
  standalone: true,
  imports: [HttpClientModule, CommonModule, SafeHtmlPipe, RunScriptsDirective],
  templateUrl: './x-tab.component.html',
  styleUrl: './x-tab.component.css'
})
export class XTabComponent implements OnInit {

  protected htmlPage: string = '';
  
  constructor(xService: XService, private sanitizer: DomSanitizer) {
    xService.getXLogin().subscribe(data => {
      this.htmlPage = data;
    })
  }

  ngOnInit(): void {
    
  }

}
