import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XTabComponent } from './x-tab.component';

describe('XTabComponent', () => {
  let component: XTabComponent;
  let fixture: ComponentFixture<XTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
