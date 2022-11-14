import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmplComponent } from './update-empl.component';

describe('UpdateEmplComponent', () => {
  let component: UpdateEmplComponent;
  let fixture: ComponentFixture<UpdateEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
