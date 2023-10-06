import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSwordComponent } from './master-sword.component';

describe('MasterSwordComponent', () => {
  let component: MasterSwordComponent;
  let fixture: ComponentFixture<MasterSwordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterSwordComponent]
    });
    fixture = TestBed.createComponent(MasterSwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
