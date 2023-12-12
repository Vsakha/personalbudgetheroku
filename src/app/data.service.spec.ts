import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
    ]
    });
    service = TestBed.inject(DataService);
  });
  
});
