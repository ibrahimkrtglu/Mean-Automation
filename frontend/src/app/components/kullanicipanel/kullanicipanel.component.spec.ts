import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KullanicipanelComponent } from './kullanicipanel.component';

describe('KullanicipanelComponent', () => {
  let component: KullanicipanelComponent;
  let fixture: ComponentFixture<KullanicipanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullanicipanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KullanicipanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
