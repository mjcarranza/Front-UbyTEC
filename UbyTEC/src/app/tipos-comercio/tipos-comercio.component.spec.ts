import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposComercioComponent } from './tipos-comercio.component';

describe('TiposComercioComponent', () => {
  let component: TiposComercioComponent;
  let fixture: ComponentFixture<TiposComercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposComercioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
