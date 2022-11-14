import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaAdmcoComponent } from './crea-admco.component';

describe('CreaAdmcoComponent', () => {
  let component: CreaAdmcoComponent;
  let fixture: ComponentFixture<CreaAdmcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaAdmcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaAdmcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
