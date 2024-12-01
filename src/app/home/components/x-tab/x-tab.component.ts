import { Component, OnInit } from '@angular/core';
import { XService } from '../../../core/services/x.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-x-tab',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './x-tab.component.html',
  styleUrl: './x-tab.component.css'
})
export class XTabComponent implements OnInit {

  protected sanitizedHtml: SafeHtml = '';
  
  constructor(xService: XService, private sanitizer: DomSanitizer) {
    xService.getXLogin().subscribe(data => {
      console.log(data);
      this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(data);
    })
  }

  ngOnInit(): void {
    
  }

}
