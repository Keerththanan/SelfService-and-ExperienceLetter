import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivualWelfareComponent } from './indivual-welfare.component';

describe('IndivualWelfareComponent', () => {
  let component: IndivualWelfareComponent;
  let fixture: ComponentFixture<IndivualWelfareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivualWelfareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivualWelfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
