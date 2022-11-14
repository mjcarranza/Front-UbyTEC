import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComComponent } from './tabla-com.component';

describe('TablaComComponent', () => {
  let component: TablaComComponent;
  let fixture: ComponentFixture<TablaComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
