import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneticisilComponent } from './yoneticisil.component';

describe('YoneticisilComponent', () => {
  let component: YoneticisilComponent;
  let fixture: ComponentFixture<YoneticisilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoneticisilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticisilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
