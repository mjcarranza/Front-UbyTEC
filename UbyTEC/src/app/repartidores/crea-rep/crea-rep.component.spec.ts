import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaRepComponent } from './crea-rep.component';

describe('CreaRepComponent', () => {
  let component: CreaRepComponent;
  let fixture: ComponentFixture<CreaRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
