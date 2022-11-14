import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaEmplComponent } from './crea-empl.component';

describe('CreaEmplComponent', () => {
  let component: CreaEmplComponent;
  let fixture: ComponentFixture<CreaEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaEmplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
