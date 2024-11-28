import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstragramTabComponent } from './instragram-tab.component';

describe('InstragramTabComponent', () => {
  let component: InstragramTabComponent;
  let fixture: ComponentFixture<InstragramTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstragramTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstragramTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
