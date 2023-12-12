import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu.component';

import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync } from "@angular/core/testing";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let location: Location;
  let router = {navigate: jasmine.createSpy('navigate')};
  let debugEl;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ MenuComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: Router, useValue: router}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });  

});
