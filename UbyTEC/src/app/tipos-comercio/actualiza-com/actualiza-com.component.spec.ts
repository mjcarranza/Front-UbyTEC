import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaComComponent } from './actualiza-com.component';

describe('ActualizaComComponent', () => {
  let component: ActualizaComComponent;
  let fixture: ComponentFixture<ActualizaComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
