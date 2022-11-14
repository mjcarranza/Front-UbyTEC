import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaProdComponent } from './elimina-prod.component';

describe('EliminaProdComponent', () => {
  let component: EliminaProdComponent;
  let fixture: ComponentFixture<EliminaProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
