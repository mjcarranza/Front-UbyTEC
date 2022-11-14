import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRepComponent } from './tabla-rep.component';

describe('TablaRepComponent', () => {
  let component: TablaRepComponent;
  let fixture: ComponentFixture<TablaRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
