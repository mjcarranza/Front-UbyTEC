import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaAdmcoComponent } from './elimina-admco.component';

describe('EliminaAdmcoComponent', () => {
  let component: EliminaAdmcoComponent;
  let fixture: ComponentFixture<EliminaAdmcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaAdmcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaAdmcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
