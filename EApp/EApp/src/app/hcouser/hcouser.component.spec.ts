import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcouserComponent } from './hcouser.component';

describe('HcouserComponent', () => {
  let component: HcouserComponent;
  let fixture: ComponentFixture<HcouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcouserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
