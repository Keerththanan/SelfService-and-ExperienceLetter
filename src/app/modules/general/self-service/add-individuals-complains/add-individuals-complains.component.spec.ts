import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndividualsComplainsComponent } from './add-individuals-complains.component';

describe('AddIndividualsComplainsComponent', () => {
  let component: AddIndividualsComplainsComponent;
  let fixture: ComponentFixture<AddIndividualsComplainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIndividualsComplainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIndividualsComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
