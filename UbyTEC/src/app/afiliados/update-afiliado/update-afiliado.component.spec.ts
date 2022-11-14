import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAfiliadoComponent } from './update-afiliado.component';

describe('UpdateAfiliadoComponent', () => {
  let component: UpdateAfiliadoComponent;
  let fixture: ComponentFixture<UpdateAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAfiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
