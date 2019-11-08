import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthnavComponent } from './authnav.component';

describe('AuthnavComponent', () => {
  let component: AuthnavComponent;
  let fixture: ComponentFixture<AuthnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
