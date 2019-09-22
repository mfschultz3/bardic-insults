import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BardicInsultComponent } from './bardic-insult.component';

describe('BardicInsultComponent', () => {
  let component: BardicInsultComponent;
  let fixture: ComponentFixture<BardicInsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BardicInsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BardicInsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
