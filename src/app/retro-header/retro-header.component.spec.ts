import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroHeaderComponent } from './retro-header.component';

describe('RetroHeaderComponent', () => {
  let component: RetroHeaderComponent;
  let fixture: ComponentFixture<RetroHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
