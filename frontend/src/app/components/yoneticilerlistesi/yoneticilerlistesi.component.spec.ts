import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneticilerlistesiComponent } from './yoneticilerlistesi.component';

describe('YoneticilerlistesiComponent', () => {
  let component: YoneticilerlistesiComponent;
  let fixture: ComponentFixture<YoneticilerlistesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoneticilerlistesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticilerlistesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
