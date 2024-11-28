import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeTabComponent } from './youtube-tab.component';

describe('YoutubeTabComponent', () => {
  let component: YoutubeTabComponent;
  let fixture: ComponentFixture<YoutubeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutubeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
