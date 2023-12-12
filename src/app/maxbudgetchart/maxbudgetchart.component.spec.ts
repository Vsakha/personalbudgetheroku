import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxbudgetchartComponent } from './maxbudgetchart.component';

describe('MaxbudgetchartComponent', () => {
  let component: MaxbudgetchartComponent;
  let fixture: ComponentFixture<MaxbudgetchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxbudgetchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxbudgetchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
});
