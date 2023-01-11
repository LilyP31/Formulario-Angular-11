import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsValiComponent } from './forms-vali.component';

describe('FormsValiComponent', () => {
  let component: FormsValiComponent;
  let fixture: ComponentFixture<FormsValiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsValiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsValiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
