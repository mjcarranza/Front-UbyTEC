import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaAfiliadoComponent } from './actualiza-afiliado.component';

describe('ActualizaAfiliadoComponent', () => {
  let component: ActualizaAfiliadoComponent;
  let fixture: ComponentFixture<ActualizaAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaAfiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
