import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaRepComponent } from './elimina-rep.component';

describe('EliminaRepComponent', () => {
  let component: EliminaRepComponent;
  let fixture: ComponentFixture<EliminaRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
