import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaAfiliadoComponent } from './elimina-afiliado.component';

describe('EliminaAfiliadoComponent', () => {
  let component: EliminaAfiliadoComponent;
  let fixture: ComponentFixture<EliminaAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaAfiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
