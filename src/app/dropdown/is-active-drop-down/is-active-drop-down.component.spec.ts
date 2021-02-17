import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsActiveDropDownComponent } from './is-active-drop-down.component';

describe('IsActiveDropDownComponent', () => {
  let component: IsActiveDropDownComponent;
  let fixture: ComponentFixture<IsActiveDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsActiveDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsActiveDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
