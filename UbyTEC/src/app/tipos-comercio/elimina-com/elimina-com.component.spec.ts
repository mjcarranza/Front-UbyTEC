import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaComComponent } from './elimina-com.component';

describe('EliminaComComponent', () => {
  let component: EliminaComComponent;
  let fixture: ComponentFixture<EliminaComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
