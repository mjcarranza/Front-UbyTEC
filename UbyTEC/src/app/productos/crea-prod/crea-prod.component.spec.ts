import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaProdComponent } from './crea-prod.component';

describe('CreaProdComponent', () => {
  let component: CreaProdComponent;
  let fixture: ComponentFixture<CreaProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
