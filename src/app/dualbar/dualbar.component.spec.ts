import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualbarComponent } from './dualbar.component';

describe('DualbarComponent', () => {
  let component: DualbarComponent;
  let fixture: ComponentFixture<DualbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
});
