import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaEmplComponent } from './elimina-empl.component';

describe('EliminaEmplComponent', () => {
  let component: EliminaEmplComponent;
  let fixture: ComponentFixture<EliminaEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaEmplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
