import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KullanicisilComponent } from './kullanicisil.component';

describe('KullanicisilComponent', () => {
  let component: KullanicisilComponent;
  let fixture: ComponentFixture<KullanicisilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullanicisilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KullanicisilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
