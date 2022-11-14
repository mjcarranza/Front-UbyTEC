import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaComComponent } from './crea-com.component';

describe('CreaComComponent', () => {
  let component: CreaComComponent;
  let fixture: ComponentFixture<CreaComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
