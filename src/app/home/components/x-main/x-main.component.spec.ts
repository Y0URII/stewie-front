import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XMainComponent } from './x-main.component';

describe('XMainComponent', () => {
  let component: XMainComponent;
  let fixture: ComponentFixture<XMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
