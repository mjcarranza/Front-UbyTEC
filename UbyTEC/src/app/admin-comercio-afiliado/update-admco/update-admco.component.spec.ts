import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdmcoComponent } from './update-admco.component';

describe('UpdateAdmcoComponent', () => {
  let component: UpdateAdmcoComponent;
  let fixture: ComponentFixture<UpdateAdmcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdmcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdmcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
