import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChildren, EventEmitter, OnInit, Output, QueryList } from '@angular/core';
import { ContentTabEnum } from './enums/content-tab.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class NavbarComponent implements OnInit {
  
  @Output() changeTab: EventEmitter<ContentTabEnum> = new EventEmitter<ContentTabEnum>();

  tabs = ContentTabEnum;
  activeTab: ContentTabEnum = ContentTabEnum.Home;

  ngOnInit(): void {
    this.changeTab.emit(this.activeTab);
  }

  selectTab(tab: ContentTabEnum) {
    this.activeTab = tab;
    this.changeTab.emit(this.activeTab);
  }
}
