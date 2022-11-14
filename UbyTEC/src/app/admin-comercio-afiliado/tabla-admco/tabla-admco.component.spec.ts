import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAdmcoComponent } from './tabla-admco.component';

describe('TablaAdmcoComponent', () => {
  let component: TablaAdmcoComponent;
  let fixture: ComponentFixture<TablaAdmcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAdmcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAdmcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
