import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmplComponent } from './tabla-empl.component';

describe('TablaEmplComponent', () => {
  let component: TablaEmplComponent;
  let fixture: ComponentFixture<TablaEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEmplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
