import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstudentComponent } from './liststudent.component';

describe('ListstudentComponent', () => {
  let component: ListstudentComponent;
  let fixture: ComponentFixture<ListstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListstudentComponent]
    });
    fixture = TestBed.createComponent(ListstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
