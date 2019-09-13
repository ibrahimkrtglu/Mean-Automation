import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KullanicilarlistesiComponent } from './kullanicilarlistesi.component';

describe('KullanicilarlistesiComponent', () => {
  let component: KullanicilarlistesiComponent;
  let fixture: ComponentFixture<KullanicilarlistesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullanicilarlistesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KullanicilarlistesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
