import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEditComponent } from './delete-edit.component';

describe('DeleteEditComponent', () => {
  let component: DeleteEditComponent;
  let fixture: ComponentFixture<DeleteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
