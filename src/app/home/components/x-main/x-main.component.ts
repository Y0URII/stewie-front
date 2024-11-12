import { Component, OnInit } from '@angular/core';
import { XService } from '../../../core/services/x.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-x-main',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './x-main.component.html',
  styleUrl: './x-main.component.css'
})
export class XMainComponent implements OnInit {

  constructor(private xService: XService) {
    console.log('XMainComponent');
    xService.getXLogin().subscribe(data => console.log(data));
  }

  ngOnInit(): void {
    
  }

}
