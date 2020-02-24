import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducctionComponent } from './introducction.component';

describe('IntroducctionComponent', () => {
  let component: IntroducctionComponent;
  let fixture: ComponentFixture<IntroducctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
