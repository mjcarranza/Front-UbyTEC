import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRepComponent } from './update-rep.component';

describe('UpdateRepComponent', () => {
  let component: UpdateRepComponent;
  let fixture: ComponentFixture<UpdateRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
