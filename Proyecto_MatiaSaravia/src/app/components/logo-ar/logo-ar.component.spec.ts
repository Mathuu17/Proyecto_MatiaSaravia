import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArComponent } from './logo-ar.component';

describe('LogoArComponent', () => {
  let component: LogoArComponent;
  let fixture: ComponentFixture<LogoArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
