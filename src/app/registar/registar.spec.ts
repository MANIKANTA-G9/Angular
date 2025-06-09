import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registar } from './registar';

describe('Registar', () => {
  let component: Registar;
  let fixture: ComponentFixture<Registar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Registar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
