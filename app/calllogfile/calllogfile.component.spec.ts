import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalllogfileComponent } from './calllogfile.component';

describe('CalllogfileComponent', () => {
  let component: CalllogfileComponent;
  let fixture: ComponentFixture<CalllogfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalllogfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalllogfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
