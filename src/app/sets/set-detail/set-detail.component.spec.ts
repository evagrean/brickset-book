import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDetailComponent } from './set-detail.component';

describe('SetDetailComponent', () => {
  let component: SetDetailComponent;
  let fixture: ComponentFixture<SetDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetDetailComponent]
    });
    fixture = TestBed.createComponent(SetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
