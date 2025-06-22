import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Things } from './things';

describe('Things', () => {
  let component: Things;
  let fixture: ComponentFixture<Things>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Things]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Things);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
