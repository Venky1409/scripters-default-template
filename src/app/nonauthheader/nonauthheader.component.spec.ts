import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonauthheaderComponent } from './nonauthheader.component';

describe('NonauthheaderComponent', () => {
  let component: NonauthheaderComponent;
  let fixture: ComponentFixture<NonauthheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonauthheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonauthheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
