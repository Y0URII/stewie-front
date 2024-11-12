import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeedComponent } from './shared-feed.component';

describe('SharedFeedComponent', () => {
  let component: SharedFeedComponent;
  let fixture: ComponentFixture<SharedFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
