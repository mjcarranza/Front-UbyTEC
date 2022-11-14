import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaAfiliadoComponent } from './crea-afiliado.component';

describe('CreaAfiliadoComponent', () => {
  let component: CreaAfiliadoComponent;
  let fixture: ComponentFixture<CreaAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaAfiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
