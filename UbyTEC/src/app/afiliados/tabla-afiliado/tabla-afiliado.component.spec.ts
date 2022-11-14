import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAfiliadoComponent } from './tabla-afiliado.component';

describe('TablaAfiliadoComponent', () => {
  let component: TablaAfiliadoComponent;
  let fixture: ComponentFixture<TablaAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAfiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
