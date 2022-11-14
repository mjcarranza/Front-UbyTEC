import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaClienteComponent } from './elimina-cliente.component';

describe('EliminaClienteComponent', () => {
  let component: EliminaClienteComponent;
  let fixture: ComponentFixture<EliminaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
