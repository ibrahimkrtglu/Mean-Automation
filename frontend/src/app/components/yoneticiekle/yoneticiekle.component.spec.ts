import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneticiekleComponent } from './yoneticiekle.component';

describe('YoneticiekleComponent', () => {
  let component: YoneticiekleComponent;
  let fixture: ComponentFixture<YoneticiekleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoneticiekleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticiekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
